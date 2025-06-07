import React from "react";
import { Flag, BarChart3, Globe, Leaf, Monitor} from "lucide-react";

const events = [
  {
    year: '2012',
    title: 'The Foundation',
    description:
      'BEForum was founded to bridge India\'s policy vision with economic execution through strategic dialogue.',
    icon: Flag, 
    bgColor: "bg-[#1E3A8A]",
  },
  {
    year: '2015',
    title: 'Policy Engagement',
    description:
      'Started influencing economic reforms by facilitating expert roundtables with industry and government.',
    icon: BarChart3,
    bgColor: "bg-[#06B6D4]",
  },
  {
    year: '2018',
    title: 'Global Collaboration',
    description:
      'Forged partnerships with global institutions, enhancing India’s voice in world affairs.',
    icon: Globe,
    bgColor: "bg-[#1E3A8A]",
  },
  {
    year: '2023',
    title: 'Digital Expansion',
    description:
      'Launched virtual platforms to amplify discourse and outreach amid global shifts.',
    icon: Monitor,
    bgColor: "bg-[#06B6D4]",
  },
];

const AboutPage = () => {
  return (
    <section className="bg-[#F9FAFB] font-inter text-[#111827] pt-16 pb-12 px-4 sm:px-6 lg:px-16 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
          About The Bharat Economic Forum
        </h1>
        <p className="text-[#6B7280] text-base sm:text-lg max-w-3xl mx-auto">
          The Bharat Economic Forum (BEF) is an Independent Think Tank For Viksit Bharat@2047.Its a global platform for discussing, debating, and shaping India’s economic policies, business strategies, and development initiatives. It aims to bring together industry leaders, policymakers, bureaucrats, and social impact entrepreneurs to foster collaboration and exchange of ideas that can fuel India's growth story into the era of a Developed Nation by its 100th Independence Day. 
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#E5E7EB] z-0" />

        <div className="flex flex-col gap-10">
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`
                  flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8
                  ${isLeft ? "lg:flex-row-reverse lg:self-start" : "lg:self-end"}
                `}
              >
                {/* Dots */}
                <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-[#1E3A8A] z-10" />

                {/* Cards */}
                <div
                  className={`w-full max-w-md lg:max-w-[360px] rounded-2xl shadow-xl p-6 text-white ${event.bgColor}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <event.icon className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-semibold">{event.year}</h3>
                  </div>
                  <h4 className="text-lg font-medium mb-1">{event.title}</h4>
                  <p className="text-white/90 text-sm">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;