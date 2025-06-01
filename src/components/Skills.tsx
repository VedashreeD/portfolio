import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setAnimateSkills(true);
      const timer = setTimeout(() => setAnimateSkills(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const skillCategories = [
    {
      name: "AI",
      skills: [
        { name: "Langgraph", level: 90 },
        { name: "AI Agents", level: 85 },
        { name: "Natural Language Processing", level: 90 },
        { name: "RAG", level: 80 },
        { name: "Long-Term Memory", level: 80 }
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Bash/Shell Scripting", level: 85 }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      name: "Cloud & Data Engineering",
      skills: [
        { name: "AWS (EC2, ECS, S3, Lambda)", level: 80 },
        { name: "Databricks", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Apache Spark", level: 75 },
        { name: "Data Pipelines", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've mastered over the years, enabling me to deliver cutting-edge AI solutions.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                      <div 
                        className={`bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out ${
                          animateSkills ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;