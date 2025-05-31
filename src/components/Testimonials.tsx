const Testimonials = () => {
  const testimonials = [
    {
      quote: "The best coffee I've ever had! The atmosphere is so inviting, and the staff is incredibly friendly. This is my go-to spot for both work and catching up with friends.",
      author: "Sarah Johnson",
      role: "Local Resident"
    },
    {
      quote: "As a coffee enthusiast, I can confidently say that Café Aroma serves exceptional brews. Their attention to detail and passion for coffee is evident in every cup.",
      author: "Michael Chen",
      role: "Coffee Blogger"
    },
    {
      quote: "The pastries are to die for! Perfectly paired with their signature lattes. I've been coming here every weekend for the past year and it never disappoints.",
      author: "Emma Rodriguez",
      role: "Food Critic"
    }
  ];

  return (
    <section className="py-20 bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-amber-900/30 p-6 rounded-lg">
              <div className="text-amber-100 text-4xl font-serif mb-4">"</div>
              <p className="italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-amber-200 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;