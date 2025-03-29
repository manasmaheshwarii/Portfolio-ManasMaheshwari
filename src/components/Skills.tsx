import React from "react";
import { ScrollAnimation, staggeredDelay } from "./Animations";

const skillCategories = [
  {
    title: "Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
        <line x1="8" y1="2" x2="8" y2="18"></line>
        <line x1="16" y1="6" x2="16" y2="22"></line>
      </svg>
    ),
    skills: [
      "UI/UX Design",
      "Figma",
      "Graphic Design",
      "Photoshop",
      "Illustration",
    ],
  },
  {
    title: "Frontend",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST API"],
  },
  {
    title: "Other",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    skills: [
      "Git",
      "Responsive Design",
      "API Integration",
      "Performance Optimization",
      "SEO",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-900/50 relative">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to bring creative ideas to
            life.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={staggeredDelay(index, 150)}
            >
              <div className="glass-morphism p-8 rounded-lg h-full">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-neon-${
                    index === 0
                      ? "cyan"
                      : index === 1
                      ? "pink"
                      : index === 2
                      ? "purple"
                      : "green"
                  }/20 text-neon-${
                    index === 0
                      ? "cyan"
                      : index === 1
                      ? "pink"
                      : index === 2
                      ? "purple"
                      : "green"
                  }`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{category.title}</h3>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full bg-neon-${
                          index === 0
                            ? "cyan"
                            : index === 1
                            ? "pink"
                            : index === 2
                            ? "purple"
                            : "green"
                        } mr-2`}
                      ></span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={600} className="mt-20">
          <div className="glass-morphism rounded-lg p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Let’s Create Something Amazing Together!
            </h3>
            <p className="text-gray-300 mb-6">
              I’m always excited to explore new projects, exchange creative
              ideas, and be part of your vision. Let’s connect and make it
              happen!
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-md bg-neon-cyan text-black font-medium button-glow"
            >
              Let's Talk
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Skills;
