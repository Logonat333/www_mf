import { LeadForm } from "@/components/lead-form";
import { StructuredData } from "@/components/structured-data";
import { trustPoints } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Заявка на пилот MailFlow | Проверить процесс агентства и клиента",
  description:
    "Оставьте заявку на пилот MailFlow: расскажите о роли, числе проектов, текущих инструментах и контуре, который хотите проверить.",
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
            <h1>Покажите, где у вас распадается клиентский процесс</h1>
            <p className="page-intro">
              Мы предложим узкий пилот: 1-2 проекта, конкретные роли, текущие инструменты и понятный критерий, что
              MailFlow действительно снижает хаос.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="contact-form">
        <div className="container contact-grid">
          <div className="surface contact-card">
            <h2>Квалифицирующая форма</h2>
            <p>
              Чем точнее вы опишете текущий стек, тем быстрее получится выбрать первый рабочий контур: задачи,
              доски, материалы, календарь или согласования.
            </p>
            <LeadForm compact />
          </div>
          <div className="surface contact-card">
            <h2>Кому подходит первый пилот</h2>
            <ul className="check-list">
              <li>Агентство ведет несколько клиентов или проектов параллельно</li>
              <li>Задачи, доски, документы и клиентские правки живут в разных местах</li>
              <li>Команда хочет проверить продукт без полного переезда с текущего стека</li>
              <li>Есть готовность взять 1-2 реальных проекта и пройти пилот честно</li>
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
              <a href="mailto:hello@mail-flow-crm.ru">hello@mail-flow-crm.ru</a>
              <a href="https://t.me/mailflow" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
