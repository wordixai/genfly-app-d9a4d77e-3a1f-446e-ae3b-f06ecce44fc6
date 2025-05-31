import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Café interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-amber-100 p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-amber-800 font-medium italic">
                  "Our passion is creating moments of joy through exceptional coffee."
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-amber-800 mb-6"></div>
            
            <p className="text-gray-600 mb-6">
              Founded in 2010, Café Aroma began as a small passion project by two friends who shared a love for exceptional coffee and creating welcoming spaces. What started as a tiny corner shop has grown into a beloved community hub.
            </p>
            
            <p className="text-gray-600 mb-6">
              We source our beans directly from sustainable farms around the world, ensuring both quality and ethical practices. Our pastries are baked fresh daily using local ingredients whenever possible.
            </p>
            
            <p className="text-gray-600 mb-8">
              More than just a café, we're a gathering place where connections are made, ideas are born, and moments are savored. We're proud to be part of this community and look forward to serving you soon.
            </p>
            
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;