import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    description: 'Для небольших команд и стартапов',
    price: 'Бесплатно',
    features: [
      'До 5 пользователей',
      'Все основные модули',
      'Email поддержка',
      '10 GB хранилища',
      'Базовая аналитика',
      'API доступ',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Для растущих команд',
    price: 'По запросу',
    features: [
      'До 20 пользователей',
      'Все модули + приоритетная поддержка',
      'Приоритетная поддержка',
      '100 GB хранилища',
      'Расширенная аналитика',
      'API доступ',
      'Кастомные роли',
      'SSO интеграция',
      'Автоматизация воркфлоу',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Для крупных организаций',
    price: 'По запросу',
    features: [
      'Неограниченное количество пользователей',
      'Все возможности Professional',
      'Персональный менеджер',
      'Неограниченное хранилище',
      'Кастомная аналитика',
      'Priority API',
      'Выделенная инфраструктура',
      'SLA 99.9%',
      'On-premise развертывание',
      'Индивидуальная интеграция',
    ],
    highlighted: false,
  },
];

const allFeatures = [
  {
    category: 'Модули системы',
    features: [
      { name: 'Дашборд с аналитикой', starter: true, pro: true, enterprise: true },
      { name: 'Контент-план', starter: true, pro: true, enterprise: true },
      { name: 'Email рассылки', starter: true, pro: true, enterprise: true },
      { name: 'Медиатека', starter: true, pro: true, enterprise: true },
      { name: 'База знаний', starter: true, pro: true, enterprise: true },
      { name: 'Управление проектами', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Интеграции',
    features: [
      { name: 'API доступ', starter: true, pro: true, enterprise: true },
      { name: 'Webhooks', starter: false, pro: true, enterprise: true },
      { name: 'Кастомные интеграции', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Поддержка',
    features: [
      { name: 'Email поддержка', starter: true, pro: true, enterprise: true },
      { name: 'Приоритетная поддержка', starter: false, pro: true, enterprise: true },
      { name: 'Персональный менеджер', starter: false, pro: false, enterprise: true },
      { name: 'SLA 99.9%', starter: false, pro: false, enterprise: true },
    ],
  },
];

export function Pricing() {
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
            Прозрачные <span className="text-primary">тарифы</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите план, который подходит для вашей команды. 
            Все планы включают 14 дней бесплатного пробного периода.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-xl scale-105'
                  : 'border-border bg-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contacts"
                className={`block w-full text-center px-6 py-3 rounded-lg transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border border-border hover:bg-accent/50'
                }`}
              >
                Связаться с нами
              </a>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Сравнение возможностей
          </h2>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-muted/50 border-b border-border sticky top-0">
                  <div className="font-semibold">Возможности</div>
                  <div className="text-center font-semibold">Free</div>
                  <div className="text-center font-semibold">Professional</div>
                  <div className="text-center font-semibold">Enterprise</div>
                </div>

                {allFeatures.map((section, sectionIndex) => (
                  <div key={section.category}>
                    {/* Category Header */}
                    <div className="bg-muted/30 px-6 py-3 border-b border-border">
                      <h3 className="font-semibold text-sm">{section.category}</h3>
                    </div>

                    {/* Features */}
                    {section.features.map((feature, featureIndex) => (
                      <div
                        key={feature.name}
                        className={`grid grid-cols-4 gap-4 px-6 py-4 ${
                          featureIndex < section.features.length - 1 ||
                          sectionIndex < allFeatures.length - 1
                            ? 'border-b border-border'
                            : ''
                        } hover:bg-muted/20 transition-colors`}
                      >
                        <div className="text-sm">{feature.name}</div>
                        <div className="flex justify-center">
                          {feature.starter ? (
                            <Check className="w-5 h-5 text-primary" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </div>
                        <div className="flex justify-center">
                          {feature.pro ? (
                            <Check className="w-5 h-5 text-primary" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </div>
                        <div className="flex justify-center">
                          {feature.enterprise ? (
                            <Check className="w-5 h-5 text-primary" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Часто задаваемые вопросы о тарифах
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Можно ли сменить тариф?',
                a: 'Да, вы можете изменить тариф в любое время. При повышении тарифа изменения вступают в силу немедленно, при понижении — с начала следующего расчетного периода.',
              },
              {
                q: 'Как работает пробный период?',
                a: 'Все новые пользователи получают 14 дней полного доступа ко всем возможностям Professional тарифа. Кредитная карта не требуется.',
              },
              {
                q: 'Какие способы оплаты доступны?',
                a: 'Мы принимаем оплату банковскими картами, банковскими переводами и выставляем счета для юридических лиц.',
              },
              {
                q: 'Можно ли получить скидку?',
                a: 'Да, мы предоставляем скидки при оплате на год вперед, а также специальные условия для образовательных и некоммерческих организаций.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Не уверены, какой тариф выбрать?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы поможем подобрать оптимальное решение для вашей команды
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Получить консультацию
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
