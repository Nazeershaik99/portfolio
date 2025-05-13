
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, categories } from "../data/projectsData";
import { Link, Database, MapPin, FileText, Code, FileImage } from "lucide-react";

// Map project titles to their respective icons
const projectIcons: Record<string, React.ReactNode> = {
  "Kode.ai": <Code className="h-5 w-5 mr-2" />,
  "CodeKaro": <Code className="h-5 w-5 mr-2" />,
  "Diabetes Prediction": <Database className="h-5 w-5 mr-2" />,
  "TripMate": <MapPin className="h-5 w-5 mr-2" />,
  "Resources-library": <FileText className="h-5 w-5 mr-2" />,
  "PlasticWaste-Classification": <FileImage className="h-5 w-5 mr-2" />,
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my latest projects and technical work.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(3);
              }}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map(project => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center">
                  {projectIcons[project.title] || <Link className="h-5 w-5 mr-2" />}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <Badge>{project.category}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMore}>Load More</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
