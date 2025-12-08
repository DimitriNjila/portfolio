import {
  FigmaLogoIcon,
  FileIcon,
  FilePlusIcon,
  FileTextIcon,
  GitHubLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
  ConvertingCardContent,
  type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceFeature {
  name: string;
  description: string;
  href: string;
  className: string;
  background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
  destination: {
    id: "client",
    Icon: PersonIcon,
  },
  hub: {
    id: "handoff",
    Icon: FigmaLogoIcon,
  },
  sources: [
    {
      id: "brief",
      Icon: FileTextIcon,
    },
    {
      id: "spec",
      Icon: FilePlusIcon,
    },
    {
      id: "assets",
      Icon: FileIcon,
    },
    {
      id: "repo",
      Icon: GitHubLogoIcon,
    },
  ],
};

export const serviceItems: ServiceItem[] = [
  {
    name: "The Starter Blueprint",
    description:
      "A structured discovery phase covering product strategy, scoping, and technical direction.",
  },
  {
    name: "MVP Development Sprint",
    description:
      "A fast, focused build to deliver a functional MVP or prototype within a short timeline.",
  },
  {
    name: "Full Product Build",
    description:
      "An end-to-end engagement covering design, development, integrations, and launch.",
  },
  {
    name: "Advisory Session",
    description:
      "On-demand strategy calls, technical reviews, or product guidance for immediate clarity.",
  },
  {
    name: "Launch Support",
    description:
      "Hands-on assistance with QA, deployment, and rollout to ensure a smooth product launch.",
  },
  {
    name: "Optimization Pass",
    description:
      "Targeted improvements across performance, UX, or accessibility to refine existing products.",
  },
  {
    name: "Systems Audit",
    description:
      "A technical assessment of architecture, stack, and infrastructure to prepare for scale.",
  },
];

export const bestPractices: ServiceItem[] = [
  {
    name: "Principle 01 — Lead With Outcomes",
    description:
      "Focus on measurable product impact, ensuring every engineering decision ties back to clear business results.",
  },
  {
    name: "Principle 02 — Keep Teams In The Loop",
    description:
      "Maintain consistent communication through weekly updates, async notes, and Loom recaps so progress is always transparent.",
  },
  {
    name: "Principle 03 — Design For Handoff",
    description:
      "Package code, documentation, and assets in a clean, structured way to ensure future teams can extend the work easily.",
  },
  {
    name: "Principle 04 — Prototype Early",
    description:
      "Validate ideas quickly with prototypes and small experiments before committing to full-scale development.",
  },
  {
    name: "Principle 05 — Use AI as Leverage, Not the Product",
    description:
      "Integrate AI to accelerate workflows, enhance quality, and strengthen engineering output—treating it as added muscle, not a substitute for core functionality.",
  },
  {
    name: "Principle 06 — Build For Change",
    description:
      "Keep architecture adaptable and modular so the product can evolve smoothly as new requirements emerge.",
  },
  {
    name: "Principle 07 — Document The Journey",
    description:
      "Capture decisions, learnings, and technical notes throughout the process to maintain clarity and alignment.",
  },
  {
    name: "Principle 08 — Test Relentlessly",
    description:
      "Adopt a disciplined QA process with reviews, checks, and tooling to ensure reliability before anything ships.",
  },
  {
    name: "Principle 09 — Collaborate Openly",
    description:
      "Work through open collaboration—workshops, async standups, and shared sessions—to stay aligned with product partners.",
  },
  {
    name: "Principle 10 — Iterate After Launch",
    description:
      "Use analytics, user feedback, and performance insights to guide continuous improvements after release.",
  },
];

export const serviceFeatures: ServiceFeature[] = [
  {
    name: "Service Overview",
    description:
      "I take on end-to-end product builds, fast MVPs, and UX-focused web apps. Clients can work with me through scoped packages or ongoing technical partnership.",
    href: "#",
    className: "col-span-1",
    background: <ServicesCardContent items={serviceItems} />,
  },

  {
    name: "From Design To Build",
    description:
      "I turn Figma designs, product briefs, and strategy decks into clean, production-ready web experiences.",
    href: "#",
    className: "col-span-1",
    background: <ConvertingCardContent icons={convertingCardIcons} />,
  },

  {
    name: "Code Standards",
    description:
      "I follow clear engineering standards, structured reviews, and quality checks to ensure every build is maintainable and reliable",
    href: "#",
    className: "col-span-1",
    background: <CleanCodeCardContent items={bestPractices} />,
  },
];
