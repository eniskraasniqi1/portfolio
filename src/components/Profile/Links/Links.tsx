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
    <div className="flex animate-fade-in flex-wrap items-center gap-3 sm:gap-4 animation-delay-3 mt-4">
      {profileLinks.map((link, idx) => (
        <a
          key={idx}
          className={`${link.className} px-3 py-2 rounded-lg transition-all duration-200 hover:bg-zinc-50 hover:shadow-sm flex items-center gap-2`}
          href={link.href}
          aria-label={link.name}
          title={link.name}
          rel={link.rel}
          target={link.target}
        >
          <span className="text-lg">{link.icon}</span>
          <span className="hidden sm:inline font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Links;
