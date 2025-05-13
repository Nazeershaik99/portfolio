
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, education, and what I do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Background</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm an AI & Machine Learning Engineer with a strong background in web development.
              Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at NRI Institute of Technology
              with a CGPA of 8.5.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I specialize in building intelligent applications that leverage machine learning, 
              natural language processing, and web technologies. My passion lies in creating 
              solutions that solve real-world problems and enhance user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I've developed several projects including a diabetes prediction system, 
              a smart travel planning application, and an AI-powered coding platform,
              all aimed at making technology more accessible and beneficial.
            </p>
            <div className="pt-4">
              <Button>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <p className="text-gray-600 dark:text-gray-400">Major Projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <p className="text-gray-600 dark:text-gray-400">Published Paper</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <p className="text-gray-600 dark:text-gray-400">Certifications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
