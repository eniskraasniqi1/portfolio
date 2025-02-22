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
  { name: "About", href: "/about" },
  { name: "My Stack", href: "/stack" },
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
    <header className="py-4 top-6 z-10 flex justify-center duration-500 ease-in-out transition-transform">
      <nav>
        <ul className="flex items-center rounded-full bg-white/90 px-3 py-3 text-sm font-medium text-zinc-800 ring-2 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
          {navigationLinks.map((link, idx) => {
            return (
              <li key={idx}>
                <a
                  className={`block px-3 hover:text-cyan-700 ${
                    pathname === link.href ? "text-cyan-700" : ""
                  }`}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
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
