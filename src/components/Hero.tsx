import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-primary font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">Shaik Nazeer</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              AI & ML Engineer | Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              I create intelligent solutions using AI, machine learning, and web technologies to solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img alt="Shaik Nazeer" className="w-full h-full object-cover" src="/lovable-uploads/959d919c-8ba5-4722-909a-ff396e2e9654.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;