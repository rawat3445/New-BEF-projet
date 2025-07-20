import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Award,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "100K+",
      label: "Happy Drivers",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Years of Innovation",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "98%",
      label: "Customer Satisfaction",
    },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Support" },
  ];

  /** const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Embracing smart technologies and sustainable mobility.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Performance",
      description: "Enhancing vehicle efficiency and user experience.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer First",
      description: "Delivering solutions tailored to your journey.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Safety & Quality",
      description: "Promoting top-tier safety and product standards.",
    },
  ]; */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-[#edf2fb] via-[#e2e0f9] to-[#f5e6f7] relative overflow-hidden"
    >
      {/* Decorative background grid - muted */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #dbeafe 1px, transparent 1px),
              linear-gradient(-45deg, #f3e8ff 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Introduction */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
              About AutoMobility
            </h2>
            <p className="text-gray-700 mb-4">
              We're transforming how people move by delivering smarter, cleaner,
              and more enjoyable transportation experiences.
            </p>
            <p className="text-gray-700 mb-6">
              Discover innovation in electric vehicles, AI-driven platforms, and
              next-gen transportation.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Smart and connected mobility",
                "Eco-conscious and electric-first solutions",
                "User-centric features and insights",
                "Cutting-edge transport intelligence",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="text-purple-500 w-5 h-5 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
              Learn More
            </button>
          </div>

          <div className="bg-white/90 rounded-3xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-700">
              Our Mission
            </h3>
            <p className="text-gray-700">
              We aim to accelerate the global shift to sustainable mobility
              through smart and personalized transport systems.
            </p>
            <div className="bg-indigo-100 p-5 rounded-2xl space-y-3">
              <h4 className="font-semibold text-gray-800">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Proven expertise in automotive innovation</li>
                <li>✓ Commitment to clean, future-ready mobility</li>
                <li>✓ Passionate, safety-focused team</li>
                <li>✓ Tailored transport for modern lifestyles</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl text-center shadow-md hover:shadow-lg transition"
            >
              <div className="bg-gradient-to-tr from-indigo-400 to-pink-400 text-white p-3 rounded-full w-fit mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values
        <motion.div variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-indigo-800">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto mt-2">
              The pillars that guide every solution we deliver.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-400 text-white p-2 rounded-full w-fit mb-3">
                  {val.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {val.title}
                </h4>
                <p className="text-gray-600 mt-2">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default AboutSection;
