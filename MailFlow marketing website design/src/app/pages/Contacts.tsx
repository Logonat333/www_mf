import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Form, Input, Button, message } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@mailflow.io',
    link: 'mailto:hello@mailflow.io',
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 (495) 123-45-67',
    link: 'tel:+74951234567',
  },
  {
    icon: MapPin,
    title: 'Офис',
    content: 'Москва, ул. Примерная, д. 1',
    link: null,
  },
];

export function Contacts() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form values:', values);
    message.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
    form.resetFields();
    setLoading(false);
  };

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
            Свяжитесь <span className="text-primary">с нами</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Есть вопросы о MailFlow? Хотите получить демонстрацию? 
            Заполните форму, и мы свяжемся с вами в ближайшее время.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Отправить заявку</h2>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
              >
                <Form.Item
                  label="Имя"
                  name="name"
                  rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                >
                  <Input
                    size="large"
                    placeholder="Иван Иванов"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Пожалуйста, введите email' },
                    { type: 'email', message: 'Введите корректный email' },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="ivan@company.com"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label="Компания"
                  name="company"
                >
                  <Input
                    size="large"
                    placeholder="Название компании"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label="Телефон"
                  name="phone"
                >
                  <Input
                    size="large"
                    placeholder="+7 (___) ___-__-__"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label="Сообщение"
                  name="message"
                  rules={[{ required: true, message: 'Пожалуйста, введите сообщение' }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Расскажите о ваших задачах и целях..."
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full rounded-lg h-12"
                  >
                    Отправить заявку
                  </Button>
                </Form.Item>
              </Form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Отправляя форму, вы соглашаетесь с{' '}
                <a href="#" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
              <h3 className="text-xl font-bold mb-4">Часы работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота - Воскресенье: Выходной</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xl font-bold mb-4">Среднее время ответа</h3>
                <p className="text-muted-foreground">
                  Мы стараемся отвечать на все заявки в течение{' '}
                  <span className="text-primary font-semibold">24 часов</span> в рабочие дни.
                </p>
              </div>
            </div>

            {/* Demo CTA */}
            <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5">
              <h3 className="text-xl font-bold mb-2">Хотите увидеть систему в действии?</h3>
              <p className="text-muted-foreground mb-4">
                Запланируйте персональную демонстрацию MailFlow с нашим специалистом
              </p>
              <Button
                type="primary"
                size="large"
                className="rounded-lg h-12"
                block
              >
                Запланировать демо
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary/40" />
                <p className="text-muted-foreground">Карта местоположения офиса</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
