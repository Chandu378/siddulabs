import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
const ProjectsSection = () => {
  const projects = [{
    title: "Smart IoT Dashboard",
    description: "Real-time monitoring system for IoT devices with interactive charts and alerts. Built with React, Node.js, and WebSocket connections.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    gradient: "from-blue-500 to-purple-600",
    emoji: "📊"
  }, {
    title: "AI-Powered Study Assistant",
    description: "Machine learning application that helps students optimize their study schedules based on performance analytics.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    gradient: "from-green-500 to-teal-600",
    emoji: "🤖"
  }, {
    title: "Sustainable Energy Monitor",
    description: "Environmental monitoring system that tracks energy consumption and suggests optimization strategies.",
    tech: ["Arduino", "React", "Node.js", "SQLite"],
    gradient: "from-yellow-500 to-orange-600",
    emoji: "🌱"
  }, {
    title: "Virtual Reality Campus Tour",
    description: "Immersive VR experience for prospective students to explore the campus remotely using WebXR technologies.",
    tech: ["Three.js", "WebXR", "React", "Blender"],
    gradient: "from-purple-500 to-pink-600",
    emoji: "🥽"
  }, {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology ensuring election integrity.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    gradient: "from-indigo-500 to-blue-600",
    emoji: "🗳️"
  }, {
    title: "Robotics Control Interface",
    description: "Advanced control system for robotic arms with real-time feedback and machine vision integration.",
    tech: ["Python", "OpenCV", "ROS", "Qt"],
    gradient: "from-red-500 to-pink-600",
    emoji: "🦾"
  }];
  return <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <div key={index} className="group relative backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:transform hover:scale-105 glow-hover bg-slate-50">
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-4 group-hover:animate-float`}>
                  {project.emoji}
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium">
                      {tech}
                    </span>)}
                </div>
                
                {/* Project Actions */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-lg text-primary text-sm font-medium transition-all duration-300 hover:glow">
                    <Play className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-muted/20 hover:bg-muted/30 border border-muted/40 rounded-lg text-muted-foreground text-sm font-medium transition-all duration-300 hover:text-foreground">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 border border-accent/40 rounded-lg text-accent text-sm font-medium transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </div>)}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-lg text-primary font-semibold transition-all duration-300 glow-hover transform hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;