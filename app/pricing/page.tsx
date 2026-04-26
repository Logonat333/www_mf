import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { pilotPlans } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Пилот MailFlow | Форматы запуска на реальных проектах",
  description:
    "Форматы пилота MailFlow: запуск на 1-2 клиентах, командный пилот и индивидуальное внедрение без полного переезда с текущего стека.",
  path: "/pricing"
});

const comparison = [
  {
    category: "Запуск",
    rows: [
      ["1-2 реальных проекта", true, true, true],
      ["Помощь с переносом части данных", true, true, true],
      ["Несколько ролей в тесте", false, true, true]
    ]
  },
  {
    category: "Рабочий контур",
    rows: [
      ["Задачи, доски и материалы", true, true, true],
      ["Клиентские согласования", true, true, true],
      ["Индивидуальная карта процесса", false, false, true]
    ]
  },
  {
    category: "Следующие слои",
    rows: [
      ["Разбор аналитики и KPI", false, true, true],
      ["План интеграций", false, false, true],
      ["Roadmap под ваш стек", false, false, true]
    ]
  }
];

export default function PricingPage() {
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Форматы пилота MailFlow",
    itemListElement: pilotPlans.map((item) => ({
      "@type": "Offer",
      name: item.name,
      description: item.note
    }))
  };

  return (
    <>
      <StructuredData data={offerJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Форматы пилота</span>
            <h1>Начинаем с проверки пользы, а не с большого внедрения</h1>
            <p className="page-intro">
              Первый шаг — взять ограниченный клиентский контур и понять, снижает ли MailFlow ручную сборку процесса,
              потерю контекста и хаос в согласованиях.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-grid">
          {pilotPlans.map((item) => (
            <article key={item.name} className={`price-card${item.featured ? " featured" : ""}`}>
              {item.featured ? <span className="plan-badge">Рекомендуем</span> : null}
              <span className="card-tag">{item.tag}</span>
              <div className="price-name">{item.name}</div>
              <p className="price-note">{item.note}</p>
              <div className="price-value">По итогам заявки</div>
              <ul className="check-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Check size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link className={`button ${item.featured ? "button-primary" : "button-secondary"}`} href="/contacts">
                Запросить демо
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="comparison-table surface">
            <div className="comparison-head">
              <strong>Что входит</strong>
              <strong>Pilot</strong>
              <strong>Team</strong>
              <strong>Custom</strong>
            </div>
            {comparison.map((group) => (
              <div key={group.category}>
                <div className="comparison-group">{group.category}</div>
                {group.rows.map((row) => (
                  <div key={row[0] as string} className="comparison-row">
                    <span>{row[0] as string}</span>
                    {[row[1], row[2], row[3]].map((value, index) => (
                      <span key={index} className="comparison-cell">
                        {value ? <Check size={16} /> : "-"}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Не знаете, какой формат выбрать?</h2>
                <p className="lead">
                  В заявке опишите текущий стек и число проектов. Мы предложим самый узкий пилот, который даст
                  честную проверку пользы.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Оставить заявку
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/solutions">
                  Сценарии ролей
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
