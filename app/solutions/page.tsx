import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ClipboardList, Handshake, UserRoundCog } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { audienceLandingPages, scenarios } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Сценарии MailFlow | Enterprise marketing, сети, франшизы и агентства",
  description:
    "Сценарии MailFlow для enterprise-маркетинга, сетей, франшиз, маркетологов и агентств: промо-календарь, бюджеты, задачи, интеграции и аналитика.",
  path: "/solutions"
});

const icons = [BriefcaseBusiness, UserRoundCog, ClipboardList, Handshake];

const roleStates = [
  {
    before: ["План собирается вручную", "Бюджет виден поздно", "Результат оторван от активности"],
    after: ["Пилот на реальных процессах", "Видно задачи, бюджет и блокеры", "Проще обсуждать интеграции"]
  },
  {
    before: ["Рассылки живут в CDP", "План ведется в таблице", "Результат переносится вручную"],
    after: ["Активность связана с задачей", "Материалы рядом с запуском", "Результат привязан к карточке"]
  },
  {
    before: ["Филиалы ведутся в таблицах", "Материалы разъезжаются по чатам", "Трудно понять состояние сети"],
    after: ["Филиалы связаны с активностями", "Документы рядом с задачами", "Сеть видна как рабочее пространство"]
  },
  {
    before: ["Данные нельзя выносить без проверки", "IT не видит архитектуру", "Интеграции обсуждаются поздно"],
    after: ["Есть контур данных", "Понятны доступы и роли", "План внедрения готов до закупки"]
  }
];

export default function SolutionsPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Сценарии MailFlow",
    about: [...scenarios.map((item) => item.tag), ...audienceLandingPages.map((item) => item.navLabel)]
  };

  return (
    <>
      <StructuredData data={pageJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Ролевые сценарии</span>
            <h1>Как MailFlow помогает enterprise-маркетингу, сетям и агентствам видеть один план</h1>
            <p className="page-intro">
              MailFlow особенно полезен там, где несколько ролей управляют маркетинговыми активностями: один планирует
              промо, другой ведет задачи, третий отвечает за бюджет, руководитель держит контроль.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacts">
                Обсудить мой процесс
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/features">
                Смотреть возможности
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <span className="eyebrow">Для кого</span>
              <h2>Отдельные страницы под аудитории и поисковые запросы</h2>
              <p>
                На этих посадочных можно точнее раскрывать пользу MailFlow для enterprise-маркетинга, сетей,
                франшиз, агентств, digital-команд, маркетологов и внутренних команд.
              </p>
            </div>
          </div>
          <div className="feature-grid audience-card-grid">
            {audienceLandingPages.map((page) => (
              <Link key={page.slug} className="card audience-link-card" href={`/solutions/${page.slug}`}>
                <span className="card-tag">{page.tag}</span>
                <h3>{page.navLabel}</h3>
                <p>{page.description}</p>
                <span className="card-keyword">{page.keywords[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container solutions-stack">
          {scenarios.map((item, index) => {
            const Icon = icons[index] || ClipboardList;
            const states = roleStates[index];

            return (
              <section key={item.tag} className="solution-block">
                <div className="solution-role-badge">
                  <div className="icon-tile">
                    <Icon size={18} />
                  </div>
                  <span>{item.tag}</span>
                </div>
                <div className="problem-solution-grid">
                  <article className="card card-contrast card-problem">
                    <h3>
                      <span className="problem-label">До:</span> процесс приходится склеивать вручную
                    </h3>
                    <p>{item.text}</p>
                    <div className="state-box state-box-danger">
                      <span>Текущая ситуация</span>
                      <ul className="mini-points">
                        {states.before.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                  <article className="card card-contrast">
                    <h3>
                      <span className="solution-label">С MailFlow:</span> {item.title}
                    </h3>
                    <ul className="check-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="state-box state-box-success">
                      <span>В пилоте</span>
                      <ul className="mini-points">
                        {states.after.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </div>
                {index < scenarios.length - 1 ? <div className="section-divider" /> : null}
              </section>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Где сейчас ломается ваш процесс чаще всего?</h2>
                <p className="lead">
                  В заявке укажите, где больше всего трения: промо-календарь, бюджетирование, задачи, интеграции,
                  согласования или контроль результата.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Обсудить мой процесс
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/features">
                  Смотреть возможности
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
