import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Code2 className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="text-xl font-bold">Veda Dasara</span>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Veda Dasara. All rights reserved.
          </p>
          
          <p className="flex items-center text-gray-400 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;