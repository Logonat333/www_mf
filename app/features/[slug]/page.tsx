import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BarChart3, CheckCircle2, Layers3 } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { ThemeScreenshot } from "@/components/theme-screenshot";
import { audienceLandingPages, featureLandingPages, getFeatureLandingPage } from "@/lib/site-content";
import { buildMetadata, getBaseUrl } from "@/lib/site-config";

type FeaturePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return featureLandingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: FeaturePageProps) {
  const page = getFeatureLandingPage(params.slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/features/${page.slug}`
  });
}

export default function FeatureLandingPage({ params }: FeaturePageProps) {
  const page = getFeatureLandingPage(params.slug);

  if (!page) {
    notFound();
  }

  const relatedFeatures = page.relatedFeatureSlugs
    .map((slug) => featureLandingPages.find((item) => item.slug === slug))
    .filter(Boolean);
  const relatedAudiences = page.audienceSlugs
    .map((slug) => audienceLandingPages.find((item) => item.slug === slug))
    .filter(Boolean);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `MailFlow: ${page.navLabel}`,
    applicationCategory: "BusinessApplication",
    description: page.description,
    url: `${getBaseUrl()}/features/${page.slug}`,
    featureList: page.keywords,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/LimitedAvailability",
      url: `${getBaseUrl()}/contacts`
    }
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
        name: "Возможности",
        item: `${getBaseUrl()}/features`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.navLabel,
        item: `${getBaseUrl()}/features/${page.slug}`
      }
    ]
  };

  return (
    <>
      <StructuredData data={[pageJsonLd, breadcrumbJsonLd]} />
      <section className="page-hero landing-hero">
        <div className="container landing-hero-grid">
          <div className="surface page-hero-card landing-hero-copy">
            <span className="eyebrow">{page.tag}</span>
            <h1>{page.h1}</h1>
            <p className="page-intro">{page.lead}</p>
            <div className="keyword-strip" aria-label="Ключевые задачи страницы">
              {page.keywords.slice(0, 4).map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacts">
                Обсудить пилот
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/features">
                Все возможности
              </Link>
            </div>
          </div>
          <div className="landing-hero-visual">
            <ThemeScreenshot lightSrc={page.lightSrc} darkSrc={page.darkSrc} alt={page.alt} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container landing-split">
          <div className="section-copy">
            <span className="eyebrow">Проблема</span>
            <h2>Почему этот инструмент нужен не отдельно, а внутри рабочего процесса</h2>
            <p>
              У каждой зоны MailFlow есть отдельная польза, но сильнее всего она работает в связке с клиентом,
              задачами, материалами, календарем и согласованиями.
            </p>
          </div>
          <div className="landing-card-list">
            {page.pains.map((pain) => (
              <article key={pain} className="card card-contrast">
                <span className="card-tag">Боль</span>
                <p>{pain}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-copy">
              <span className="eyebrow">Польза</span>
              <h2>Что получает команда</h2>
              <p>
                Страница закрывает не абстрактный функционал, а конкретные рабочие задачи, по которым пользователи
                ищут систему для планирования маркетинга, контроля бюджета, задач и результата.
              </p>
            </div>
          </div>
          <div className="benefit-grid">
            {page.benefits.map((benefit, index) => (
              <article key={benefit} className="benefit-card">
                <div className="icon-tile">
                  {index === 0 ? <CheckCircle2 size={18} /> : index === 1 ? <BarChart3 size={18} /> : <Layers3 size={18} />}
                </div>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {"useCases" in page && page.useCases?.length ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="section-copy">
                <span className="eyebrow">Когда нужно</span>
                <h2>Сценарии, где этот инструмент дает быстрый эффект</h2>
                <p>
                  Эти ситуации стоит брать в первый пилот: по ним проще доказать пользу MailFlow до интеграций и
                  большого внедрения.
                </p>
              </div>
            </div>
            <div className="feature-grid">
              {page.useCases.map((useCase) => (
                <article key={useCase} className="card">
                  <span className="card-tag">Сценарий</span>
                  <p>{useCase}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {"trustNotes" in page && page.trustNotes?.length ? (
        <section className="section">
          <div className="container">
            <div className="surface process-panel">
              <div className="section-copy">
                <span className="eyebrow">Важно для внедрения</span>
                <h2>Что проверяем до масштабирования</h2>
                <p>
                  Эти пункты помогают не обещать лишнее на первом экране и заранее снять вопросы команды, IT,
                  финансов или руководителя.
                </p>
              </div>
              <div className="process-steps">
                {page.trustNotes.map((note, index) => (
                  <article key={note} className="process-step">
                    <span>{index + 1}</span>
                    <p>{note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <div className="surface process-panel">
            <div className="section-copy">
              <span className="eyebrow">Как работает</span>
              <h2>Логика инструмента в пилоте</h2>
            </div>
            <div className="process-steps">
              {page.mechanics.map((step, index) => (
                <article key={step} className="process-step">
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container related-grid">
          <div>
            <div className="section-copy">
              <h2>Связанные инструменты</h2>
              <p>Эти страницы можно перелинковать между собой, чтобы раскрывать весь продуктовый контур MailFlow.</p>
            </div>
            <div className="link-card-grid">
              {relatedFeatures.map((item) =>
                item ? (
                  <Link key={item.slug} className="link-card" href={`/features/${item.slug}`}>
                    <strong>{item.navLabel}</strong>
                    <span>{item.menuDescription}</span>
                  </Link>
                ) : null
              )}
            </div>
          </div>
          <div>
            <div className="section-copy">
              <h2>Для кого</h2>
              <p>Отдельные посадочные помогают точнее ответить на запросы enterprise-маркетинга, сетей, агентств и команд.</p>
            </div>
            <div className="link-card-grid">
              {relatedAudiences.map((item) =>
                item ? (
                  <Link key={item.slug} className="link-card" href={`/solutions/${item.slug}`}>
                    <strong>{item.navLabel}</strong>
                    <span>{item.tag}</span>
                  </Link>
                ) : null
              )}
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
                <h2>Вопросы перед пилотом</h2>
                <p>Короткие ответы закрывают сомнения до заявки и помогают поисковым системам лучше понять страницу.</p>
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
        <div className="container">
          <div className="surface cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Проверим, нужен ли этот инструмент в вашем первом пилоте</h2>
                <p className="lead">
                  В заявке опишите текущий процесс. Мы предложим, какие зоны MailFlow включить сразу, а какие оставить
                  на следующий этап.
                </p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Получить план пилота
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
