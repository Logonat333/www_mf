import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";

import { InterfaceSlideshow } from "@/components/interface-slideshow";
import { LeadForm } from "@/components/lead-form";
import { StructuredData } from "@/components/structured-data";
import { ThemeScreenshot } from "@/components/theme-screenshot";
import { afterRequestSteps, faqItems, painPoints, pilotProof, scenarios, trustPoints, workflowSteps } from "@/lib/site-content";
import { buildMetadata, getBaseUrl } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "MailFlow | Enterprise Marketing Planning и промо-календарь",
  description:
    "MailFlow помогает сетям, франшизам и маркетинговым командам планировать промо-акции, бюджеты, задачи, рассылки и результаты в одном контуре.",
  path: "/"
});

const nowVsMailFlow = [
  {
    before: "Промо-календарь в Excel, задачи в таскере, бюджет в финансах, результат в BI",
    after: "Активность, задачи, бюджет, материалы, статус и результат связаны в одном контуре"
  },
  {
    before: "Команда поздно видит перерасход бюджета и конфликт промо-механик",
    after: "Лимиты, фактический расход, риск перегруза и следующий шаг видны рядом с планом"
  },
  {
    before: "Интеграции с CDP, ERP, 1C и рассылками обсуждаются отдельно от процесса",
    after: "MailFlow становится верхним слоем планирования и контроля над текущим стеком"
  }
];

const heroStats = [
  {
    value: "1-2",
    label: "процесса достаточно для первого enterprise-пилота"
  },
  {
    value: "MPC",
    label: "marketing planning & control вместо разрозненных таблиц"
  },
  {
    value: "6 зон",
    label: "промо-календарь, задачи, бюджеты, документы, доски и аналитика"
  },
  {
    value: "API",
    label: "интеграции с CDP, ERP, 1C, рассылками и аналитикой после пилота"
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
      "Enterprise Marketing Planning система для промо-календаря, задач, бюджетов, интеграций и контроля маркетинговых активностей.",
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
            <span className="eyebrow">Enterprise Marketing Planning</span>
            <h1>
              Планирование и контроль маркетинга сети в одном контуре
            </h1>
            <p className="lead">
              MailFlow объединяет промо-календарь, задачи, бюджеты, документы, доски, интеграции и аналитику, чтобы
              маркетинг, финансы, операционная команда и подрядчики видели один план, один статус и понятный следующий
              шаг.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacts">
                Обсудить мой процесс
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/solutions">
                Посмотреть сценарии
              </Link>
            </div>
          </div>

            <InterfaceSlideshow />
          </div>
        </div>
        <div className="container hero-stat-grid">
          {heroStats.map((item) => (
            <div key={item.value} className="hero-stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Где enterprise-маркетинг теряет контроль</h2>
              <p>Проблема не в одной таблице. Enterprise-маркетинг распадается между календарем, бюджетами, задачами, CDP, ERP, рассылками и отчетами, поэтому команда вручную собирает контроль.</p>
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
              <span className="eyebrow">Проверка без большого внедрения</span>
              <h2>MailFlow не заменяет CDP или ERP, а связывает их в контур планирования</h2>
              <p>
                Берем один участок: промо-календарь, бюджетирование акций, контроль рассылок или клиентский процесс.
                Проверяем пользу на реальной работе, а интеграции подключаем после подтверждения ценности.
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
          <div className="surface pilot-proof-grid">
            <div className="pilot-proof-copy">
              <span className="card-tag">{pilotProof.tag}</span>
              <h2>{pilotProof.title}</h2>
              <p>{pilotProof.text}</p>
              <div className="pilot-proof-list-grid">
                <div className="pilot-proof-list-wrap">
                  <strong>
                    <CircleAlert size={18} aria-hidden="true" />
                    До пилота
                  </strong>
                  <ul className="pilot-proof-list">
                    {pilotProof.before.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="pilot-proof-list-wrap">
                  <strong>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    После настройки
                  </strong>
                  <ul className="pilot-proof-list">
                    {pilotProof.after.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pilot-proof-shot">
              <div className="pilot-proof-shot-top">
                <span>Клиентский проект</span>
                <span>Live demo</span>
              </div>
              <ThemeScreenshot lightSrc={pilotProof.lightSrc} darkSrc={pilotProof.darkSrc} alt={pilotProof.alt} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Один поток от маркетингового плана до результата</h2>
              <p>Каждый шаг закрывает конкретную работу: запланировать активность, поставить задачи, связать материалы, проконтролировать бюджет и увидеть результат.</p>
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
              <h2>Кому MailFlow нужен в первую очередь</h2>
              <p>Быстрее всего пользу видят команды, где много активностей, точек продаж, подрядчиков, бюджетов и интеграций каждый день требуют единого контроля.</p>
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
              <p>Короткие ответы на вопросы, которые обычно мешают оставить заявку на пилот.</p>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <span className="eyebrow">После заявки</span>
              <h2>Сначала разбираем процесс, а не продаем большой переезд</h2>
              <p>
                Заявка нужна, чтобы понять ваш текущий маршрут и предложить узкий пилот. На первом шаге не требуется
                переносить все задачи, документы и интеграции.
              </p>
            </div>
            <Link className="button button-secondary" href="/contacts">
              Получить план пилота
            </Link>
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

      <section className="section" id="lead-form">
        <div className="container contact-grid">
          <div className="surface contact-card">
            <span className="card-tag">Пилот на вашем процессе</span>
            <h2>Покажем, какой кусок процесса стоит перенести первым</h2>
            <p>
              Лучше всего начать с 1-2 проектов: разобрать текущий стек, выбрать болезненный маршрут и заранее
              зафиксировать, что должно стать проще для команды и клиента.
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
                <h2>Есть клиентские проекты, которые распадаются между сервисами?</h2>
                <p className="lead">
                  Оставьте заявку, и мы предложим, какой процесс стоит взять в пилот, чтобы быстро проверить пользу без
                  переноса всего стека команды.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Обсудить мой процесс
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/pricing">
                  Тарифы
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
