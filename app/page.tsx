import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  FolderOpen,
  Globe,
  Mail,
  Shield,
  Users,
  Zap
} from "lucide-react";

import { LeadForm } from "@/components/lead-form";
import { StructuredData } from "@/components/structured-data";
import { faqItems, scenarios, trustPoints } from "@/lib/site-content";
import { buildMetadata, getBaseUrl } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "MailFlow | Контент-план и рассылки для B2B-команд",
  description:
    "Публичная витрина MailFlow: модули продукта, сценарии использования, тарифы и форма запроса демо.",
  path: "/"
});

export default function HomePage() {
  const features = [
    { icon: BarChart3, title: "Дашборд", description: "Полный обзор всех маркетинговых метрик и KPI в реальном времени" },
    { icon: Calendar, title: "Контент-план", description: "Планируйте и управляйте контентом в единой системе" },
    { icon: Mail, title: "Рассылки", description: "Создавайте и отправляйте email-кампании с детальной аналитикой" },
    { icon: FolderOpen, title: "Медиатека", description: "Централизованное хранилище всех медиа-файлов" },
    { icon: Users, title: "Пользователи и роли", description: "Гибкая система управления доступом и правами" },
    { icon: Bell, title: "Уведомления", description: "Будьте в курсе всех важных событий" },
    { icon: BookOpen, title: "База знаний", description: "Документируйте процессы и делитесь опытом" },
    { icon: Briefcase, title: "Управление проектами", description: "Control plane для управления несколькими проектами" }
  ];

  const benefits = [
    { icon: Zap, title: "Быстрое развертывание", description: "Начните работу за 5 минут. Не требуется сложная настройка." },
    { icon: Shield, title: "Безопасность данных", description: "Ваши данные защищены современными протоколами шифрования." },
    { icon: Globe, title: "Работа из любой точки", description: "Доступ к системе с любого устройства в любое время." }
  ];

  const stats = [
    { value: "10K+", label: "Активных пользователей" },
    { value: "500+", label: "Компаний" },
    { value: "1M+", label: "Отправленных писем" },
    { value: "99.9%", label: "Uptime" }
  ];

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
      "Система для управления контент-планом, рассылками, ролями и мультипроектным контуром.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder"
    },
    url: getBaseUrl()
  };

  return (
    <>
      <StructuredData data={[faqJsonLd, softwareJsonLd]} />
      <section className="hero">
        <div className="container">
          <div className="hero-center">
            <span className="eyebrow">MailFlow для B2B-команд</span>
            <h1>
              Управляйте маркетингом
              <br />
              <span className="hero-accent">в одной системе</span>
            </h1>
            <p className="lead hero-lead">
              MailFlow — B2B SaaS-платформа для управления маркетинговыми процессами. Планируйте контент, запускайте
              рассылки и анализируйте результаты в едином интерфейсе.
            </p>
            <div className="hero-actions hero-actions-center">
              <Link className="button button-primary" href="/contacts">
                Получить демо
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/features">
                Узнать больше
              </Link>
            </div>
          </div>
          <div className="surface dashboard-stage" aria-label="Визуальный фрагмент интерфейса MailFlow">
            <div className="dashboard-shell">
              <BarChart3 className="dashboard-glyph" size={72} />
              <p className="helper">Интерфейс MailFlow Dashboard</p>
            </div>
          </div>
          <div className="hero-stat-grid">
            {stats.map((item) => (
              <article key={item.label} className="hero-stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Почему MailFlow?</h2>
              <p>Мы создали систему, которая помогает маркетологам сосредоточиться на результатах.</p>
            </div>
          </div>
          <div className="feature-grid">
            {benefits.map((item) => (
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
          <div className="section-head">
            <div className="section-copy">
              <h2>Модули системы</h2>
              <p>Все инструменты для управления маркетингом в одном месте.</p>
            </div>
          </div>
          <div className="modules-grid">
            {features.map((item) => (
              <article key={item.title} className="module-card">
                <div className="icon-tile">
                  <item.icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="section-link">
            <Link href="/features">
              Подробнее о возможностях
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <h2>Решения для каждой роли</h2>
              <p>MailFlow решает реальные проблемы маркетинговых команд и даёт единый управляемый контур работы.</p>
            </div>
            <Link className="button button-secondary" href="/solutions">
              Смотреть решения
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
              <p>Структура и формулировки подготовлены под поисковую выдачу и быстрый ответ на первый запрос.</p>
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
            <span className="card-tag">Запросить демо</span>
            <h2>Покажем MailFlow на реальном сценарии команды</h2>
            <p>Оставьте заявку, и мы покажем, как MailFlow встраивается в процессы вашей команды.</p>
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
                <h2>Нужна маркетинговая витрина, согласованная с продуктом?</h2>
                <p className="lead">
                  Получите персональную демонстрацию и покажите, как MailFlow решит задачи вашей команды.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Получить консультацию
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/features">
                  Все возможности
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
