import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <Image className="brand-logo" src="/icon.svg" alt="" width={53} height={53} />
            <span>MailFlow</span>
          </Link>
          <p className="legal-note">Современная B2B SaaS-система для управления маркетинговыми процессами.</p>
          <div className="social-row">
            <a className="social-link" href="mailto:hello@mail-flow-crm.ru" aria-label="MailFlow email">
              <Mail size={16} />
            </a>
            <a className="social-link" href="#" aria-label="MailFlow Twitter">
              <Twitter size={16} />
            </a>
            <a className="social-link" href="#" aria-label="MailFlow LinkedIn">
              <Linkedin size={16} />
            </a>
            <a className="social-link" href="#" aria-label="MailFlow GitHub">
              <Github size={16} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <strong>Продукт</strong>
          <Link href="/features">Возможности</Link>
          <Link href="/solutions">Решения</Link>
          <Link href="/pricing">Тарифы</Link>
          <a href="#">Обновления</a>
        </div>
        <div className="footer-links">
          <strong>Компания</strong>
          <a href="#">О нас</a>
          <Link href="/contacts">Контакты</Link>
          <Link href="/privacy">Политика</Link>
          <a href="#">Карьера</a>
        </div>
        <div className="footer-links">
          <strong>Поддержка</strong>
          <a href="#">Документация</a>
          <a href="#">API</a>
          <a href="#">Помощь</a>
          <Link href="/login">Войти в кабинет</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="legal-note">© 2026 MailFlow. Все права защищены.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy">Политика конфиденциальности</Link>
          <a href="#">Условия использования</a>
        </div>
      </div>
    </footer>
  );
}
