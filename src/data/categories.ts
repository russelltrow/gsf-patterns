export type Category = {
  slug: string;
  name: string;
  description: string;
  path: string;
};

export const categories: Category[] = [
  {
    slug: "requirements",
    name: "Requirements",
    description: "Green software patterns for defining sustainable requirements and goals before development begins.",
    path: "/catalog/requirements",
  },
  {
    slug: "architecture",
    name: "Architecture",
    description: "Structural and design patterns that reduce energy consumption and carbon emissions at the system level.",
    path: "/catalog/architecture",
  },
  {
    slug: "development",
    name: "Development",
    description: "Coding and implementation patterns that improve efficiency and reduce the environmental impact of software.",
    path: "/catalog/development",
  },
  {
    slug: "operations",
    name: "Operations",
    description: "Runtime and infrastructure patterns for optimising resource utilisation and minimising operational emissions.",
    path: "/catalog/operations",
  },
];
