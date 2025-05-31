import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-amber-50">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
            Café Aroma
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-2">Artisanal Coffee & Pastries</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Experience the perfect blend of flavor and atmosphere in our cozy downtown location.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">
              <Coffee className="mr-2 h-4 w-4" /> View Menu
            </Button>
            <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-100">
              Reserve a Table
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-800">7AM</p>
              <p className="text-gray-600">Weekday Opening</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-800">8AM</p>
              <p className="text-gray-600">Weekend Opening</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-800">10PM</p>
              <p className="text-gray-600">Closing Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;