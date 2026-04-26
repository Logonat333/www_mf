import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ClipboardList, Handshake, UserRoundCog } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { scenarios } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Сценарии MailFlow | Агентство, CRM-маркетолог, project lead и клиент",
  description:
    "Ролевые сценарии MailFlow для агентства и клиента: задачи, доски, согласования, календарь и материалы в одном рабочем хабе.",
  path: "/solutions"
});

const icons = [BriefcaseBusiness, UserRoundCog, ClipboardList, Handshake];

const roleStates = [
  {
    before: ["Статусы собираются вручную", "Сложно доказать объем работ", "Клиентская картина распадается"],
    after: ["Пилот на реальных проектах", "Видно задачи и блокеры", "Проще обсуждать расширение объема"]
  },
  {
    before: ["Запросы прилетают в чаты", "Тексты и файлы живут отдельно", "Правки теряются между версиями"],
    after: ["Запрос сразу становится задачей", "Материалы рядом с активностью", "Согласование привязано к карточке"]
  },
  {
    before: ["Доски, задачи и документы разорваны", "Много вложенных задач", "Трудно быстро понять состояние проекта"],
    after: ["Доска связана с задачей", "Проект виден как рабочий контур", "Клиенту открыт только нужный слой"]
  },
  {
    before: ["Нужно писать в чат", "Не видно последнюю версию", "Неясно, кто ждет ответа"],
    after: ["Видит нужные материалы", "Правит или согласует в одном месте", "Понимает статус и следующий шаг"]
  }
];

export default function SolutionsPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Сценарии MailFlow",
    about: scenarios.map((item) => item.tag)
  };

  return (
    <>
      <StructuredData data={pageJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Ролевые сценарии</span>
            <h1>MailFlow полезен только там, где сходятся роли</h1>
            <p className="page-intro">
              Главная ценность пилота появляется на стыке агентства и клиента: один ставит задачу, другой делает,
              третий согласует, руководитель держит контроль.
            </p>
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
                      <span className="problem-label">До:</span> процесс приходится склеивать
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
                <h2>Есть роль, которая чаще всего ломает процесс?</h2>
                <p className="lead">
                  В заявке укажите, где сейчас больше всего трения: постановка, исполнение, согласование или контроль.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Описать процесс
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
