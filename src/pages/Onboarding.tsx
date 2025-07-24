import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, MapPin, Target, Brain, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    country: "",
    language: "",
    goals: "",
    experience: "",
    preferences: ""
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and redirect to dashboard
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Tell us about yourself</CardTitle>
              <CardDescription>
                We'll personalize your experience based on where you are
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="brazil">Brazil</SelectItem>
                    <SelectItem value="philippines">Philippines</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select value={formData.language} onValueChange={(value) => updateFormData("language", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="portuguese">Portuguese</SelectItem>
                    <SelectItem value="swahili">Swahili</SelectItem>
                    <SelectItem value="tagalog">Tagalog</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle>What are your financial goals?</CardTitle>
              <CardDescription>
                Choose what matters most to you right now
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={formData.goals} 
                onValueChange={(value) => updateFormData("goals", value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="saving" id="saving" />
                  <Label htmlFor="saving" className="flex-1 cursor-pointer">
                    Start saving money regularly
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="budgeting" id="budgeting" />
                  <Label htmlFor="budgeting" className="flex-1 cursor-pointer">
                    Learn to budget and track expenses
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="investing" id="investing" />
                  <Label htmlFor="investing" className="flex-1 cursor-pointer">
                    Understand investing basics
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="debt" id="debt" />
                  <Label htmlFor="debt" className="flex-1 cursor-pointer">
                    Manage and reduce debt
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="flex-1 cursor-pointer">
                    Start or grow a business
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle>What's your experience level?</CardTitle>
              <CardDescription>
                This helps us tailor the content just right for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={formData.experience} 
                onValueChange={(value) => updateFormData("experience", value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Complete Beginner</div>
                      <div className="text-sm text-muted-foreground">I'm just starting to learn about money</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="basic" id="basic" />
                  <Label htmlFor="basic" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Some Knowledge</div>
                      <div className="text-sm text-muted-foreground">I know basics but want to learn more</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Intermediate</div>
                      <div className="text-sm text-muted-foreground">I manage money but want to improve</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Advanced</div>
                      <div className="text-sm text-muted-foreground">I want specialized knowledge</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Almost done!</CardTitle>
              <CardDescription>
                How would you like to learn?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={formData.preferences} 
                onValueChange={(value) => updateFormData("preferences", value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="chat" id="chat" />
                  <Label htmlFor="chat" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Interactive Chat</div>
                      <div className="text-sm text-muted-foreground">Ask questions and get instant answers</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="lessons" id="lessons" />
                  <Label htmlFor="lessons" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Structured Lessons</div>
                      <div className="text-sm text-muted-foreground">Step-by-step learning modules</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="quizzes" id="quizzes" />
                  <Label htmlFor="quizzes" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Fun Quizzes</div>
                      <div className="text-sm text-muted-foreground">Learn through interactive challenges</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value="mixed" id="mixed" />
                  <Label htmlFor="mixed" className="flex-1 cursor-pointer">
                    <div>
                      <div className="font-medium">Mix of Everything</div>
                      <div className="text-sm text-muted-foreground">I want to try all learning styles</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="flex justify-center mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            className="flex items-center gap-2"
            variant="hero"
          >
            {currentStep === totalSteps ? "Complete Setup" : "Continue"}
            {currentStep !== totalSteps && <ArrowRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;