import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Политика конфиденциальности | MailFlow",
  description: "Политика конфиденциальности MailFlow для обработки заявок, поступающих через публичный сайт.",
  path: "/privacy"
});

export default function PrivacyPage() {
  const policyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Политика конфиденциальности MailFlow"
  };

  return (
    <>
      <StructuredData data={policyJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Юридическая информация</span>
            <h1>Политика конфиденциальности</h1>
            <p className="page-intro">
              Через публичный сайт MailFlow обрабатываются только данные, необходимые для первого контакта и
              организации демонстрации продукта.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="surface page-hero-card">
            <div className="card">
              <h3>1. Какие данные собираются</h3>
              <p>Имя, компания, email, телефон и комментарий, переданные через форму на сайте.</p>
              <h3>2. Цель обработки</h3>
              <p>Связь по запросу пользователя, организация демонстрации MailFlow и подготовка коммерческого предложения.</p>
              <h3>3. Где используются данные</h3>
              <p>Данные направляются через публичный API и должны быть доступны только уполномоченным сотрудникам.</p>
              <h3>4. Срок хранения</h3>
              <p>До завершения обработки запроса или в течение срока, предусмотренного внутренними правилами компании.</p>
              <h3>5. Обратная связь</h3>
              <p>
                По вопросам обработки данных используйте адрес{" "}
                <a href="mailto:hello@mail-flow-crm.ru">hello@mail-flow-crm.ru</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
