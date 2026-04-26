import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ClipboardList,
  GitBranch,
  LockKeyhole,
  MessageSquareText
} from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { featureDetails } from "@/lib/site-content";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Возможности MailFlow | Доски, задачи, согласования и календарь",
  description:
    "Возможности MailFlow для пилота: доски, задачи, клиентские согласования, роли, календарь и первый слой результатов без тяжелых интеграций.",
  path: "/features"
});

const icons = [GitBranch, ClipboardList, MessageSquareText, CalendarDays, LockKeyhole, BarChart3];

const roadmapLayers = [
  {
    title: "Сейчас в фокусе пилота",
    text: "Задачи, доски, материалы, роли, календарь и согласования на 1-2 реальных проектах."
  },
  {
    title: "Следующий слой",
    text: "Гипотеза против факта, базовые KPI по активностям, учет объема работ и история изменений."
  },
  {
    title: "После стабилизации процесса",
    text: "CDP-интеграции, автоматическое подтягивание статусов, импорт данных и более глубокая аналитика."
  }
];

export default function FeaturesPage() {
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
            <span className="eyebrow">Возможности пилота</span>
            <h1>Не набор фич, а рабочий контур агентства и клиента</h1>
            <p className="page-intro">
              MailFlow закрывает первый болезненный слой: связать визуальные карты, задачи, материалы, роли,
              согласования и календарь без полного переезда с текущих инструментов.
            </p>
            <div className="inline-badges">
              <span>Доски + задачи</span>
              <span>Клиентский доступ</span>
              <span>План и календарь</span>
              <span>Ручной ввод результата</span>
            </div>
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
                  <div className="feature-placeholder feature-ui">
                    <div className="feature-window-top">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="feature-window-body">
                      <div className="feature-ui-title">
                        <Icon size={22} />
                        <strong>{item.tag}</strong>
                      </div>
                      <div className="feature-ui-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="feature-ui-card">
                        <strong>{item.title}</strong>
                        <p>{item.bullets[0]}</p>
                      </div>
                    </div>
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
              <h2>Что не обещаем как готовую магию</h2>
              <p>
                По клиентским встречам опасно начинать с тяжелых интеграций. Сначала нужно доказать, что команда
                реально ведет процесс в MailFlow.
              </p>
            </div>
          </div>
          <div className="feature-grid">
            {roadmapLayers.map((item) => (
              <article key={item.title} className="card">
                <span className="card-tag">Roadmap</span>
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
                <h2>Хотите проверить эти модули на реальном проекте?</h2>
                <p className="lead">
                  Начнем с узкого контура: клиент, доска, задачи, материалы, календарь и согласование.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Запросить демо
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
