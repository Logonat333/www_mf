"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

import { navigation } from "@/lib/site-content";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("mailflow-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("mailflow-theme", nextTheme);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="MailFlow">
          <Image className="brand-logo" src="/icon.svg" alt="" width={53} height={53} priority />
          <span>MailFlow</span>
        </Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} className={`nav-link${active ? " active" : ""}`} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link className="button button-primary" href="/contacts">
            Запросить демо
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-panel"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className={`container mobile-panel${isMenuOpen ? " open" : ""}`} id="mobile-panel">
        <nav className="mobile-nav" aria-label="Мобильная навигация">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} className={`nav-link${active ? " active" : ""}`} href={item.href}>
                {item.label}
              </Link>
            );
          })}
          <Link className="button button-secondary" href="/login">
            Войти
          </Link>
          <Link className="button button-primary" href="/contacts">
            Получить демо
          </Link>
        </nav>
      </div>
    </header>
  );
}
