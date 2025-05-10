
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Dashboard",
    description: "An analytics dashboard for financial portfolio management with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    category: "Web Development",
    technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 3,
    title: "Travel Blog",
    description: "A blog platform for travel enthusiasts with location-based content and interactive maps.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    category: "Web Design",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    link: "#"
  },
  {
    id: 4,
    title: "Fitness App",
    description: "Mobile-first fitness application with workout tracking and nutrition planning features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    category: "Mobile App",
    technologies: ["React Native", "Redux", "Firebase", "TypeScript"],
    link: "#"
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "Online reservation system for restaurants with table management and customer notifications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "Web Development",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    link: "#"
  },
  {
    id: 6,
    title: "Music Streaming Platform",
    description: "Audio streaming service with playlist creation and social sharing capabilities.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
    link: "#"
  }
];

export const categories = ["All", "Web Development", "Web Design", "Mobile App"];
