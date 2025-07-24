import { Card } from "@/components/ui/card";
import { Zap, Heart, Shield, Cpu } from "lucide-react";

const TechSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                🚀 Powered by Technology. Grounded in Empathy.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Built with cutting-edge LLMs, NLP, and local knowledge graphs—delivered through 
                scalable cloud tech—but what really matters? You feeling seen, heard, and empowered.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border/50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Advanced AI</h3>
                <p className="text-sm text-muted-foreground">LLMs & NLP for intelligent, contextual learning</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border/50">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Local Knowledge</h3>
                <p className="text-sm text-muted-foreground">Region-specific financial data and cultural insights</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border/50">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Scalable Cloud</h3>
                <p className="text-sm text-muted-foreground">Fast, reliable, and globally accessible platform</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border/50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Human-Centered</h3>
                <p className="text-sm text-muted-foreground">Empathy-driven design that puts you first</p>
              </Card>
            </div>

            <div className="mt-16 p-8 bg-gradient-primary rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                FinWise Local. Because money advice should feel like it was made just for you.
              </h3>
              <p className="text-lg opacity-90">
                Start your journey today—wherever you are, however you learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;