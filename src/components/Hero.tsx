import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ArrowDown, FileText } from 'lucide-react';
import aboutImage from '../images/home-page-bg.jpg';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-4 inline-block">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 py-1 px-3 rounded-full text-sm font-medium">
                AI Full-Stack Developer
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                Veda Dasara
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
               I design workflows where every dependency is intentional, and every function flows cleanly toward its goal, delivering robust, future-proof solutions that not only meet expectations—but consistently exceed them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1TkaSDKiKgxQWNdk8qs-MvtQcJJSenzOa/view?usp=drive_link" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transform transition duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className={`absolute inset-0 rounded-full ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20' 
                  : 'bg-gradient-to-br from-blue-100 to-purple-100'
              } animate-pulse-slow`}></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-gradient-to-br from-gray-100 to-white dark:from-slate-800 dark:to-slate-900">
                    <img
                        src={aboutImage}
                        alt="About Me"
                        className="about-photo-img"
                    />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            <ArrowDown className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;