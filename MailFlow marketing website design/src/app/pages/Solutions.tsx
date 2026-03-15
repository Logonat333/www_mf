import { motion } from 'motion/react';
import { User, Briefcase, Shield, Building2, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: User,
    role: 'Маркетолог',
    color: 'primary',
    challenge: 'Сложность в координации контента',
    problem: 'Приходится переключаться между множеством инструментов: таблицами для планирования, разными сервисами рассылок, отдельными системами аналитики. Теряется время, данные разрозненны.',
    solution: 'MailFlow объединяет все в одном месте',
    benefits: [
      'Единый интерфейс для планирования, создания и запуска кампаний',
      'Автоматическая синхронизация данных между модулями',
      'Мгновенный доступ к аналитике и метрикам',
      'Шаблоны и автоматизация рутинных задач',
    ],
  },
  {
    icon: Briefcase,
    role: 'Руководитель отдела маркетинга',
    color: 'accent',
    challenge: 'Отсутствие полной картины',
    problem: 'Нет единого источника данных о маркетинговых активностях. Сложно оценить эффективность команды, отследить прогресс по целям и принимать решения на основе данных.',
    solution: 'MailFlow предоставляет единый дашборд с полной аналитикой',
    benefits: [
      'Все KPI и метрики в одном месте',
      'Визуализация прогресса по целям',
      'Отчеты по активности команды',
      'Прогнозирование и планирование на основе данных',
    ],
  },
  {
    icon: Shield,
    role: 'Системный администратор',
    color: 'success',
    challenge: 'Сложность управления доступами',
    problem: 'При работе с несколькими инструментами приходится настраивать доступы в каждом из них отдельно. Сложно контролировать, кто и к чему имеет доступ.',
    solution: 'MailFlow — централизованное управление правами и ролями',
    benefits: [
      'Гибкая система ролей с детальными правами',
      'Единая точка управления доступом',
      'Журнал всех действий пользователей',
      'SSO интеграция для упрощенной авторизации',
    ],
  },
  {
    icon: Building2,
    role: 'Multi-project команды',
    color: 'warning',
    challenge: 'Управление несколькими проектами',
    problem: 'Когда команда работает с несколькими клиентами или продуктами, нужно постоянно переключаться между аккаунтами, дублировать настройки, сложно получить общую картину.',
    solution: 'Control Plane для управления всеми проектами',
    benefits: [
      'Быстрое переключение между проектами',
      'Изолированные данные для каждого проекта',
      'Общие настройки и шаблоны',
      'Агрегированная аналитика по всем проектам',
    ],
  },
];

export function Solutions() {
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
            Решения для каждой <span className="text-primary">роли</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            MailFlow решает реальные проблемы маркетинговых команд. 
            Узнайте, как система помогает разным специалистам достигать целей.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Role Card */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-lg">{solution.role}</span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Problem */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className="text-destructive">Проблема:</span>
                      {solution.challenge}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.problem}
                    </p>
                  </div>

                  {/* Visual representation */}
                  <div className="p-6 rounded-xl border border-destructive/30 bg-destructive/5">
                    <div className="flex items-center gap-3 text-destructive mb-4">
                      <div className="w-8 h-1 bg-destructive rounded" />
                      <span className="text-sm font-medium">Текущая ситуация</span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive/50" />
                        <span>Разрозненные инструменты</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive/50" />
                        <span>Потеря времени на переключение</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive/50" />
                        <span>Нет единой картины</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className="text-primary">Решение:</span>
                      {solution.solution}
                    </h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual representation */}
                  <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                    <div className="flex items-center gap-3 text-primary mb-4">
                      <div className="w-8 h-1 bg-primary rounded" />
                      <span className="text-sm font-medium">С MailFlow</span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                        <span>Единая система</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                        <span>Автоматизация процессов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                        <span>Полный контроль и аналитика</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < solutions.length - 1 && (
                <div className="mt-20 border-t border-border" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Узнайте, как MailFlow решит ваши задачи
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Получите персональную консультацию и демонстрацию возможностей системы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Получить консультацию
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/features"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
              >
                Все возможности
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
