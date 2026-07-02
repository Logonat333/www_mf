import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  company?: string;
  role?: string;
  projectCount?: string;
  currentTools?: string;
  pilotGoal?: string;
  contact?: string;
  email?: string;
  phone?: string;
  comment?: string;
  source?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as LeadPayload | null;

  if (!payload) {
    return NextResponse.json({ detail: "Некорректный JSON payload." }, { status: 400 });
  }

  const name = payload.name?.trim() || "";
  const company = payload.company?.trim() || "";
  const contact = payload.contact?.trim() || payload.email?.trim() || payload.phone?.trim() || "";
  const email = payload.email?.trim() || (isEmail(contact) ? contact : "");
  const phone = payload.phone?.trim() || (!isEmail(contact) ? contact : "");
  const pilotGoal = payload.pilotGoal?.trim() || "";

  if (!name || !company || !contact || !pilotGoal) {
    return NextResponse.json({ detail: "Заполните обязательные поля." }, { status: 400 });
  }

  if (email && !isEmail(email)) {
    return NextResponse.json({ detail: "Проверьте email." }, { status: 400 });
  }

  const normalizedPayload = {
    ...payload,
    name,
    company,
    contact,
    email,
    phone,
    pilotGoal
  };

  const upstreamUrl = process.env.MAILFLOW_LEADS_ENDPOINT;

  if (upstreamUrl) {
    const upstream = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(normalizedPayload),
      cache: "no-store"
    });

    const body = await upstream.text();

    return new NextResponse(body || JSON.stringify({ ok: upstream.ok }), {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json"
      }
    });
  }

  return NextResponse.json({
    ok: true,
    detail: "Заявка принята локальным Next.js route. Для production задайте MAILFLOW_LEADS_ENDPOINT.",
    lead: {
      name,
      company,
      role: payload.role?.trim() || "",
      projectCount: payload.projectCount?.trim() || "",
      currentTools: payload.currentTools?.trim() || "",
      pilotGoal,
      contact,
      email,
      phone,
      comment: payload.comment?.trim() || "",
      source: payload.source || "/"
    }
  });
}
