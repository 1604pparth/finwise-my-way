import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, Trophy, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the recommended percentage of income to save each month?",
      options: [
        "5-10%",
        "20%",
        "30%",
        "50%"
      ],
      correct: 1,
      explanation: "Financial experts generally recommend saving 20% of your income each month. This follows the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.",
      difficulty: "easy",
      category: "Saving"
    },
    {
      id: 2,
      question: "What is compound interest?",
      options: [
        "Interest paid on the original amount only",
        "Interest paid on both the original amount and previously earned interest",
        "A type of bank fee",
        "Interest that decreases over time"
      ],
      correct: 1,
      explanation: "Compound interest is earning interest on both your original money and the interest you've already earned. This creates a snowball effect that helps your money grow faster over time.",
      difficulty: "medium",
      category: "Investing"
    },
    {
      id: 3,
      question: "Which of these should you pay off first?",
      options: [
        "Student loans with 3% interest",
        "Credit cards with 18% interest",
        "Mortgage with 4% interest",
        "Car loan with 5% interest"
      ],
      correct: 1,
      explanation: "You should generally pay off high-interest debt first. Credit cards typically have the highest interest rates, so paying them off saves you the most money in the long run.",
      difficulty: "medium",
      category: "Debt Management"
    },
    {
      id: 4,
      question: "What is an emergency fund for?",
      options: [
        "Buying luxury items",
        "Investing in stocks",
        "Covering unexpected expenses",
        "Taking vacations"
      ],
      correct: 2,
      explanation: "An emergency fund is money set aside to cover unexpected expenses like medical bills, car repairs, or job loss. It helps you avoid going into debt when life surprises you.",
      difficulty: "easy",
      category: "Emergency Planning"
    },
    {
      id: 5,
      question: "What does diversification mean in investing?",
      options: [
        "Putting all money in one stock",
        "Spreading investments across different assets",
        "Only investing in your home country",
        "Buying and selling frequently"
      ],
      correct: 1,
      explanation: "Diversification means spreading your investments across different types of assets, industries, and regions. This helps reduce risk because if one investment performs poorly, others might do well.",
      difficulty: "hard",
      category: "Investing"
    }
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmitAnswer = () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (answerIndex === currentQ.correct) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setAnswers([]);
    setShowExplanation(false);
    setQuizCompleted(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent! You're a financial rockstar! 🌟";
    if (percentage >= 60) return "Great job! You're on the right track! 📈";
    if (percentage >= 40) return "Good effort! Keep learning and you'll improve! 💪";
    return "Don't worry, everyone starts somewhere! Keep practicing! 🌱";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
                  <CardDescription>
                    {getScoreMessage()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Score Display */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {score} / {questions.length}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {Math.round((score / questions.length) * 100)}% Correct
                    </div>
                  </div>

                  {/* Results Breakdown */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Results Breakdown:</h3>
                    {questions.map((question, index) => (
                      <div key={question.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            Question {index + 1}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {question.category}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getDifficultyColor(question.difficulty)}>
                            {question.difficulty}
                          </Badge>
                          {answers[index] === question.correct ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button onClick={handleRestartQuiz} variant="outline" className="flex-1">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>
                    <Link to="/dashboard" className="flex-1">
                      <Button className="w-full">
                        Back to Dashboard
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Financial Knowledge Quiz</h1>
              <p className="text-muted-foreground">Test your financial literacy and learn as you go</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getDifficultyColor(currentQ.difficulty)}>
                    {currentQ.difficulty}
                  </Badge>
                  <Badge variant="outline">
                    {currentQ.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-relaxed">
                  {currentQ.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!showExplanation ? (
                  <>
                    {/* Answer Options */}
                    <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                      {currentQ.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    {/* Submit Button */}
                    <Button 
                      onClick={handleSubmitAnswer}
                      disabled={!selectedAnswer}
                      className="w-full"
                    >
                      Submit Answer
                    </Button>
                  </>
                ) : (
                  <>
                    {/* Show Results */}
                    <div className="space-y-4">
                      {/* Correct Answer */}
                      <div className={`p-4 rounded-lg border-2 ${
                        parseInt(selectedAnswer) === currentQ.correct 
                          ? "border-green-500 bg-green-50" 
                          : "border-red-500 bg-red-50"
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          {parseInt(selectedAnswer) === currentQ.correct ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className="font-medium">
                            {parseInt(selectedAnswer) === currentQ.correct ? "Correct!" : "Incorrect"}
                          </span>
                        </div>
                        <p className="text-sm">
                          The correct answer is: <strong>{currentQ.options[currentQ.correct]}</strong>
                        </p>
                      </div>

                      {/* Explanation */}
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-blue-900">Explanation</span>
                        </div>
                        <p className="text-sm text-blue-800">
                          {currentQ.explanation}
                        </p>
                      </div>
                    </div>

                    {/* Next Button */}
                    <Button onClick={handleNextQuestion} className="w-full">
                      {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;