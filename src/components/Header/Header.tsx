import { ReactNode } from "react";
import { SiGithub } from "react-icons/si";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLocation } from "react-router";

import { useTheme } from "../ThemeProvider";

interface NavigationLink {
  name: ReactNode;
  href: string;
  rel?: string;
  target?: string;
}

const navigationLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "Tech Stack", href: "/stack" },
  {
    name: <SiGithub size={20} />,
    href: "https://github.com/eniskraasniqi1",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const { resolvedTheme, toggle } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="py-6 lg:py-8 z-10 flex justify-center">
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex items-center rounded-full bg-white/95 px-4 py-3 text-sm font-medium text-zinc-700 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/80 dark:text-zinc-300 dark:ring-zinc-100/10 dark:shadow-black/20">
          {navigationLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <li key={idx}>
                <a
                  className={`block px-4 py-1 rounded-full transition-colors duration-200 ease-in-out hover:text-zinc-900 dark:hover:text-white ${
                    isActive
                      ? "text-zinc-900 font-semibold dark:text-white"
                      : ""
                  }`}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={toggle}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white dark:focus:ring-zinc-100 dark:focus:ring-offset-zinc-900"
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
