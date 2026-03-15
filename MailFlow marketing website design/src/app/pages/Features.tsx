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
  TrendingUp,
  Layout,
  Zap,
  Target,
} from 'lucide-react';

const modules = [
  {
    icon: BarChart3,
    title: 'Дашборд',
    description: 'Получайте полный обзор всех маркетинговых метрик и KPI в реальном времени. Отслеживайте эффективность кампаний, конверсии и ROI.',
    features: [
      'Настраиваемые виджеты',
      'Визуализация данных в реальном времени',
      'Экспорт отчетов',
      'Сравнение периодов',
    ],
  },
  {
    icon: Calendar,
    title: 'Контент-план',
    description: 'Планируйте и управляйте контентом в единой системе. Создавайте расписания публикаций, отслеживайте статусы и координируйте работу команды.',
    features: [
      'Календарь публикаций',
      'Статусы и воркфлоу',
      'Назначение задач',
      'Интеграция с соцсетями',
    ],
  },
  {
    icon: Mail,
    title: 'Рассылки',
    description: 'Создавайте и отправляйте email-кампании с детальной аналитикой. Сегментируйте аудиторию, проводите A/B тесты и отслеживайте результаты.',
    features: [
      'Визуальный редактор писем',
      'Сегментация аудитории',
      'A/B тестирование',
      'Детальная аналитика открытий и кликов',
    ],
  },
  {
    icon: FolderOpen,
    title: 'Медиатека',
    description: 'Централизованное хранилище всех медиа-файлов с удобной системой организации. Загружайте, редактируйте и используйте ресурсы в кампаниях.',
    features: [
      'Неограниченное хранилище',
      'Папки и теги',
      'Поиск по метаданным',
      'Версионирование файлов',
    ],
  },
  {
    icon: Users,
    title: 'Пользователи и роли',
    description: 'Гибкая система управления доступом и правами. Создавайте кастомные роли, назначайте разрешения и контролируйте действия команды.',
    features: [
      'Кастомные роли',
      'Гранулярные права доступа',
      'Журнал активности',
      'SSO интеграция',
    ],
  },
  {
    icon: Bell,
    title: 'Уведомления',
    description: 'Будьте в курсе всех важных событий в системе. Настраивайте каналы уведомлений и получайте информацию удобным способом.',
    features: [
      'Email и push уведомления',
      'Настраиваемые триггеры',
      'Приоритизация событий',
      'Интеграция с Slack/Telegram',
    ],
  },
  {
    icon: BookOpen,
    title: 'База знаний',
    description: 'Документируйте процессы и делитесь опытом с командой. Создавайте статьи, руководства и храните важную информацию в одном месте.',
    features: [
      'Вики-редактор',
      'Версионность документов',
      'Полнотекстовый поиск',
      'Права доступа к статьям',
    ],
  },
  {
    icon: Briefcase,
    title: 'Управление проектами',
    description: 'Control plane для управления несколькими проектами. Переключайтесь между проектами, настраивайте доступы и отслеживайте активность.',
    features: [
      'Мультипроектность',
      'Изоляция данных',
      'Централизованные настройки',
      'Агрегированная аналитика',
    ],
  },
];

const additionalFeatures = [
  {
    icon: TrendingUp,
    title: 'Аналитика и отчеты',
    description: 'Глубокая аналитика всех маркетинговых активностей с возможностью создания кастомных отчетов',
  },
  {
    icon: Layout,
    title: 'API и интеграции',
    description: 'Открытый API и готовые интеграции с популярными сервисами и платформами',
  },
  {
    icon: Zap,
    title: 'Автоматизация',
    description: 'Создавайте автоматические воркфлоу и триггеры для рутинных задач',
  },
  {
    icon: Target,
    title: 'Сегментация',
    description: 'Продвинутые инструменты для сегментации аудитории и персонализации контента',
  },
];

export function Features() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Возможности <span className="text-primary">MailFlow</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный набор инструментов для управления маркетинговыми процессами. 
            Все модули работают в единой системе и обмениваются данными.
          </p>
        </motion.div>

        {/* Main Modules */}
        <div className="space-y-16 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <module.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{module.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {module.description}
                </p>
                <ul className="space-y-3">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-video rounded-xl border border-border bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <module.icon className="w-20 h-20 mx-auto mb-4 text-primary/40" />
                    <p className="text-sm text-muted-foreground">
                      Интерфейс модуля {module.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Дополнительные возможности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Хотите увидеть систему в действии?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Запросите персональную демонстрацию и узнайте, как MailFlow решит ваши задачи
            </p>
            <a
              href="/contacts"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Получить демо
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
