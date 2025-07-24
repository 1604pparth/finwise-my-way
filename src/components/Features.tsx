import { Card } from "@/components/ui/card";
import { Globe, Brain, Volume2, RotateCcw, MessageSquare, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Culturally Smart & Hyperlocal",
      description: "From taxes in Tamil Nadu to mobile banking in Nigeria, our AI localizes content to your region, language, and economy.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI That Teaches Like a Friend",
      description: "Chat with our assistant, take fun quizzes, and get nudges that help you grow—your pace, your way.",
      color: "text-secondary"
    },
    {
      icon: Volume2,
      title: "Speak. Hear. Understand.",
      description: "Regional voiceovers, accessible design, and multi-script support make learning feel natural and inclusive.",
      color: "text-accent"
    },
    {
      icon: RotateCcw,
      title: "We Evolve With You",
      description: "The more you engage, the smarter FinWise becomes—adjusting lessons as you learn and life changes.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Interactive Learning",
      description: "Engage with personalized scenarios, real-world examples, and community discussions that matter to you.",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Track Your Progress",
      description: "Celebrate milestones, earn achievements, and see your financial knowledge grow with detailed progress tracking.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Features You'll Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how FinWise Local combines cutting-edge technology with cultural understanding 
            to create a truly personalized financial learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-${feature.color.split('-')[1]}/20 to-${feature.color.split('-')[1]}/10 flex items-center justify-center`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;