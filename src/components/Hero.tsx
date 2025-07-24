import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Brain, Volume2, RotateCcw } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20 animate-float"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 rounded-full bg-white/15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                FinWise Local
                <span className="block text-3xl lg:text-4xl font-light text-white/90 mt-2">
                  Your Financial Ally, Right Where You Are
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Financial education that speaks your language, reflects your culture, 
                and understands your reality. AI-powered learning built just for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Culturally Smart</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">AI Teaching</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Volume2 className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Voice Support</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Evolves With You</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Diverse people engaging with financial technology across different cultures"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-card animate-float">
              <div className="text-sm font-semibold text-primary">96% Success Rate</div>
              <div className="text-xs text-muted-foreground">Learning Completion</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-lg p-4 shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-sm font-semibold">50+ Languages</div>
              <div className="text-xs opacity-80">Supported Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;