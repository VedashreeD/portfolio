import { Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pb-8 bg-gray-50 dark:bg-slate-800/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
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

          <div className="relative h-24 overflow-hidden mt-4">
            <div className="absolute inset-0 flex items-center">
              <div className="flex space-x-80 animate-slide">
                <img 
                  src="https://www.svgrepo.com/show/530451/dns.svg" 
                  alt="DNS" 
                  className="w-12 h-12 animate-rotate"
                />
                <img 
                  src="https://www.svgrepo.com/show/530456/host-record.svg" 
                  alt="Host Record" 
                  className="w-12 h-12"
                />
                <img 
                  src="https://www.svgrepo.com/show/530439/api-interface.svg" 
                  alt="API Interface" 
                  className="w-12 h-12 animate-glossy"
                />
                <img 
                  src="https://www.svgrepo.com/show/530444/availability.svg" 
                  alt="Availability" 
                  className="w-12 h-12 animate-float"
                />
                <img 
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg" 
                  alt="Machine Vision" 
                  className="w-12 h-12 animate-pulse"
                />
                <img 
                  src="https://www.svgrepo.com/show/530455/cloud-acceleration.svg" 
                  alt="Cloud Acceleration" 
                  className="w-12 h-12 animate-launch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glossy {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }

        @keyframes launch {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-rotate {
          animation: rotate 8s linear infinite;
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .animate-glossy {
          animation: glossy 2s ease-in-out infinite;
        }

        .animate-launch {
          animation: launch 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;