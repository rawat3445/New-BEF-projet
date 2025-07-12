import React from "react";
import { Leaf, DollarSign, BarChart2, TrendingUp } from "lucide-react";

const SalesSection = () => {
  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "₹4,999",
      period: "/month",
      description:
        "Perfect for small farms looking to get started with smart farming.",
      features: [
        "AI-driven crop monitoring",
        "Basic soil health analytics",
        "Real-time weather updates",
        "24/7 email support",
      ],
      icon: <Leaf className="h-8 w-8" />,
      accent: "from-green-500 to-teal-600",
      buttonText: "Get Started",
    },
    {
      name: "Pro Plan",
      price: "₹9,999",
      period: "/month",
      description:
        "Ideal for medium to large farms aiming for precision agriculture.",
      features: [
        "Advanced AI crop monitoring",
        "Predictive yield analytics",
        "IoT device integration",
        "Priority phone & email support",
        "Sustainable farming consultation",
      ],
      icon: <BarChart2 className="h-8 w-8" />,
      accent: "from-blue-500 to-indigo-600",
      buttonText: "Choose Pro",
      highlighted: true,
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      period: "",
      description:
        "Tailored solutions for large agribusinesses and cooperatives.",
      features: [
        "Full-suite agritech platform",
        "Custom AI models",
        "Dedicated account manager",
        "On-site training & support",
        "Enterprise-grade integrations",
      ],
      icon: <TrendingUp className="h-8 w-8" />,
      accent: "from-amber-500 to-yellow-600",
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section id="sales" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* 
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Choose Your AgriNxt Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Unlock the power of smart agriculture with our tailored pricing plans. From small farms to large agribusinesses, we have a solution for you.
          </p> 
          */}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.highlighted ? "border-2 border-green-500 scale-105" : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                  Most Popular
                </span>
              )}
              <div
                className={`bg-gradient-to-r ${plan.accent} text-white p-4 rounded-xl w-fit mb-6`}
              >
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <div className="text-3xl font-bold text-gray-800 mb-4">
                {plan.price}
                <span className="text-lg font-normal text-gray-600">
                  {plan.period}
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.name === "Enterprise Plan" ? (
                <a
                  href="mailto:sales@agrinxt.com"
                  className={`w-full bg-gradient-to-r ${plan.accent} text-white px-6 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
                  {plan.buttonText}
                </a>
              ) : (
                <button
                  className={`w-full bg-gradient-to-r ${plan.accent} text-white px-6 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
                  {plan.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Still unsure which plan is right for you? Let's talk and tailor a
            smart farming solution that fits your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Schedule Partnership Call
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white border-2 border-gray-200 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Download Pricing Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
