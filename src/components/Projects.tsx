import React from "react";
import { ScrollAnimation, staggeredDelay } from "./Animations";

// Update to use local images from the public folder
const projects = [
  {
    title: "EduBot",
    category: "Education",
    image: "/images/project4.png",
    color: "neon-cyan",
    description:
      "EduBot is an innovative web-based platform developed for the Smart India Hackathon 2025, aimed at providing comprehensive information about all universities operating under the Department of Technical Education, Rajasthan. Designed with accessibility and user-friendliness in mind, EduBot serves as a one-stop solution for students, educators, and stakeholders to explore detailed insights into various universities, courses, facilities, and academic resources.",
    link: "https://edubot-rajasthan.vercel.app",
  },
  {
    title: "BangKicks!",
    category: "E-Commerce",
    image: "/images/project2.png",
    color: "neon-cyan",
    description:
      "BangKicks is developed to cater to the needs of exponentially increasing number of sneakerheads. The vast collection includes the rarest sneaker on the planet to the cheapest piece for a beginner hype beast!",
    link: "https://manasmaheshwarii.github.io/BangKicks/",
  },
  {
    title: "MediTrack",
    category: "Healthcare Management",
    image: "/images/project1.png",
    color: "neon-cyan",
    description:
      "Developed for the Healthcare Management System hackathon at Fluxus'25, IIT Indore, Meditrack is an intuitive platform designed to streamline healthcare services. It enables users to book appointments, access medical records, and receive important notifications for better healthcare management",
    link: "https://github.com/manasmaheshwarii/MediTrack-IITIndore",
  },
  {
    title: "Linguistik",
    category: "Language Translator",
    image: "/images/project3.png",
    color: "neon-cyan",
    description:
      "Linguistik is a smart language translation website designed for seamless and accurate multilingual communication. It enables users to translate text across multiple languages with ease, ensuring clarity and efficiency. Built with advanced AI integration, Linguistik enhances accessibility and cross-cultural interaction.",
    link: "https://manasmaheshwarii.github.io/linguistik/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent works showcasing a blend of design and development
            expertise.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={staggeredDelay(index, 150)}
              className="group"
            >
              <div className="hover-card overflow-hidden rounded-lg bg-gray-900/50 h-full">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 w-full p-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider bg-${project.color}/20 text-${project.color} mb-2`}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-neon-cyan transition-colors"
                  >
                    View Project
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation
          animation="fade-up"
          delay={400}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/manasmaheshwarii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-md bg-transparent border border-neon-purple text-neon-purple font-medium button-glow"
          >
            View All Projects
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
