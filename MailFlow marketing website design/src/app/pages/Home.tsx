import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  BarChart3,
  Calendar,
  Mail,
  FolderOpen,
  Users,
  Bell,
  BookOpen,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Globe,
} from 'lucide-react';
import { Collapse } from 'antd';

const features = [
  {
    icon: BarChart3,
    title: 'Дашборд',
    description: 'Полный обзор всех маркетинговых метрик и KPI в реальном времени',
  },
  {
    icon: Calendar,
    title: 'Контент-план',
    description: 'Планируйте и управляйте контентом в единой системе',
  },
  {
    icon: Mail,
    title: 'Рассылки',
    description: 'Создавайте и отправляйте email-кампании с детальной аналитикой',
  },
  {
    icon: FolderOpen,
    title: 'Медиатека',
    description: 'Централизованное хранилище всех медиа-файлов',
  },
  {
    icon: Users,
    title: 'Пользователи и роли',
    description: 'Гибкая система управления доступом и правами',
  },
  {
    icon: Bell,
    title: 'Уведомления',
    description: 'Будьте в курсе всех важных событий',
  },
  {
    icon: BookOpen,
    title: 'База знаний',
    description: 'Документируйте процессы и делитесь опытом',
  },
  {
    icon: Briefcase,
    title: 'Управление проектами',
    description: 'Control plane для управления несколькими проектами',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Быстрое развертывание',
    description: 'Начните работу за 5 минут. Не требуется сложная настройка.',
  },
  {
    icon: Shield,
    title: 'Безопасность данных',
    description: 'Ваши данные защищены современными протоколами шифрования.',
  },
  {
    icon: Globe,
    title: 'Работа из любой точки',
    description: 'Доступ к системе с любого устройства в любое время.',
  },
];

const faqItems = [
  {
    key: '1',
    label: 'Как быстро можно начать работу с MailFlow?',
    children: (
      <p className="text-muted-foreground">
        Вы можете начать работу с MailFlow буквально за несколько минут. После регистрации вам будет доступен полнофункциональный интерфейс для управления маркетинговыми процессами. Мы также предоставляем подробную документацию и онбординг для быстрого старта.
      </p>
    ),
  },
  {
    key: '2',
    label: 'Какие интеграции поддерживает MailFlow?',
    children: (
      <p className="text-muted-foreground">
        MailFlow поддерживает интеграции с популярными email-сервисами, CRM-системами, аналитическими платформами и инструментами для работы с контентом. Полный список доступных интеграций можно найти в документации.
      </p>
    ),
  },
  {
    key: '3',
    label: 'Можно ли управлять несколькими проектами?',
    children: (
      <p className="text-muted-foreground">
        Да, MailFlow включает модуль Control Plane для управления несколькими проектами. Вы можете легко переключаться между проектами и управлять доступом команды к каждому из них.
      </p>
    ),
  },
  {
    key: '4',
    label: 'Какая поддержка предоставляется?',
    children: (
      <p className="text-muted-foreground">
        Мы предоставляем техническую поддержку по email, чат и видеоконференции. Также доступна обширная база знаний, документация и обучающие материалы для самостоятельного изучения системы.
      </p>
    ),
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Управляйте маркетингом
            <br />
            <span className="text-primary">в одной системе</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            MailFlow — B2B SaaS-платформа для управления маркетинговыми процессами. 
            Планируйте к��нтент, запускайте рассылки и анализируйте результаты в едином интерфейсе.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Получить демо
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/features"
              className="px-8 py-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors inline-flex items-center justify-center"
            >
              Узнать больше
            </Link>
          </div>
        </motion.div>

        {/* Hero Image/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-xl border border-border bg-card p-4 shadow-2xl"
        >
          <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground">Интерфейс MailFlow Dashboard</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '10K+', label: 'Активных пользователей' },
            { value: '500+', label: 'Компаний' },
            { value: '1M+', label: 'Отправленных писем' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему MailFlow?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создали систему, которая помогает маркетологам сосредоточиться на результатах
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Модули системы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Все инструменты для управления маркетингом в одном месте
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Подробнее о возможностях
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кому подходит MailFlow?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Решение для команд любого размера
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              role: 'Маркетологи',
              description: 'Планируйте контент, запускайте кампании и анализируйте результаты в одном месте',
            },
            {
              role: 'Руководители',
              description: 'Получайте полную картину маркетинговых активностей и отслеживайте KPI',
            },
            {
              role: 'Администраторы',
              description: 'Управляйте доступами, настраивайте интеграции и контролируйте процессы',
            },
            {
              role: 'Multi-project команды',
              description: 'Работайте с несколькими проектами через единый control plane',
            },
          ].map((useCase, index) => (
            <motion.div
              key={useCase.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{useCase.role}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Все сценарии использования
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о MailFlow
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Collapse
            items={faqItems}
            defaultActiveKey={['1']}
            className="bg-card border border-border rounded-xl"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы попробовать MailFlow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите персональную демонстрацию системы и узнайте, как MailFlow может улучшить ваши маркетинговые процессы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Получить демо
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors inline-flex items-center justify-center"
            >
              Посмотреть тарифы
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}