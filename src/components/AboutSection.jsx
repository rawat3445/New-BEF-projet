import { ArrowRight, Trophy, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";

const AboutSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-soft-white">
      {/* Hero Section */}
      <section
        id="about"
        className="pt-24 pb-20 bg-[linear-gradient(to_bottom_right,#E6F0FA,var(--soft-white),#E6F0FA)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-6">
            About{" "}
            <span className="bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] bg-clip-text text-transparent">
              Bharat Economic Forum
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto mb-8">
            The Bharat Economic Forum (BEF) is India's dynamic economic and
            policy think tank committed to building a sustainable, inclusive,
            and innovation-led Bharat by 2047.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            Discover Our Vision
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                The Bharat Economic Forum is a movement that embodies the spirit
                of a resilient and visionary India. We work at the intersection
                of policy, entrepreneurship, technology, and
                communication—bringing together minds that matter to co-create
                India's 2047 vision.
              </p>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                With a steadfast commitment to the dream of a developed nation
                by 2047, BEF instills the belief that every Indian's effort
                contributes to a bright, united future. Here, tradition meets
                modern excellence, a call to every citizen to be part of India's
                historic journey.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-6 py-3 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="BEF Vision"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-blue)]/20 to-[var(--accent-cyan)]/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with BEF Section */}
      <section className="py-20 bg-[#E6F0FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Why Partner with BEF?
            </h2>
            <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto">
              Building India's foundation for sustainable growth through
              collaboration and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Thought Leadership",
                desc: "Delivering in-depth analysis and strategic insights on economic policies and trends that matter.",
                icon: <Trophy className="w-8 h-8 text-accent-cyan" />,
              },
              {
                title: "Policy Advocacy",
                desc: "Partnering with government bodies to cultivate reforms that mirror the heart and soul of our nation.",
                icon: <TrendingUp className="w-8 h-8 text-accent-cyan" />,
              },
              {
                title: "Networking & Mentorship",
                desc: "Connecting industry leaders, entrepreneurs, and policymakers to forge a robust ecosystem of progress.",
                icon: <Users className="w-8 h-8 text-accent-cyan" />,
              },
              {
                title: "Capacity Building",
                desc: "Hosting seminars, workshops, and training programs that empower citizens with tools for positive change.",
                icon: <Zap className="w-8 h-8 text-accent-cyan" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-soft-white p-6 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
