import { ReactNode } from "react";
import GithubIcon from "../../icons/GithubIcon";
import { useLocation } from "react-router";

interface NavigationLink {
  name: ReactNode;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "My Stack", href: "/stack" },
  { name: <GithubIcon />, href: "/github" },
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
