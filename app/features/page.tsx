import Link from "next/link";
import {
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  FolderOpen,
  LayoutTemplate,
  Mail,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { featureDetails } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Возможности MailFlow | Дашборд, контент-план, рассылки",
  description:
    "Модули MailFlow: дашборд, контент-план, список рассылок, медиатека, пользователи и роли, уведомления, база знаний и control plane.",
  path: "/features"
});

export default function FeaturesPage() {
  const icons = [BarChart3, Calendar, Mail, FolderOpen, Users, Bell, BookOpen, Briefcase];
  const extra = [
    { icon: TrendingUp, title: "Аналитика и отчеты", description: "Глубокая аналитика всех маркетинговых активностей с возможностью создания кастомных отчетов" },
    { icon: LayoutTemplate, title: "API и интеграции", description: "Открытый API и готовые интеграции с популярными сервисами и платформами" },
    { icon: Zap, title: "Автоматизация", description: "Создавайте автоматические воркфлоу и триггеры для рутинных задач" },
    { icon: Target, title: "Сегментация", description: "Продвинутые инструменты для сегментации аудитории и персонализации контента" }
  ];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Возможности MailFlow",
    itemListElement: featureDetails.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.tag
    }))
  };

  return (
    <>
      <StructuredData data={itemList} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Реальные модули продукта</span>
            <h1>Возможности MailFlow</h1>
            <p className="page-intro">
              Полный набор инструментов для управления маркетинговыми процессами. Все модули работают в единой системе
              и обмениваются данными.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container feature-sections">
          {featureDetails.map((item, index) => {
            const Icon = icons[index] || Briefcase;
            return (
              <article key={item.title} className="feature-section">
                <div className={index % 2 === 1 ? "feature-copy feature-copy-right" : "feature-copy"}>
                  <div className="icon-tile icon-tile-large">
                    <Icon size={28} />
                  </div>
                  <h2>{item.tag}</h2>
                  <p className="feature-section-text">{item.text}</p>
                  <ul className="check-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "feature-visual feature-visual-left" : "feature-visual"}>
                  <div className="feature-placeholder">
                    <Icon size={76} />
                    <p>Интерфейс модуля {item.tag}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Дополнительные возможности</h2>
            </div>
          </div>
          <div className="feature-grid">
            {extra.map((item) => (
              <article key={item.title} className="card">
                <div className="icon-tile">
                  <item.icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="surface cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Нужна демонстрация по конкретному модулю?</h2>
                <p className="lead">
                  Покажем MailFlow через ваш процесс: запуск рассылок, ведение контент-плана или мультипроектное
                  управление.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Запросить демо
                </Link>
                <Link className="button button-secondary" href="/pricing">
                  Посмотреть пакеты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
