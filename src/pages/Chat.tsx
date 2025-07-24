import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User, ArrowLeft, Lightbulb, DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your FinWise AI assistant. I'm here to help you learn about personal finance in a way that makes sense for your location and goals. What would you like to know about today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    { icon: PiggyBank, text: "How can I start saving money?", category: "Saving" },
    { icon: DollarSign, text: "What's a budget and how do I make one?", category: "Budgeting" },
    { icon: TrendingUp, text: "When should I start investing?", category: "Investing" },
    { icon: Lightbulb, text: "How can I increase my income?", category: "Income" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      let response = "";
      
      if (userMessage.toLowerCase().includes("save") || userMessage.toLowerCase().includes("saving")) {
        response = "Great question! Starting to save is one of the smartest financial moves you can make. Here are some beginner-friendly tips:\n\n1. **Start small** - Even saving $5-10 per week builds the habit\n2. **Automate it** - Set up automatic transfers to a savings account\n3. **Use the 50/30/20 rule** - 50% needs, 30% wants, 20% savings\n4. **Track your progress** - Seeing your savings grow motivates you to continue\n\nWhat's your current situation? Do you have a bank account set up for saving?";
      } else if (userMessage.toLowerCase().includes("budget")) {
        response = "A budget is simply a plan for your money! It helps you see where your money goes and ensures you're spending on what matters most to you.\n\nHere's how to create your first budget:\n\n1. **List your income** - All money coming in monthly\n2. **Track expenses** - Write down everything you spend for a week\n3. **Categorize spending** - Group expenses (food, transport, entertainment)\n4. **Set limits** - Decide how much to spend in each category\n5. **Review regularly** - Adjust as needed\n\nWould you like me to help you think through any specific category? Many people find food and transportation are their biggest variable expenses.";
      } else if (userMessage.toLowerCase().includes("invest")) {
        response = "Investing can seem intimidating, but it's really about making your money work for you over time! Here's when and how to start:\n\n**When to start:**\n- After you have some emergency savings (even $500-1000)\n- When you have steady income\n- When you understand the basics\n\n**Where to begin:**\n1. **Learn the basics** - Understand risk vs. reward\n2. **Start small** - Many apps let you invest with just $1-5\n3. **Diversify** - Don't put all money in one place\n4. **Think long-term** - Investing works best over years, not days\n\nWhat's your biggest concern about investing? Many beginners worry about losing money, which is completely normal!";
      } else {
        response = "That's a thoughtful question! Personal finance can feel overwhelming, but remember - every expert started as a beginner. The fact that you're here asking questions shows you're already on the right path.\n\nIs there a specific financial goal you're working toward? Whether it's saving for something special, getting out of debt, or just feeling more confident with money, I'm here to help you break it down into manageable steps.\n\nWhat would be most helpful for your situation right now?";
      }

      const aiMessage: Message = {
        id: Date.now().toString(),
        content: response,
        sender: "ai",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAIResponse(inputValue);
    setInputValue("");
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-6 h-[calc(100vh-6rem)] flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">FinWise AI Chat</h1>
              <p className="text-muted-foreground">Get personalized financial guidance anytime</p>
            </div>
          </div>

          {/* Messages Container */}
          <Card className="flex-1 flex flex-col">
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "ai" && (
                      <Avatar className="w-8 h-8 mt-1">
                        <AvatarFallback className="bg-gradient-primary text-white">
                          <Bot className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    
                    <div className={`max-w-[70%] ${message.sender === "user" ? "order-first" : ""}`}>
                      <div
                        className={`rounded-lg p-3 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground ml-auto"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    {message.sender === "user" && (
                      <Avatar className="w-8 h-8 mt-1">
                        <AvatarFallback className="bg-gradient-secondary text-white">
                          <User className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <Avatar className="w-8 h-8 mt-1">
                      <AvatarFallback className="bg-gradient-primary text-white">
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted text-foreground rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions (show when conversation is short) */}
              {messages.length <= 2 && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground mb-3">Try asking about:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start text-left h-auto p-3"
                        onClick={() => handleSuggestedQuestion(question.text)}
                      >
                        <question.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{question.text}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about personal finance..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  FinWise AI provides educational information. Always consult with financial professionals for personalized advice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;