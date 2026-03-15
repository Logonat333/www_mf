import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Тарифы MailFlow | Пакеты внедрения и сопровождения",
  description:
    "Пакеты MailFlow для команд разного масштаба: старт, команда и multi-project. CTA на запрос коммерческого предложения.",
  path: "/pricing"
});

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      description: "Для небольших команд и стартапов",
      price: "Бесплатно",
      features: ["До 5 пользователей", "Все основные модули", "Email поддержка", "10 GB хранилища", "Базовая аналитика", "API доступ"],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Для растущих команд",
      price: "По запросу",
      features: [
        "До 20 пользователей",
        "Все модули + приоритетная поддержка",
        "100 GB хранилища",
        "Расширенная аналитика",
        "Кастомные роли",
        "SSO интеграция",
        "Автоматизация воркфлоу"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Для крупных организаций",
      price: "По запросу",
      features: [
        "Неограниченное количество пользователей",
        "Персональный менеджер",
        "Неограниченное хранилище",
        "Кастомная аналитика",
        "Выделенная инфраструктура",
        "On-premise развертывание"
      ],
      highlighted: false
    }
  ];

  const comparison = [
    {
      category: "Модули системы",
      rows: [
        ["Дашборд с аналитикой", true, true, true],
        ["Контент-план", true, true, true],
        ["Email рассылки", true, true, true],
        ["Медиатека", true, true, true],
        ["База знаний", true, true, true],
        ["Управление проектами", false, true, true]
      ]
    },
    {
      category: "Интеграции",
      rows: [
        ["API доступ", true, true, true],
        ["Webhooks", false, true, true],
        ["Кастомные интеграции", false, false, true]
      ]
    }
  ];

  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Пакеты MailFlow",
    itemListElement: plans.map((item) => ({
      "@type": "Offer",
      name: item.name,
      description: item.description
    }))
  };

  return (
    <>
      <StructuredData data={offerJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">MVP-пакеты</span>
            <h1>Прозрачные тарифы</h1>
            <p className="page-intro">
              Выберите план, который подходит для вашей команды. Все пакеты подаются как запрос коммерческого
              предложения.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container pricing-grid">
          {plans.map((item) => (
            <article key={item.name} className={`price-card${item.highlighted ? " featured" : ""}`}>
              {item.highlighted ? <span className="plan-badge">Популярный</span> : null}
              <span className="card-tag">{item.name}</span>
              <div className="price-name">{item.name}</div>
              <p className="price-note">{item.description}</p>
              <div className="price-value">{item.price}</div>
              <ul className="check-list">
                {item.features.map((bullet) => (
                  <li key={bullet}>
                    <Check size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link className={`button ${item.highlighted ? "button-primary" : "button-secondary"}`} href="/contacts">
                {item.name === "Free" ? "Начать бесплатно" : "Запросить предложение"}
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="comparison-table surface">
            <div className="comparison-head">
              <strong>Возможности</strong>
              <strong>Free</strong>
              <strong>Professional</strong>
              <strong>Enterprise</strong>
            </div>
            {comparison.map((group) => (
              <div key={group.category}>
                <div className="comparison-group">{group.category}</div>
                {group.rows.map((row) => (
                  <div key={row[0] as string} className="comparison-row">
                    <span>{row[0] as string}</span>
                    {[row[1], row[2], row[3]].map((value, index) => (
                      <span key={index} className="comparison-cell">
                        {value ? <Check size={16} /> : "—"}
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
                <h2>Нужен расчёт под структуру вашей команды?</h2>
                <p className="lead">
                  Соберём пакет по числу проектов, ролям, объёму рассылок и требуемому уровню сопровождения.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Запросить предложение
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/solutions">
                  Сценарии
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
