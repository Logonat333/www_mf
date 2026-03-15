import Link from "next/link";
import { ArrowRight, Briefcase, Building2, Shield, User } from "lucide-react";

import { StructuredData } from "@/components/structured-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Сценарии MailFlow | Для маркетолога, project lead и администратора",
  description:
    "Сценарии использования MailFlow для маркетолога, руководителя проекта, администратора и multi-project команд.",
  path: "/solutions"
});

export default function SolutionsPage() {
  const solutions = [
    {
      icon: User,
      role: "Маркетолог",
      challenge: "Сложность в координации контента",
      problem:
        "Приходится переключаться между множеством инструментов: таблицами для планирования, сервисами рассылок и отдельными системами аналитики.",
      solution: "MailFlow объединяет всё в одном месте",
      benefits: [
        "Единый интерфейс для планирования, создания и запуска кампаний",
        "Автоматическая синхронизация данных между модулями",
        "Мгновенный доступ к аналитике и метрикам",
        "Шаблоны и автоматизация рутинных задач"
      ]
    },
    {
      icon: Briefcase,
      role: "Руководитель отдела маркетинга",
      challenge: "Отсутствие полной картины",
      problem:
        "Нет единого источника данных о маркетинговых активностях. Сложно оценить эффективность команды и прогресс по целям.",
      solution: "MailFlow предоставляет единый дашборд с полной аналитикой",
      benefits: [
        "Все KPI и метрики в одном месте",
        "Визуализация прогресса по целям",
        "Отчеты по активности команды",
        "Прогнозирование и планирование на основе данных"
      ]
    },
    {
      icon: Shield,
      role: "Системный администратор",
      challenge: "Сложность управления доступами",
      problem:
        "При работе с несколькими инструментами приходится настраивать доступы в каждом из них отдельно и сложно контролировать права.",
      solution: "MailFlow централизует управление ролями и доступами",
      benefits: [
        "Гибкая система ролей с детальными правами",
        "Единая точка управления доступом",
        "Журнал всех действий пользователей",
        "SSO-интеграция для упрощенной авторизации"
      ]
    },
    {
      icon: Building2,
      role: "Multi-project команды",
      challenge: "Управление несколькими проектами",
      problem:
        "Нужно постоянно переключаться между аккаунтами, дублировать настройки и сложно получать общую картину по нескольким проектам.",
      solution: "Control Plane для управления всеми проектами",
      benefits: [
        "Быстрое переключение между проектами",
        "Изолированные данные для каждого проекта",
        "Общие настройки и шаблоны",
        "Агрегированная аналитика по всем проектам"
      ]
    }
  ];

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Сценарии MailFlow",
    about: solutions.map((item) => item.role)
  };

  return (
    <>
      <StructuredData data={pageJsonLd} />
      <section className="page-hero">
        <div className="container">
          <div className="surface page-hero-card">
            <span className="eyebrow">Ролевые сценарии</span>
            <h1>Решения для каждой роли</h1>
            <p className="page-intro">
              MailFlow решает реальные проблемы маркетинговых команд. Узнайте, как система помогает разным
              специалистам достигать целей.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container solutions-stack">
          {solutions.map((item, index) => (
            <section key={item.role} className="solution-block">
              <div className="solution-role-badge">
                <div className="icon-tile">
                  <item.icon size={18} />
                </div>
                <span>{item.role}</span>
              </div>
              <div className="problem-solution-grid">
                <article className="card card-contrast card-problem">
                  <h3>
                    <span className="problem-label">Проблема:</span> {item.challenge}
                  </h3>
                  <p>{item.problem}</p>
                  <div className="state-box state-box-danger">
                    <span>Текущая ситуация</span>
                    <ul className="mini-points">
                      <li>Разрозненные инструменты</li>
                      <li>Потеря времени на переключение</li>
                      <li>Нет единой картины</li>
                    </ul>
                  </div>
                </article>
                <article className="card card-contrast">
                  <h3>
                    <span className="solution-label">Решение:</span> {item.solution}
                  </h3>
                  <ul className="check-list">
                    {item.benefits.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="state-box state-box-success">
                    <span>С MailFlow</span>
                    <ul className="mini-points">
                      <li>Единая система</li>
                      <li>Автоматизация процессов</li>
                      <li>Полный контроль и аналитика</li>
                    </ul>
                  </div>
                </article>
              </div>
              {index < solutions.length - 1 ? <div className="section-divider" /> : null}
            </section>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="surface cta-banner">
            <div className="cta-grid">
              <div>
                <h2>Нужно обсудить ваш ролевой сценарий?</h2>
                <p className="lead">Подготовим демо именно под маркетинг, проектное управление или multi-project контур.</p>
              </div>
              <div className="cluster">
                <Link className="button button-primary" href="/contacts">
                  Оставить заявку
                  <ArrowRight size={18} />
                </Link>
                <Link className="button button-secondary" href="/features">
                  Смотреть модули
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
