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

  const contact = String(payload.contact || "").trim();
  if (!contact) {
    return "Укажите email, Telegram или телефон для связи.";
  }

  if (contact.includes("@") && !contact.startsWith("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
    return "Проверьте email.";
  }

  if (!String(payload.pilotGoal || "").trim()) {
    return "Коротко опишите, что хотите проверить первым.";
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
      role: formData.get("role"),
      projectCount: formData.get("projectCount"),
      currentTools: formData.get("currentTools"),
      pilotGoal: formData.get("pilotGoal"),
      contact: formData.get("contact"),
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
          role: String(payload.role || "").trim(),
          projectCount: String(payload.projectCount || "").trim(),
          currentTools: String(payload.currentTools || "").trim(),
          pilotGoal: String(payload.pilotGoal || "").trim(),
          contact: String(payload.contact || "").trim(),
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
        message: "Заявка отправлена. Свяжемся с вами и предложим первый процесс для пилота."
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
          <label htmlFor={compact ? "contact-channel" : "lead-channel"}>Email, Telegram или телефон</label>
          <input
            id={compact ? "contact-channel" : "lead-channel"}
            name="contact"
            type="text"
            autoComplete="email"
            placeholder="Например: @username или name@company.ru"
            required
          />
        </div>
        <div className="field span-2">
          <label htmlFor={compact ? "contact-goal" : "lead-goal"}>Где сейчас больше всего трения</label>
          <input
            id={compact ? "contact-goal" : "lead-goal"}
            name="pilotGoal"
            type="text"
            placeholder="Например: промо-календарь, бюджеты, рассылки, задачи или интеграции"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={compact ? "contact-role" : "lead-role"}>Ваша роль</label>
          <select id={compact ? "contact-role" : "lead-role"} name="role" defaultValue="">
            <option value="" disabled>
              Выберите роль
            </option>
            <option value="enterprise-marketing">Руководитель enterprise-маркетинга</option>
            <option value="network-marketing">Маркетинг сети / франшизы</option>
            <option value="crm-marketer">CRM-маркетолог</option>
            <option value="marketing-team">Внутренняя маркетинговая команда</option>
            <option value="agency-owner">Владелец / руководитель агентства</option>
            <option value="project-lead">Project / account lead</option>
            <option value="it-security">IT / безопасность</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor={compact ? "contact-projects" : "lead-projects"}>Объем процесса</label>
          <select id={compact ? "contact-projects" : "lead-projects"} name="projectCount" defaultValue="">
            <option value="" disabled>
              Выберите объем
            </option>
            <option value="1-2">1-2 процесса для пилота</option>
            <option value="3-5">3-5 активных процессов</option>
            <option value="6-15">6-15 активностей / проектов</option>
            <option value="15+">Больше 15 активностей / точек</option>
          </select>
        </div>
        <div className="field span-2">
          <label htmlFor={compact ? "contact-tools" : "lead-tools"}>Где сейчас живут план, задачи, бюджеты и данные</label>
          <input
            id={compact ? "contact-tools" : "lead-tools"}
            name="currentTools"
            type="text"
            placeholder="Например: Excel, CDP, ERP, 1C, BI, таскер, Drive, Telegram"
          />
        </div>
        <div className="field span-2">
          <label htmlFor={compact ? "contact-comment" : "lead-comment"}>Комментарий</label>
          <textarea
            id={compact ? "contact-comment" : "lead-comment"}
            name="comment"
            rows={5}
            placeholder="Коротко опишите команду, текущий процесс, ограничения по данным или главный источник ручной сверки."
          />
        </div>
      </div>
      <div className="cluster">
        <button className="button button-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправляем..." : "Получить план пилота"}
        </button>
      </div>
      <div className={`form-status${status.kind ? ` ${status.kind}` : ""}`} aria-live="polite">
        {status.message}
      </div>
    </form>
  );
}
