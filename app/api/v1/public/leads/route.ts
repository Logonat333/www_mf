import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  company?: string;
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
  const email = payload.email?.trim() || "";
  const phone = payload.phone?.trim() || "";

  if (!name || !company || !email || !phone) {
    return NextResponse.json({ detail: "Заполните обязательные поля." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ detail: "Проверьте email." }, { status: 400 });
  }

  const upstreamUrl = process.env.MAILFLOW_LEADS_ENDPOINT;

  if (upstreamUrl) {
    const upstream = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload),
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
      email,
      phone,
      comment: payload.comment?.trim() || "",
      source: payload.source || "/"
    }
  });
}
