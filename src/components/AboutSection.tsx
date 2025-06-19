
import React from 'react';
import { GraduationCap, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BTech Engineering",
      description: "Pursuing excellence in engineering with a focus on innovative problem-solving"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about creating efficient solutions to complex technical challenges"
    },
    {
      icon: Heart,
      title: "Tech Enthusiast",
      description: "Always exploring cutting-edge technologies and their real-world applications"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 animate-pulse-glow flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                  <span className="text-6xl text-primary/50">🚀</span>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="text-primary">⚡</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float" style={{animationDelay: '2s'}}>
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <span className="text-accent">🔧</span>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate BTech Engineering student with a deep love for technology and innovation. 
                My journey in engineering has been driven by curiosity and the desire to create solutions 
                that make a positive impact on the world.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding or studying, you'll find me exploring new technologies, 
                contributing to open-source projects, or working on creative side projects that 
                challenge my problem-solving skills.
              </p>

              {/* Highlight Cards */}
              <div className="grid gap-4 mt-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 glow-hover">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
