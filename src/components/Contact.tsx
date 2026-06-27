import { useEffect } from 'react';
import { PenTool } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative AI projects or discuss new opportunities. 
            Whether you have a specific project in mind or just want to chat about AI and technology, 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Expertise Section */}
          <div className="lg:col-span-2 flex flex-col justify-center order-2 lg:order-1 mt-8 lg:mt-0">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Expertise & Services</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              As an AI Developer, I specialize in engineering intelligent systems that bridge the gap between cutting-edge research and real-world impact. I am currently available for:
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center p-3 bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">AI Research Findings</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Deep dives into cutting-edge AI methodologies and latest algorithmic advancements.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center p-3 bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Research Paper Reviews</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Comprehensive critique and technical analysis of theoretical Machine Learning papers.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center p-3 bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">ML & LLM Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Building robust vision and text processing pipelines using foundational AI models.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center p-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Application Enhancements</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Refining logic models, streamlining codebase architecture, and squashing complex bugs.</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-12 flex space-x-4">
              <a href="mailto:dasaraveda@gmail.com" className="group p-3 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-red-50 dark:hover:bg-red-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md" title="Email">
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-[#EA4335] transition-colors duration-300" role="img" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/veda-dasara-97a137121/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-[#0A66C2]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md" title="LinkedIn">
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-[#0A66C2] transition-colors duration-300" role="img" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://iq.opengenus.org/author/vedashree/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-center" title="Blog">
                <PenTool className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors duration-300" />
              </a>
              <a href="https://youtube.com/playlist?list=PLYq7NeYuJJDl2le2kC7kt-C8mzPAICHhz&feature=shared" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-[#FF0000]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md" title="YouTube">
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-[#FF0000] transition-colors duration-300" role="img" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/dasaraveda/new-meeting?hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;