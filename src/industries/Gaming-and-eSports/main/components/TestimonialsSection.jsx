
import { Star } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Partnering with GameForge gave our brand massive exposure to the gaming community we've been trying to reach.",
      author: "Sarah Chen",
      role: "Brand Manager at TechGear Pro",
      rating: 5,
    },
    {
      quote:
        "The production quality and audience engagement exceeded all our expectations. ROI was incredible.",
      author: "Marcus Rodriguez",
      role: "Marketing Director at StreamCore",
      rating: 5,
    },
    {
      quote:
        "Best tournament organization we've worked with. Professional, engaging, and results-driven.",
      author: "Alex Thompson",
      role: "Team Captain, Apex Legends",
      rating: 5,
    },
  ];
  
    return (
      <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Trusted by Champions
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            See what our partners are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-60">
            {[
              "TechGear",
              "StreamCore",
              "GamePro",
              "EliteGaming",
              "PixelForce",
              "CyberTech",
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-colors"
              >
                <div className="text-lg font-bold text-gray-400">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
  }

export default TestimonialsSection