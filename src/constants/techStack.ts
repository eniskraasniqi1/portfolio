import { IconType } from "react-icons";
import { FaCss3, FaReact, FaTheaterMasks } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { RiHtml5Line, RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiReactquery,
  SiRedux,
  SiSwr,
  SiWebpack,
} from "react-icons/si";
import { TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";

interface TechStack {
  name: string;
  color: string;
  icon: IconType;
}

export type TechStackList = TechStack[];

export const technicalStackList: TechStackList = [
  {
    name: "JavaScript",
    icon: RiJavascriptLine,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: TbBrandTypescript,
    color: "#3178C6",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "HTML",
    icon: RiHtml5Line,
    color: "#E44D26",
  },
  {
    name: "Next JS",
    icon: RiNextjsLine,
    color: "#000000",
  },
  {
    name: "Gatsby",
    icon: GrGatsbyjs,
    color: "#663399",
  },
  {
    name: "Tailwind",
    icon: TbBrandTailwind,
    color: "#38B2AC",
  },
  {
    name: "CSS",
    icon: FaCss3,
    color: "#1572B6",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    color: "#FF4154",
  },
  {
    name: "SWR",
    icon: SiSwr,
    color: "#000000",
  },
  {
    name: "Playwright",
    icon: FaTheaterMasks,
    color: "#2F9331",
  },
  {
    name: "Jest",
    icon: SiJest,
    color: "#C21325",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    color: "#8DD6F9",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "NestJs",
    icon: SiNestjs,
    color: "#E0234E",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
];
