import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "May 2022 - Present",
    title: "Frontend Engineer",
    subtitle: "Teamleader",
    description:
      "Developing new features for the Teamleader Focus product, enhancing user functionality and experience. Main technologies used are React, Redux, and TypeScript.",
  },
  {
    year: "Aug 2020 - Apr 2022",
    title: "Full-Stack Developer",
    subtitle: "StarLabs",
    description:
      "Helped delivering a product named Gildform, an ERP system management tool seamlessly integrated with Shopify. Additionally, contributed to building Gatsby themes, websites, and React widgets, implementing SEO best practices to enhance performance and user experience.",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="text-zinc-600 border-l-2 border-tags max-w-4xl mx-auto pt-10">
      <div className="relative pl-16">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-10">
            {/* Diamond Shape */}
            <div className="absolute -left-[27px] w-5 h-5 bg-white z-10 box-content p-4">
              <div className="w-full h-full bg-tags hover:bg-black hover:cursor-pointer rotate-45"></div>
            </div>

            {/* Year Box */}
            <div className="pt-3">
              <div className="bg-tags hover:bg-black hover:cursor-pointer text-white px-3 py-1 text-sm font-semibold inline-block mb-2 rounded">
                {item.year}
              </div>

              {/* Content */}
              <div className="mt-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <h4 className="text-gray-500">{item.subtitle}</h4>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
