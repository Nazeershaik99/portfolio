
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
            Get to know me better - my background, experience, and what drives me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Story</h3>
            <p className="text-gray-600 dark:text-gray-400">
              With over 5 years of experience in web development, I've helped businesses of all sizes
              establish their online presence. My journey in tech began when I built my first website
              at 16, and I've been passionate about creating digital experiences ever since.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I specialize in front-end development with React, creating responsive designs,
              and building user interfaces that are both beautiful and functional. I'm constantly
              learning new technologies to stay at the cutting edge of web development.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you'll find me hiking, reading science fiction, or experimenting
              with new recipes in the kitchen.
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
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
