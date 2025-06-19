
import React from 'react';
import { ChevronDown, Code, Cpu, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Code className="text-primary w-8 h-8 opacity-50" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <Cpu className="text-accent w-10 h-10 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '4s'}}>
          <Zap className="text-primary w-6 h-6 opacity-40" />
        </div>
        
        {/* Rotating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/30 rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-accent/20 animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text text-glow">Your Name</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
            Engineering Creative Solutions
          </p>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '1s'}}>
            BTech Engineering Student passionate about building innovative technology 
            solutions that make a difference in the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '1.5s'}}>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow-hover transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 glow-hover transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
