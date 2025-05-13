
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
    title: "Kode.ai",
    description: "An intelligent coding assistant that integrates AI capabilities into coding environments, offering features such as code suggestions, error detection, and automated documentation to enhance developer productivity through intelligent assistance.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    category: "AI/ML Application",
    technologies: ["TypeScript", "AI", "Machine Learning", "React"],
    link: "#"
  },
  {
    id: 2,
    title: "Diabetes Prediction",
    description: "A predictive model for diabetes diagnosis using Python. The system includes data analysis, feature selection, and machine learning algorithms to assess the likelihood of diabetes in individuals based on medical data.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    category: "AI/ML Application",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
    link: "#"
  },
  {
    id: 3,
    title: "TripMate",
    description: "A web-based application designed to assist users in planning and organizing their travel itineraries. It offers features for scheduling, destination management, and budgeting, providing a user-friendly interface for comprehensive trip planning.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    category: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    link: "#"
  },
  {
    id: 4,
    title: "CodeKaro",
    description: "An educational platform for coding that includes interactive coding challenges, tutorials, and a collaborative environment to facilitate learning and practicing programming skills for developers of all levels.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    category: "Web Development",
    technologies: ["JavaScript", "React", "Node.js", "Education"],
    link: "#"
  },
  {
    id: 5,
    title: "PlasticWaste-Classification",
    description: "A machine learning project focused on classifying different types of plastic waste to aid in environmental sustainability efforts through accurate waste categorization and proper disposal management.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    category: "AI/ML Application",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Image Classification"],
    link: "#"
  },
  {
    id: 6,
    title: "Resources-library",
    description: "A curated collection of valuable resources including tutorials, documentation, and tools aimed at enhancing learning and development in various technical domains, serving as a centralized hub for continuous learning.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    category: "Web Development",
    technologies: ["Documentation", "Web Development", "Knowledge Base", "Education"],
    link: "#"
  }
];

export const categories = ["All", "Web Development", "Web Application", "AI/ML Application"];
