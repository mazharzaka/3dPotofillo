export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  category: string;
  year: string;
}

const projectsData: IProject[] = [
  {
    id: 1,
    title: "Paymob Dashboard",
    description:
      "A comprehensive payment management dashboard built with React and Next.js. Features real-time transaction monitoring, analytics charts, and a sleek dark-mode interface for managing digital payments at scale.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/projects/paymob.webp",
    href: "#",
    category: "FINTECH",
    year: "2026",
  },
  {
    id: 2,
    title: "BasataPay",
    description:
      "BasataPay is a comprehensive payment management dashboard built with React and Next.js. Features real-time transaction monitoring, analytics charts, and a sleek dark-mode interface for managing digital payments at scale.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/projects/basata.webp",
    href: "#",
    category: "FINTECH",
    year: "2025",
  },
  {
    id: 3,
    title: "GTO Demo-  intern",
    description:
      "GTO is a comprehensive payment management dashboard built with React and Next.js. Features real-time transaction monitoring, analytics charts, and a sleek dark-mode interface for managing digital payments at scale.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/projects/gto.webp",
    href: "#",
    category: "INTERNSHIP",
    year: "2025",
  },
  {
    id: 4,
    title: "wasl",
    description:
      "wasl is e-commerce platform for selling and buying products",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "express", "jwt"],
    image: "/projects/wsl.png",
    href: "#",
    category: "Freelance",
    year: "2026",
  },
  {
    id: 5,
    title: "monex App",
    description:
      "wasl is e-commerce platform for selling and buying products",
    tags: ["React Native ", "TypeScript", "Node.js", "MongoDB", "express", "jwt"],
    image: "/projects/monex.png",
    href: "#",
    category: "Training",
    year: "2026",
  },
  {
    id: 6,
    title: "E-commerce App",
    description:
      "wasl is e-commerce platform for selling and buying products",
    tags: ["React Native ", "TypeScript", "Node.js", "MongoDB", "express", "jwt"],
    image: "/projects/ecomm.jpg",
    href: "#",
    category: "Training",
    year: "2025",
  },
  {
    id: 7,
    title: "Charity",
    description:
      "Charity is a comprehensive platform for selling and buying products",
    tags: ["React vite", "TypeScript", "Node.js", "MongoDB", "express", "jwt"],
    image: "/projects/Charity.png",
    href: "#",
    category: "Training",
    year: "2024",
  },
];

export default projectsData;
