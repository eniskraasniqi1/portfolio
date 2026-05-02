import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "Sep 2025 - Present",
    title: "Full Stack Engineer",
    subtitle: "Teamleader",
    description:
      "Building AI agents with LLM tool-use that integrate deeply with the Teamleader Focus product. Expanded full-stack: shipping features end-to-end across a PHP microservices backend and a React/TypeScript frontend, with hands-on work on prompt design, function-calling, and integrating OpenAI/Anthropic APIs into real product surfaces.",
  },
  {
    year: "May 2022 - Aug 2025",
    title: "Frontend Engineer",
    subtitle: "Teamleader",
    description:
      "Shipped customer-facing features for Teamleader Focus across forms, lists, and workflow surfaces. Worked daily in a large React + Redux + TypeScript codebase, contributing to performance, accessibility, and developer-experience improvements.",
  },
  {
    year: "Aug 2020 - Apr 2022",
    title: "Full-Stack Developer",
    subtitle: "StarLabs",
    description:
      "Helped deliver Gildform, an ERP tool integrated with Shopify. Built Gatsby themes, marketing sites, and embeddable React widgets, applying SEO best practices to lift Lighthouse scores and organic discoverability.",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-zinc-200 pb-8 last:pb-0"
            role="article"
            aria-label={`${item.title} at ${item.subtitle}`}
          >
            {/* Circle Marker */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-800 ring-4 ring-white"></div>

            {/* Content */}
            <div>
              <div className="text-zinc-600 text-sm font-medium mb-2">
                {item.year}
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{item.title}</h3>
                <h4 className="text-base text-zinc-600 font-medium mb-3">{item.subtitle}</h4>
                <p className="text-base leading-relaxed text-zinc-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
