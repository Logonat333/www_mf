import { LeadForm } from "@/components/lead-form";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Контакты MailFlow | Заявка на демо и коммерческое предложение",
  description:
    "Оставьте заявку на демо MailFlow, запрос коммерческого предложения или обсудите сценарий внедрения.",
  path: "/contacts"
});

export default function ContactsPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Контакты MailFlow"
  };

  return (
    <>
      <StructuredData data={contactJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Контакты</span>
            <h1>Связаться с командой MailFlow</h1>
            <p className="page-intro">
              Запросите демо, коммерческое предложение или короткую консультацию по сценарию внедрения.
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="contact-form">
        <div className="container contact-grid">
          <div className="surface contact-card">
            <h2>Форма заявки</h2>
            <LeadForm compact />
          </div>
          <div className="surface contact-card">
            <h2>Контакты компании</h2>
            <div className="contact-list">
              <a href="mailto:hello@mail-flow-crm.ru">hello@mail-flow-crm.ru</a>
              <a href="tel:+74950000000">+7 (495) 000-00-00</a>
              <a href="https://t.me/mailflow" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
            <h3>Почему этот формат работает</h3>
            <ul className="check-list">
              <li>Минимум обязательных полей для первого контакта</li>
              <li>Понятный канал для коммерческого запроса</li>
              <li>Связь с реальными модулями и сценариями MailFlow</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
