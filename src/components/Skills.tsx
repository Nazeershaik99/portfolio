
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React/Node.js", level: 85 },
    { name: "Machine Learning", level: 88 },
    { name: "HTML/CSS", level: 90 },
    { name: "Database Systems", level: 80 },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Collaboration", icon: "👥" },
    { name: "Communication", icon: "📣" },
    { name: "Time Management", icon: "⏱️" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Leadership", icon: "🚀" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and professional competencies that I bring to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className="p-6 flex items-center space-x-4">
                    <span className="text-3xl" aria-hidden="true">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
