import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { InterfaceSlideshow } from "@/components/interface-slideshow";
import { LeadForm } from "@/components/lead-form";
import { StructuredData } from "@/components/structured-data";
import { faqItems, painPoints, scenarios, trustPoints, workflowSteps } from "@/lib/site-content";
import { buildMetadata, getBaseUrl } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "MailFlow | Единый хаб для агентства и клиента",
  description:
    "MailFlow помогает маркетинговым агентствам вести задачи, доски, материалы, календарь и согласования с клиентами в одном рабочем хабе.",
  path: "/"
});

const nowVsMailFlow = [
  {
    before: "План в Excel, задачи в Planfix, карта в Miro, правки в Telegram",
    after: "Задача, доска, текст, статус и дедлайн связаны внутри одного проекта"
  },
  {
    before: "Клиент просит правку в чате, команда ищет последнюю версию текста",
    after: "Клиент видит нужную карточку, оставляет правку и согласует там же"
  },
  {
    before: "Руководитель спрашивает статус вручную и собирает картину по людям",
    after: "Статусы, ответственные и ближайшие блокеры видны без отдельного статус-чека"
  }
];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MailFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Единый рабочий хаб для маркетинговых агентств: задачи, доски, материалы, календарь и клиентские согласования.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/LimitedAvailability"
    },
    url: getBaseUrl()
  };

  return (
    <>
      <StructuredData data={[faqJsonLd, softwareJsonLd]} />
      <section className="hero">
        <div className="container figma-hero-frame">
          <div className="hero-grid hero-grid-new">
          <div className="hero-copy">
            <h1>
              Единое пространство для работы маркетинга
            </h1>
            <p className="lead">
              MailFlow собирает задачи, доски, материалы, календарь и согласования в одном рабочем контуре, чтобы
              команда не склеивала клиентский процесс из таблиц, чатов, таскеров и отдельных холстов.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacts">
                Запросить демо
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/solutions">
                Как это работает
              </Link>
            </div>
          </div>

            <InterfaceSlideshow />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Почему это болит</h2>
              <p>Повторяющийся паттерн из встреч: проблема не в одной таблице, а в разрыве всего клиентского процесса.</p>
            </div>
          </div>
          <div className="feature-grid">
            {painPoints.map((item) => (
              <article key={item.title} className="card">
                <span className="card-tag">Боль</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface compare-panel">
            <div className="section-copy">
              <span className="eyebrow">До и после</span>
              <h2>MailFlow не просит сразу заменить весь стек</h2>
              <p>
                Первый вход в продукт — забрать конкретный контур клиентской работы, где чаще всего теряются контекст,
                правки и ответственность.
              </p>
            </div>
            <div className="compare-list">
              {nowVsMailFlow.map((item) => (
                <div key={item.before} className="compare-row">
                  <div>
                    <strong>Сейчас</strong>
                    <p>{item.before}</p>
                  </div>
                  <ArrowRight size={18} />
                  <div>
                    <strong>С MailFlow</strong>
                    <p>{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Один поток вместо набора костылей</h2>
              <p>Сайт продает не набор модулей, а понятный рабочий путь от запроса клиента до результата.</p>
            </div>
            <Link className="button button-secondary" href="/features">
              Что внутри
            </Link>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map((item, index) => (
              <article key={item.title} className="workflow-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Кому пилот особенно полезен</h2>
              <p>Фокус первого релиза — команды, где есть агентство, клиент, несколько ролей и постоянные согласования.</p>
            </div>
            <Link className="button button-secondary" href="/solutions">
              Все сценарии
            </Link>
          </div>
          <div className="solution-grid">
            {scenarios.slice(0, 3).map((item) => (
              <article key={item.tag} className="card">
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>FAQ</h2>
              <p>Короткие ответы на вопросы, которые обычно возникают перед пилотом.</p>
            </div>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="lead-form">
        <div className="container contact-grid">
          <div className="surface contact-card">
            <span className="card-tag">Заявка на пилот</span>
            <h2>Проверим MailFlow на вашем реальном клиентском процессе</h2>
            <p>
              Лучше всего начать с 1-2 проектов: перенести ключевые задачи, доски, материалы, календарь и точки
              согласования, а затем честно оценить пользу.
            </p>
            <div className="trust-grid">
              {trustPoints.map((item) => (
                <article key={item.title} className="trust-card">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="surface contact-card">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Есть процесс в таблицах, чатах и досках?</h2>
                <p className="lead">
                  Оставьте заявку, и мы предложим, какой кусок лучше взять в первый пилот без полного переезда команды.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Запросить демо
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/pricing">
                  Форматы пилота
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
