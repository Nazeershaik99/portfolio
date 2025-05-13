
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
    title: "CodeKaro",
    description: "A free AI-powered coding platform that assists users in learning programming across all levels from beginner to expert. Features intelligent code assistant, structured learning paths, and curated YouTube course links.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    category: "Web Development",
    technologies: ["React", "Node.js", "AI APIs", "JavaScript"],
    link: "#"
  },
  {
    id: 2,
    title: "Diabetes Prediction System",
    description: "A machine learning-powered diabetes prediction system that delivers real-time health assessments through a user-friendly web interface. Utilizes trained ML models to analyze inputs and predict the likelihood of diabetes with high accuracy.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "AI/ML Application",
    technologies: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
    link: "#"
  },
  {
    id: 3,
    title: "TripMate",
    description: "A smart travel planning application focused on low-budget tourism, guiding users through personalized and cost-effective trip experiences. Features secure login functionality and allows users to dynamically calculate trip budgets based on various factors.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    category: "Web Application",
    technologies: ["React", "Express.js", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 4,
    title: "AI Chatbot for Healthcare",
    description: "Integrated a conversational AI chatbot to answer user questions and provide post-diagnosis guidance through natural language. Enables users to consult with health professionals after receiving reports.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    category: "AI/ML Application",
    technologies: ["NLP", "Python", "TensorFlow", "Healthcare API"],
    link: "#"
  },
  {
    id: 5,
    title: "Blockchain-Based IP Protection",
    description: "Published a paper on 'Empowering Creators with a Blockchain-Based IP Protection' at Walchand College of Engineering, Sangli in ICCIPC2023 IEEE Conference.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    category: "Research",
    technologies: ["Blockchain", "Smart Contracts", "Security", "Research"],
    link: "#"
  }
];

export const categories = ["All", "Web Development", "Web Application", "AI/ML Application", "Research"];
