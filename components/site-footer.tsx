import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Send } from "lucide-react";

import { companyRequisites } from "@/lib/site-content";

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
            Единый рабочий хаб для маркетинговых агентств, клиентских задач, досок и согласований.
          </p>
          <p className="legal-note legal-entity">
            {companyRequisites.shortLegalName}
            <br />
            ИНН {companyRequisites.inn}
          </p>
          <div className="social-row">
            <a className="social-link" href="mailto:hello@mail-flow-crm.ru" aria-label="MailFlow email">
              <Mail size={16} />
            </a>
            <a className="social-link" href="#" aria-label="MailFlow LinkedIn">
              <Linkedin size={16} />
            </a>
            <a className="social-link" href="https://t.me/mailflow" target="_blank" rel="noreferrer" aria-label="MailFlow Telegram">
              <Send size={16} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <strong>Продукт</strong>
          <Link href="/features">Возможности</Link>
          <Link href="/solutions">Сценарии</Link>
          <Link href="/pricing">Тарифы</Link>
          <Link href="/contacts">Заявка</Link>
        </div>
        <div className="footer-links">
          <strong>Компания</strong>
          <Link href="/contacts">Контакты</Link>
          <Link href="/contacts#requisites">Реквизиты</Link>
          <Link href="/privacy">Политика</Link>
          <a href="mailto:hello@mail-flow-crm.ru">hello@mail-flow-crm.ru</a>
        </div>
        <div className="footer-links">
          <strong>Тарифы</strong>
          <Link href="/pricing">Форматы тарифов</Link>
          <Link href="/solutions">Для кого</Link>
          <Link href="/features">Что внутри</Link>
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
