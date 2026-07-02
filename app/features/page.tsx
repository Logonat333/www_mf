import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ClipboardList,
  FileText,
  GitBranch,
  LayoutDashboard,
  MessageSquareText
} from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { ThemeScreenshot } from "@/components/theme-screenshot";
import { featureDetails, featureLandingPages } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Возможности MailFlow | Промо-календарь, бюджеты, задачи и интеграции",
  description:
    "Возможности MailFlow для планирования маркетинга: промо-календарь, задачи, бюджеты, интеграции, документы, доски, компании и аналитика.",
  path: "/features"
});

const icons = [LayoutDashboard, ClipboardList, MessageSquareText, CalendarDays, FileText, GitBranch, BarChart3];

const roadmapLayers = [
  {
    title: "Сначала закрываем самый больной участок",
    text: "Выбираем 1-2 процесса, где чаще всего теряются промо-план, бюджет, задачи, материалы, сроки или согласования."
  },
  {
    title: "Показываем команде рабочую версию процесса",
    text: "Настраиваем нужные зоны: промо-календарь, задачи, бюджеты, документы, доски, компании и роли."
  },
  {
    title: "Только потом расширяем автоматизацию",
    text: "Когда понятно, что процесс полезен, добавляем аналитику, импорт данных, API и интеграции с текущим стеком."
  }
];

const featureOutcomes = [
  "меньше ручных статус-чеков",
  "прозрачнее промо-бюджет",
  "понятнее ответственность",
  "проще связать план и результат"
];

export default function FeaturesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Возможности MailFlow",
    itemListElement: featureLandingPages.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.navLabel,
      url: `/features/${item.slug}`
    }))
  };

  return (
    <>
      <StructuredData data={itemList} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card features-hero-card">
            <div className="features-hero-copy">
              <span className="eyebrow">Возможности для MPC-контура</span>
              <h1>Что MailFlow связывает в планировании и контроле маркетинга</h1>
              <p className="page-intro">
                Для сетей, франшиз и маркетинговых команд: каждая зона закрывает конкретную проблему: что
                запланировано, какой бюджет, кто делает, какие материалы нужны и какой результат получился.
              </p>
              <div className="inline-badges">
                {featureOutcomes.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
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
            <div className="features-hero-shot">
              <ThemeScreenshot
                lightSrc="/interface-slides/light-list-kanban.png"
                darkSrc="/interface-slides/dark-list-kanban.png"
                alt="Канбан активностей MailFlow на странице возможностей"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <span className="eyebrow">Инструменты</span>
              <h2>Под каждую возможность есть отдельная посадочная</h2>
              <p>
                Здесь можно раскрывать пользу конкретного инструмента и использовать точные запросы: промо-календарь,
                бюджетирование, интеграции, задачи, аналитика, доски, документы и компании.
              </p>
            </div>
          </div>
          <div className="modules-grid feature-landing-grid">
            {featureLandingPages.map((page) => (
              <Link key={page.slug} className="module-card feature-landing-card" href={`/features/${page.slug}`}>
                <span className="card-tag">{page.tag}</span>
                <h3>{page.navLabel}</h3>
                <p>{page.menuDescription}</p>
                <span className="card-keyword">{page.keywords[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-sections">
          {featureDetails.map((item, index) => {
            const Icon = icons[index] || ClipboardList;
            return (
              <article key={item.title} className="feature-section">
                <div className={index % 2 === 1 ? "feature-copy feature-copy-right" : "feature-copy"}>
                  <div className="icon-tile icon-tile-large">
                    <Icon size={28} />
                  </div>
                  <span className="card-tag">{item.tag}</span>
                  <h2>{item.title}</h2>
                  <p className="feature-section-text">{item.text}</p>
                  <ul className="check-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "feature-visual feature-visual-left" : "feature-visual"}>
                  <div className="feature-proof-frame">
                    <ThemeScreenshot lightSrc={item.lightSrc} darkSrc={item.darkSrc} alt={item.alt} />
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
              <h2>Запускаем только то, что помогает проверить пользу</h2>
              <p>
                На этой странице много возможностей, но в первый пилот не нужно включать все сразу. Сначала берем тот
                участок, где команда уже теряет план, бюджет, контроль или результат.
              </p>
            </div>
          </div>
          <div className="feature-grid">
            {roadmapLayers.map((item) => (
              <article key={item.title} className="card">
                <span className="card-tag">Этап</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
                <h2>Хотите увидеть, как это ляжет на ваш процесс?</h2>
                <p className="lead">
                  Покажем, какой набор возможностей стоит включить в первый пилот для вашей маркетинговой команды,
                  сети или агентского процесса.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Обсудить мой процесс
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/solutions">
                  Смотреть сценарии
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
