export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

const projectsData: IProject[] = [
  {
    id: 1,
    title: "Paymob Dashboard",
    description:
      "A comprehensive payment management dashboard built with React and Next.js. Features real-time transaction monitoring, analytics charts, and a sleek dark-mode interface for managing digital payments at scale.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/projects/paymob.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application powered by the MEAN stack. Includes product catalog, shopping cart, secure checkout with Stripe integration, and an admin panel for inventory management.",
    tags: ["Angular", "Node.js", "MongoDB"],
    image: "/projects/ecommerce.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Portfolio 3D Experience",
    description:
      "An immersive 3D scroll-driven portfolio website using Three.js and Framer Motion. Features cinematic scroll animations, interactive 3D models, and a stunning visual storytelling approach.",
    tags: ["Three.js", "Framer Motion", "Next.js"],
    image: "/projects/portfolio.jpg",
    href: "#",
  },
];

export default projectsData;
