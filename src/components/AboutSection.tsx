
import React from 'react';
import { GraduationCap, Target, Heart, Award, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BTech Engineering",
      description: "Pursuing excellence in engineering with a focus on innovative problem-solving",
      color: "text-blue-400"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about creating efficient solutions to complex technical challenges",
      color: "text-green-400"
    },
    {
      icon: Heart,
      title: "Tech Enthusiast",
      description: "Always exploring cutting-edge technologies and their real-world applications",
      color: "text-red-400"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to delivering high-quality, scalable, and maintainable solutions",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration skills with experience in agile development environments",
      color: "text-purple-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driver",
      description: "Constantly seeking new ways to improve processes and create impactful solutions",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Profile Section */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative w-96 h-96 mx-auto">
                {/* Main professional photo */}
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary/60 transition-all duration-500 transform hover:scale-105 glow-hover">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
                    alt="Professional Portrait" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Tech Icons with enhanced animations */}
                <div className="absolute -top-4 -right-4 animate-float">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 animate-float" style={{animationDelay: '2s'}}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/40 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🔧</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -left-8 animate-float" style={{animationDelay: '4s'}}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/30 to-green-500/10 border-2 border-green-500/40 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">💡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced About Content */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Crafting Digital Experiences with 
                  <span className="text-primary"> Engineering Precision</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate BTech Engineering student with a deep love for technology and innovation. 
                  My journey in engineering has been driven by curiosity and the desire to create solutions 
                  that make a positive impact on the world.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding or studying, you'll find me exploring new technologies, 
                  contributing to open-source projects, or working on creative side projects that 
                  challenge my problem-solving skills and push the boundaries of what's possible.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of technology to transform ideas into reality, and I'm 
                  committed to continuous learning and growth in this ever-evolving field.
                </p>
              </div>

              {/* Professional Qualities Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-4 p-6 rounded-xl bg-card/30 border border-primary/10 hover:border-primary/30 transition-all duration-500 glow-hover hover:transform hover:scale-105 backdrop-blur-sm"
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color} group-hover:rotate-12 transition-transform duration-300`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
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
