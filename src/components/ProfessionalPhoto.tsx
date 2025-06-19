
import React from 'react';
import { Download, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const ProfessionalPhoto = () => {
  return (
    <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 glow-hover">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Professional Profile</h3>
        <p className="text-muted-foreground">BTech Engineering Student</p>
      </div>
      
      {/* Professional Photo */}
      <div className="relative w-64 h-80 mx-auto mb-6">
        <div className="w-full h-full rounded-xl overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary/60 transition-all duration-500 transform hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
            alt="Professional Portrait" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        {/* Status Badge */}
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
          Available
        </div>
      </div>

      {/* Professional Details */}
      <div className="space-y-4 text-sm">
        <div className="flex items-center space-x-3 text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Delhi, India</span>
        </div>
        <div className="flex items-center space-x-3 text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>Expected Graduation: 2025</span>
        </div>
        <div className="flex items-center space-x-3 text-muted-foreground">
          <Phone className="w-4 h-4 text-primary" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-3 text-muted-foreground">
          <Mail className="w-4 h-4 text-primary" />
          <span>john.doe@email.com</span>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-6">
        <button className="w-full group px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 glow-hover transform hover:scale-105 shadow-lg">
          <span className="flex items-center justify-center space-x-2">
            <Download className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Download Resume</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfessionalPhoto;
