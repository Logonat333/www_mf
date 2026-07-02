import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Send } from "lucide-react";

import { audienceLandingPages, companyRequisites, featureLandingPages } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <Image className="brand-logo" src="/icon.svg" alt="" width={53} height={53} />
            <span>MailFlow</span>
          </Link>
          <p className="legal-note">
            Enterprise Marketing Planning: промо-календарь, задачи, бюджеты, документы, интеграции и аналитика.
          </p>
          <p className="legal-note legal-entity">
            {companyRequisites.shortLegalName}
            <br />
            ИНН {companyRequisites.inn}
          </p>
          <div className="social-row">
            <a className="social-link" href="mailto:davritsevich1@gmail.com" aria-label="MailFlow email">
              <Mail size={16} />
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%B0%D0%B2%D1%80%D0%B8%D1%86%D0%B5%D0%B2%D0%B8%D1%87-b3701931a/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              aria-label="MailFlow LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a className="social-link" href="https://t.me/AvritsevichD" target="_blank" rel="noreferrer" aria-label="MailFlow Telegram">
              <Send size={16} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <strong>Продукт</strong>
          <Link href="/features">Возможности</Link>
          {featureLandingPages.map((page) => (
            <Link key={page.slug} href={`/features/${page.slug}`}>
              {page.navLabel}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <strong>Для кого</strong>
          <Link href="/solutions">Сценарии</Link>
          {audienceLandingPages.map((page) => (
            <Link key={page.slug} href={`/solutions/${page.slug}`}>
              {page.navLabel}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <strong>Запуск</strong>
          <Link href="/pricing">Форматы запуска</Link>
          <Link href="/contacts">Заявка на пилот</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/contacts#requisites">Реквизиты</Link>
          <Link href="/privacy">Политика</Link>
          <a href="mailto:davritsevich1@gmail.com">davritsevich1@gmail.com</a>
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
