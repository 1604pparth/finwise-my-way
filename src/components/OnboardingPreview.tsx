import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Target, TrendingUp, Users } from "lucide-react";

const OnboardingPreview = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Tell us where you are",
      description: "Location helps us understand your local financial landscape",
      example: "Mumbai, India"
    },
    {
      icon: Target,
      title: "Share your goals",
      description: "What financial milestone are you working towards?",
      example: "Saving for a home"
    },
    {
      icon: TrendingUp,
      title: "Your experience level",
      description: "We'll match content to your comfort with money topics",
      example: "Beginner friendly"
    },
    {
      icon: Users,
      title: "Learning preferences",
      description: "How do you like to learn and engage with content?",
      example: "Interactive & Visual"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            💬 Tell Us Who You Are — We'll Shape Your Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you join FinWise, we gently guide you through simple questions about your location, 
            goals, and comfort with money and tech. Your journey is yours alone—and we tailor every step.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {step.example}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 p-6 bg-muted/50 rounded-2xl">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Ready to start your personalized journey?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Whether you're saving for your first scooter or managing informal credit, we're here for you.
                </p>
              </div>
              <Button variant="hero" size="lg" className="shrink-0">
                Begin Onboarding
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingPreview;