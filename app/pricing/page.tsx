import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { afterRequestSteps, pilotPlans } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Тарифы MailFlow | Форматы пилота для маркетингового планирования",
  description:
    "Форматы запуска MailFlow: пилот промо-календаря, бюджетирования, задач, интеграций и enterprise-внедрения после диагностики процесса.",
  path: "/pricing"
});

const comparison = [
  {
    category: "Запуск",
    rows: [
      ["1-2 реальных процесса", true, true, true],
      ["Помощь с переносом части данных", true, true, true],
      ["Несколько ролей в тесте", false, true, true]
    ]
  },
  {
    category: "Рабочий процесс",
    rows: [
      ["Промо-календарь, задачи и материалы", true, true, true],
      ["Бюджеты и согласования", true, true, true],
      ["Индивидуальная карта процесса", false, false, true]
    ]
  },
  {
    category: "Следующие слои",
    rows: [
      ["Разбор аналитики и KPI", false, true, true],
      ["План интеграций", false, false, true],
      ["План развития под ваш стек и безопасность", false, false, true]
    ]
  }
];

const pilotBasics = [
  {
    title: "Старт без большого внедрения",
    text: "Берем узкий участок работы, а не переносим сразу все задачи, документы и интеграции."
  },
  {
    title: "Результат фиксируем заранее",
    text: "До запуска определяем, что должно стать проще: промо-план, бюджет, статусы, согласования или контроль результата."
  },
  {
    title: "Интеграции после проверки",
    text: "CDP, ERP, 1C, BI и автоматизация подключаются только после того, как понятна польза процесса."
  }
];

export default function PricingPage() {
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Тарифы MailFlow",
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
            <span className="eyebrow">Тарифы</span>
            <h1>Выберите формат проверки MailFlow на реальном маркетинговом процессе</h1>
            <p className="page-intro">
              Первый шаг — выбрать 1-2 процесса и понять, снижает ли MailFlow ручную сборку промо-плана, бюджета,
              статусов, материалов и результата.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacts">
                Обсудить мой процесс
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/features">
                Что внутри MailFlow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="next-step-grid">
            {pilotBasics.map((item, index) => (
              <article key={item.title} className="next-step-card">
                <span>{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
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
              <div className="price-value">После диагностики</div>
              <div className="price-detail-grid">
                <div className="price-detail">
                  <strong>Срок</strong>
                  <p>{item.duration}</p>
                </div>
                <div className="price-detail">
                  <strong>На выходе</strong>
                  <p>{item.result}</p>
                </div>
                <div className="price-detail">
                  <strong>Нужно от вас</strong>
                  <p>{item.requiredFromClient}</p>
                </div>
              </div>
              <ul className="check-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Check size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link className={`button ${item.featured ? "button-primary" : "button-secondary"}`} href="/contacts">
                Обсудить мой процесс
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <span className="eyebrow">После заявки</span>
              <h2>Сначала определяем формат, потом обсуждаем стоимость</h2>
              <p>
                Цена зависит от количества ролей, проектов и глубины настройки. Поэтому первый шаг — короткий разбор,
                чтобы не предлагать лишний объем.
              </p>
            </div>
          </div>
          <div className="next-step-grid">
            {afterRequestSteps.map((item, index) => (
              <article key={item.title} className="next-step-card">
                <span>{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
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
                  В заявке опишите текущий стек, число активностей, ограничения по данным и главный источник ручной
                  сверки. Мы предложим самый узкий пилот для быстрой проверки пользы.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Обсудить мой процесс
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
