import { LeadForm } from "@/components/lead-form";
import { StructuredData } from "@/components/structured-data";
import { afterRequestSteps, companyRequisites, trustPoints } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Заявка на пилот MailFlow | Промо-календарь, бюджеты и интеграции",
  description:
    "Оставьте заявку на пилот MailFlow: расскажите о промо-календаре, задачах, бюджетах, интеграциях и процессе, который хотите проверить.",
  path: "/contacts"
});

export default function ContactsPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Заявка на пилот MailFlow"
  };

  return (
    <>
      <StructuredData data={contactJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Заявка на пилот</span>
            <h1>Получите план пилота для вашего маркетингового процесса</h1>
            <p className="page-intro">
              Мы разберем ваш текущий стек, роли, промо-календарь, бюджеты и интеграции, затем предложим пилот,
              который можно проверить без большого внедрения.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="contact-form">
        <div className="container contact-grid">
          <div className="surface contact-card">
            <h2>Получите план первого пилота</h2>
            <p>
              Достаточно указать, где сейчас больше всего трения. Остальные детали можно разобрать на коротком созвоне.
            </p>
            <LeadForm compact />
          </div>
          <div className="surface contact-card">
            <span className="card-tag">Что будет после заявки</span>
            <div className="next-step-grid trust-grid-one">
              {afterRequestSteps.map((item, index) => (
                <article key={item.title} className="next-step-card">
                  <span>{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <h2>Кому подходит первый пилот</h2>
            <ul className="check-list">
              <li>Команда ведет промо-календарь, задачи, бюджеты и результаты в разных системах</li>
              <li>Нужно проверить контроль маркетингового бюджета до тяжелых интеграций</li>
              <li>Есть ограничения по данным, безопасности, ролям или on-premise-развертыванию</li>
              <li>Есть 1-2 реальных процесса и понятный критерий пользы</li>
            </ul>
            <div className="trust-grid trust-grid-one">
              {trustPoints.map((item) => (
                <article key={item.title} className="trust-card">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="contact-list">
              <a href="mailto:davritsevich1@gmail.com">davritsevich1@gmail.com</a>
              <a href="https://t.me/AvritsevichD" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="requisites">
        <div className="container">
          <div className="surface page-hero-card requisites-card">
            <span className="eyebrow">Реквизиты</span>
            <h2>{companyRequisites.shortLegalName}</h2>
            <dl className="requisites-list">
              {companyRequisites.items.map(([label, value]) => (
                <div key={label} className="requisites-row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
