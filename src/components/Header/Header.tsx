import { ReactNode } from "react";
import { SiGithub } from "react-icons/si";
import { useLocation } from "react-router";

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

  return (
    <header className="py-6 lg:py-8 z-10 flex justify-center">
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex items-center rounded-full bg-white/95 px-4 py-3 text-sm font-medium text-zinc-700 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur">
          {navigationLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <li key={idx}>
                <a
                  className={`block px-4 py-1 rounded-full transition-colors duration-200 ease-in-out hover:text-zinc-900 ${
                    isActive ? "text-zinc-900 font-semibold" : ""
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
