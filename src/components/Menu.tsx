import { useState } from "react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  { id: "coffee", name: "Coffee" },
  { id: "tea", name: "Tea" },
  { id: "pastries", name: "Pastries" },
  { id: "breakfast", name: "Breakfast" }
];

const menuItems = {
  coffee: [
    { name: "Espresso", description: "Strong and aromatic single shot", price: "$3.50" },
    { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "$4.50" },
    { name: "Latte", description: "Espresso with steamed milk", price: "$4.75" },
    { name: "Cold Brew", description: "Slow-steeped for 12 hours", price: "$5.00" },
  ],
  tea: [
    { name: "Earl Grey", description: "Black tea with bergamot oil", price: "$3.75" },
    { name: "Green Tea", description: "Delicate and refreshing", price: "$3.50" },
    { name: "Chai Latte", description: "Spiced tea with steamed milk", price: "$4.50" },
    { name: "Herbal Infusion", description: "Caffeine-free blend of herbs", price: "$3.75" },
  ],
  pastries: [
    { name: "Croissant", description: "Buttery and flaky", price: "$3.25" },
    { name: "Cinnamon Roll", description: "Freshly baked with cream cheese frosting", price: "$4.25" },
    { name: "Blueberry Muffin", description: "Made with fresh blueberries", price: "$3.75" },
    { name: "Chocolate Chip Cookie", description: "Soft and chewy", price: "$2.75" },
  ],
  breakfast: [
    { name: "Avocado Toast", description: "Sourdough with smashed avocado and egg", price: "$8.50" },
    { name: "Breakfast Sandwich", description: "Egg, cheese, and bacon on a brioche bun", price: "$7.25" },
    { name: "Yogurt Parfait", description: "Greek yogurt with granola and berries", price: "$5.75" },
    { name: "Oatmeal", description: "Steel-cut oats with choice of toppings", price: "$4.50" },
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-20 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in serving the finest quality coffee and food made with fresh, locally-sourced ingredients.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={activeCategory === category.id 
                ? "bg-amber-800 hover:bg-amber-900 text-white" 
                : "border-amber-800 text-amber-800 hover:bg-amber-100"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="text-amber-800 font-bold">{item.price}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-amber-800 hover:bg-amber-900 text-white">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;