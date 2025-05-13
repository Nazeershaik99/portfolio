
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { FileText, GraduationCap, Briefcase } from "lucide-react";

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
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
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

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Experience & Publications</h3>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="experience-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <Briefcase className="mr-2" />
                  <div>
                    <p className="font-semibold">AI & ML Engineering Intern</p>
                    <p className="text-sm text-gray-500">SkillVertex, 2023</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4">
                <ul className="list-disc pl-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Worked on building and implementing machine learning models for various applications</li>
                  <li>Contributed to deep learning projects focusing on computer vision tasks</li>
                  <li>Collaborated with a team of developers to create AI-powered solutions</li>
                  <li>Gained hands-on experience with TensorFlow, PyTorch, and other ML frameworks</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="publication-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <FileText className="mr-2" />
                  <div>
                    <p className="font-semibold">Research Paper: AI-based Approach for Plastic Waste Classification</p>
                    <p className="text-sm text-gray-500">International Journal of Engineering Research, 2023</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Published research on a novel approach to plastic waste classification using computer vision and deep learning techniques.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  The paper explores the application of convolutional neural networks for identifying different types of plastic waste to improve recycling efficiency and environmental sustainability.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="education-1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <GraduationCap className="mr-2" />
                  <div>
                    <p className="font-semibold">B.Tech in Artificial Intelligence and Machine Learning</p>
                    <p className="text-sm text-gray-500">NRI Institute of Technology, 2020-2024</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  CGPA: 8.5/10
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Relevant coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Data Structures and Algorithms, Web Development
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default About;
