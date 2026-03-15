"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  compact?: boolean;
};

type StatusState = {
  kind: "" | "success" | "error";
  message: string;
};

const initialStatus: StatusState = { kind: "", message: "" };

function validateLead(payload: Record<string, FormDataEntryValue | null>) {
  if (!String(payload.name || "").trim()) {
    return "Укажите имя.";
  }

  if (!String(payload.company || "").trim()) {
    return "Укажите компанию.";
  }

  const email = String(payload.email || "").trim();
  if (!email) {
    return "Укажите email.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Проверьте email.";
  }

  const phone = String(payload.phone || "").replace(/[^\d+]/g, "");
  if (phone.length < 7) {
    return "Проверьте телефон.";
  }

  return "";
}

export function LeadForm({ compact = false }: LeadFormProps) {
  const [status, setStatus] = useState<StatusState>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      comment: formData.get("comment"),
      source: window.location.pathname
    };

    const validationError = validateLead(payload);
    if (validationError) {
      setStatus({ kind: "error", message: validationError });
      return;
    }

    setIsSubmitting(true);
    setStatus({ kind: "", message: "Отправляем заявку..." });

    try {
      const response = await fetch("/api/v1/public/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: String(payload.name || "").trim(),
          company: String(payload.company || "").trim(),
          email: String(payload.email || "").trim(),
          phone: String(payload.phone || "").trim(),
          comment: String(payload.comment || "").trim(),
          source: payload.source
        })
      });

      const result = (await response.json().catch(() => null)) as { detail?: string } | null;

      if (!response.ok) {
        throw new Error(result?.detail || "Не удалось отправить заявку. Попробуйте ещё раз.");
      }

      form.reset();
      setStatus({
        kind: "success",
        message: "Заявка отправлена. Команда MailFlow свяжется с вами."
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Не удалось отправить заявку.";
      setStatus({ kind: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={compact ? "contact-name" : "lead-name"}>Имя</label>
          <input id={compact ? "contact-name" : "lead-name"} name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={compact ? "contact-company" : "lead-company"}>Компания</label>
          <input
            id={compact ? "contact-company" : "lead-company"}
            name="company"
            type="text"
            autoComplete="organization"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={compact ? "contact-email" : "lead-email"}>Email</label>
          <input
            id={compact ? "contact-email" : "lead-email"}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={compact ? "contact-phone" : "lead-phone"}>Телефон</label>
          <input id={compact ? "contact-phone" : "lead-phone"} name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className="field span-2">
          <label htmlFor={compact ? "contact-comment" : "lead-comment"}>Комментарий</label>
          <textarea
            id={compact ? "contact-comment" : "lead-comment"}
            name="comment"
            rows={5}
            placeholder="Коротко опишите команду, объём проектов или текущий процесс."
          />
        </div>
      </div>
      <div className="cluster">
        <button className="button button-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправляем..." : "Оставить заявку"}
        </button>
      </div>
      <div className={`form-status${status.kind ? ` ${status.kind}` : ""}`} aria-live="polite">
        {status.message}
      </div>
    </form>
  );
}
