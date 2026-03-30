

const Projects = () => {


  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects/Awards</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          </p>
          <div className="flex justify-center mb-8">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7438192443713519616" height="824" width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
          </div>
          <div className="mt-2 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-100 dark:from-yellow-900/40 dark:to-amber-900/40 border border-yellow-200 dark:border-yellow-700/50 text-amber-900 dark:text-amber-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xl" role="img" aria-label="Trophy">🏆</span>
              <span className="font-semibold">Vision Team Award</span>
              <span className="hidden sm:inline text-amber-700/50 dark:text-amber-400/50 mx-1">•</span>
              <span className="font-medium italic">SmartSelect AI</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-800/60 dark:to-gray-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-800 dark:text-slate-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xl" role="img" aria-label="Medal">🏅</span>
              <span className="font-semibold">William J. Williams Nominee</span>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-500 mx-1">•</span>
              <span className="font-medium italic">AI Knowledge Management</span>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 flex justify-center w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
            {/* Devpost Action Card */}
            <a
              href="https://devpost.com/v-d"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-1 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center gap-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-slate-700/50">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853Z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Hackathons</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Explore my portfolio</p>
                </div>
              </div>
            </a>

            {/* GitHub Action Card */}
            <a
              href="https://github.com/VedashreeD?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-1 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center gap-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-slate-700/50">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Repositories</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">View my Open Source</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;