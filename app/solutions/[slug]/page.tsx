import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Target } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { audienceLandingPages, featureLandingPages, getAudienceLandingPage } from "@/lib/site-content";
import { buildMetadata, getBaseUrl } from "@/lib/site-config";

type AudiencePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return audienceLandingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: AudiencePageProps) {
  const page = getAudienceLandingPage(params.slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/solutions/${page.slug}`
  });
}

export default function AudienceLandingPage({ params }: AudiencePageProps) {
  const page = getAudienceLandingPage(params.slug);

  if (!page) {
    notFound();
  }

  const features = page.featureSlugs
    .map((slug) => featureLandingPages.find((item) => item.slug === slug))
    .filter(Boolean);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${getBaseUrl()}/solutions/${page.slug}`,
    about: page.keywords,
    mainEntity: "faq" in page && page.faq?.length
      ? page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      : undefined
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: getBaseUrl()
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Сценарии",
        item: `${getBaseUrl()}/solutions`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.navLabel,
        item: `${getBaseUrl()}/solutions/${page.slug}`
      }
    ]
  };

  return (
    <>
      <StructuredData data={[pageJsonLd, breadcrumbJsonLd]} />
      <section className="page-hero audience-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">{page.tag}</span>
            <h1>{page.h1}</h1>
            <p className="page-intro">{page.lead}</p>
            <div className="keyword-strip" aria-label="Ключевые запросы страницы">
              {page.keywords.slice(0, 5).map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacts">
                Обсудить мой процесс
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/features">
                Что внутри MailFlow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container problem-solution-grid">
          <article className="surface audience-panel">
            <div className="icon-tile icon-tile-large">
              <Target size={26} />
            </div>
            <h2>Где обычно ломается процесс</h2>
            <ul className="check-list">
              {page.pains.map((pain) => (
                <li key={pain}>{pain}</li>
              ))}
            </ul>
          </article>
          <article className="surface audience-panel">
            <div className="icon-tile icon-tile-large">
              <CheckCircle2 size={26} />
            </div>
            <h2>Что меняется с MailFlow</h2>
            <ul className="check-list">
              {page.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <span className="eyebrow">Инструменты</span>
              <h2>Какие зоны MailFlow обычно нужны этой аудитории</h2>
              <p>
                На аудитории важно не просто перечислить функции, а показать, какие инструменты закрывают конкретную
                работу: промо-календарь, бюджеты, задачи, интеграции, документы, аналитику или компании.
              </p>
            </div>
          </div>
          <div className="feature-grid">
            {features.map((feature) =>
              feature ? (
                <Link key={feature.slug} className="card feature-link-card" href={`/features/${feature.slug}`}>
                  <span className="card-tag">{feature.tag}</span>
                  <h3>{feature.navLabel}</h3>
                  <p>{feature.menuDescription}</p>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {"decisionFactors" in page && page.decisionFactors?.length ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="section-copy">
                <span className="eyebrow">Что важно до запуска</span>
                <h2>Факторы, которые нужно учесть перед пилотом</h2>
                <p>
                  Для этой аудитории важно заранее определить не только список функций, но и ограничения по данным,
                  ролям, интеграциям и критерию пользы.
                </p>
              </div>
            </div>
            <div className="feature-grid">
              {page.decisionFactors.map((factor) => (
                <article key={factor} className="card">
                  <span className="card-tag">Фактор</span>
                  <p>{factor}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <div className="surface process-panel">
            <div className="section-copy">
              <span className="eyebrow">Пилот</span>
              <h2>Как проверить пользу без большого внедрения</h2>
            </div>
            <div className="process-steps">
              {page.pilotSteps.map((step, index) => (
                <article key={step} className="process-step">
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {"faq" in page && page.faq?.length ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="section-copy">
                <span className="eyebrow">FAQ</span>
                <h2>Вопросы перед запуском</h2>
                <p>Эти ответы помогают быстрее понять, подходит ли MailFlow под ваш контур.</p>
              </div>
            </div>
            <div className="faq-list">
              {page.faq.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container landing-split">
          <div className="section-copy">
            <span className="eyebrow">Семантика</span>
            <h2>Какие точные запросы закрывает эта посадочная</h2>
            <p>
              Эти формулировки встроены в страницу естественно: через первый экран, блоки боли, выгоды и сценарий
              пилота.
            </p>
          </div>
          <div className="keyword-panel">
            {page.keywords.map((keyword, index) => (
              <div key={keyword} className="keyword-row">
                <span>{index + 1}</span>
                <strong>{keyword}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Разберем, какой процесс взять в первый пилот</h2>
                <p className="lead">
                  Покажем, какие инструменты MailFlow стоит включить для вашей роли, команды и текущего стека.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Получить план пилота
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/pricing">
                  Форматы запуска
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
