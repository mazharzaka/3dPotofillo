const BEATSHero = [
  {
    from: 0,
    to: 0.18,
    align: "center" as const,
    eyebrow: "Front-End Developer",
    headline: "Mazhar.",
    sub: "Scroll to see what's inside.",
    cta: null,
  },
  {
    from: 0.22,
    to: 0.48,
    align: "left" as const,
    eyebrow: "The blast begins.",
    headline: "Skills\nin Front-End.",
    sub: "Every pixel crafted with intent.",
    cta: null,
  },
  {
    from: 0.52,
    to: 0.78,
    align: "right" as const,
    eyebrow: "The blast continues.",
    headline: "All skills\nrevealed.",
    sub: "React · Next.js · MERN Stack .REACTNATIVE",
    cta: null,
  },
  {
    from: 0.82,
    to: 0.95,
    align: "center" as const,
    eyebrow: "The full picture.",
    headline: "Let's build\ntogether.",
    sub: null,
    cta: "Get in touch →",
  },
];

const ExperienData = [
  {
    id: 1,
    company: "Bit 68",
    role: "Front End",
    description: `Frontend Developer at bit68 with a proven track record of building
          high-impact digital solutions. I’ve had the opportunity to work on
          industry-leading platforms including <span>Paymob</span>,
          <span> Basata</span>, <span>GTO</span>, <span>Posh Saver</span> and
          <span> Ejaby</span>. I specialize in creating seamless user experiences
          using modern web technologies, ensuring that every line of code adds
          value to the product and the user`,
    date: "October 2025 — Present",
    href: "#",
    logo: "/bit68.png",
  },
  {
    id: 2,
    company: "Bit 68",
    role: "Front End Intern",
    description: `Gained hands-on experience in a fast-paced agile environment, contributing to internal tools and refining frontend architectures.
Mastered modern development workflows, version control (Git), and code review standards.`,
    date: "June 2025 — September 2025",
    href: "#",
    logo: "/bit68.png",
  },
  {
    id: 3,
    company: "National Telecommunication Institute (NTI)",
    role: "Full-Stack Web Development (MEAN Stack)",
    description: `Completed an intensive professional training program focused on building dynamic web applications. Mastered the <span>MEAN Stack</span> (MongoDB, Express.js, Angular, and Node.js), covering everything from database design to building responsive front-end interfaces and RESTful APIs.
    Developed a <span>E-commerce Website</span> as a graduation project using the MEAN stack
    `,
    date: "2024",
    logo: "/nti.png",
    href: "#",
  },
  {
    id: 4,
    company: "Web Development Specialization",
    role: "Egypt FWD (Powered by Udacity)",
    description: `Completed a comprehensive <span>Front-End Web Development</span> program, mastering modern web technologies and best practices. Gained hands-on experience in building responsive, user-centric web applications using HTML, CSS, JavaScript, and modern frameworks. Developed a strong foundation in UI/UX principles, version control (Git/GitHub), and agile development methodologies.`,
    date: "2022",
    logo: "/fwd.jpg",
    href: "#",
  },
];
const frontendSkills = [
  { title: "React", subtitle: "Libraries", logo: "/skills/reactjs.png" },
  { title: "Next.js", subtitle: "Framework", logo: "/skills/next.png" },
  { title: "TypeScript", subtitle: "Language", logo: "/skills/typescript.png" },
  { title: "JavaScript", subtitle: "Language", logo: "/skills/javascript.png" },
  { title: "Redux", subtitle: "State Management", logo: "/skills/redux.png" },
  { title: "Tailwind CSS", subtitle: "Styling", logo: "/skills/tailwind.png" },
  { title: "HTML5", subtitle: "Markup", logo: "/skills/html.png" },
  { title: "CSS3", subtitle: "Styling", logo: "/skills/css.png" },
  { title: "Sass", subtitle: "Preprocessor", logo: "/skills/sass.png" },
  {
    title: "Bootstrap",
    subtitle: "CSS Framework",
    logo: "/skills/bootstarp.png",
  },
  {
    title: "Material UI",
    subtitle: "Component Library",
    logo: "/skills/mui.com.png",
  },
  { title: "Angular", subtitle: "Frontend Framework", logo: "/skills/ang.png" },
  {
    title: "React Native",
    subtitle: "Mobile App Development",
    logo: "/skills/native.png",
  },
  { title: "Three.js", subtitle: "3D Graphics", logo: "/skills/threejs.svg" },
];

const backendSkills = [
  { title: "Node.js", subtitle: "Server Runtime", logo: "/skills/nodejs.png" },
  { title: "MongoDB", subtitle: "Database", logo: "/skills/mongodb.png" },
  { title: "Firebase", subtitle: "BaaS", logo: "/skills/fire.png" },
  { title: "Git", subtitle: "Version Control", logo: "/skills/git.png" },
  { title: "GitHub", subtitle: "Source Control", logo: "/skills/github.png" },
  { title: "NPM", subtitle: "Package Manager", logo: "/skills/npm.png" },
  { title: "Figma", subtitle: "UI/UX Design", logo: "/skills/figma.png" },
];

export { BEATSHero, ExperienData, frontendSkills, backendSkills };
