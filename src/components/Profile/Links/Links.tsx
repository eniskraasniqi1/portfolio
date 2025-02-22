import { SiLinkedin, SiGithub, SiStrava } from "react-icons/si";

const profileLinks = [
  {
    name: "Github",
    className:
      "outline-none transition-colors opacity-hover inline-flex items-center gap-1 font-medium text-base-300/80",
    href: "https://github.com/eniskraasniqi1",
    icon: <SiGithub />,
    rel: "noopener noreferrer",
    target: "_blank",
  },
  {
    name: "Linkedin",
    className:
      "outline-none transition-colors opacity-hover inline-flex items-center gap-1 font-medium text-linkedin",
    href: "https://www.linkedin.com/in/enis-krasniqi-4aaa691a7",
    icon: <SiLinkedin />,
    rel: "noopener noreferrer",
    target: "_blank",
  },

  {
    name: "Strava",
    className:
      "outline-none transition-colors opacity-hover inline-flex items-center gap-1 font-medium text-strava",
    href: "https://www.strava.com/athletes/89386980",
    icon: <SiStrava />,
    rel: "noopener noreferrer",
    target: "_blank",
  },
];

const Links = () => {
  return (
    <div className="flex animate-fade-in flex-wrap items-center gap-4 animation-delay-3 mt-2">
      {profileLinks.map((link, idx) => (
        <a
          key={idx}
          className={link.className}
          href={link.href}
          aria-label={link.name}
          title={link.name}
          rel={link.rel}
          target={link.target}
        >
          {link.icon}
          <span className="hidden sm:inline">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Links;
