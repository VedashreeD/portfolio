import { Icon } from "@iconify-icon/react";

const icons = [
  "simple-icons:aws",
  "simple-icons:microsoftazure",
  "simple-icons:postgresql",
  "simple-icons:mongodb",
  "tabler:scan",            // OCR
  "tabler:ai",              // AI
  "tabler:brain",           // Neural networks
  "mdi:graph-outline",      // LangGraph-like
];

const About = () => {
  return (
    <section id="about" className="pb-20 bg-gray-50 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-['Playfair_Display']">
                My journey in technology began as a Computer Science student, where an innate curiosity led me to immerse myself in a multitude of emerging technologies. This hands-on exploration allowed me to discover my niche and sparked a passion for continuous learning.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-['Playfair_Display']">
                Starting out at Larson & Toubro Technology Services, I contributed to the creation of next-generation systems poised to revolutionize telecommunications. This experience deepened my understanding of intricate systems and solidified my commitment to using technology to drive innovation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-['Playfair_Display']">
                Currently, I work at a startup, delving into Artificial Intelligence, agents, and Model Context Protocols (MCP), continuously expanding my expertise to stay ahead of tech advancements. This ongoing journey of exploration and mastery drives my dedication to creating secure, efficient, and transformative technologies that meet the evolving demands of the tech industry.
              </p>
            </div>
          </div>

          {/* ICON MARQUEE */}
          <div className="relative h-24 overflow-hidden mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-slide whitespace-nowrap">
                {[...icons, ...icons].map((icon, i) => (
                  <Icon
                    key={i}
                    icon={icon}
                    width="48"
                    height="48"
                    className="mx-10 text-gray-700 dark:text-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
