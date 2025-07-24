import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  MessageCircle, 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar,
  Brain,
  Star,
  Play,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const learningProgress = 65;
  const currentStreak = 7;
  const totalPoints = 1250;

  const recentLessons = [
    { id: 1, title: "Understanding Compound Interest", progress: 100, type: "completed" },
    { id: 2, title: "Building Your First Budget", progress: 75, type: "in-progress" },
    { id: 3, title: "Emergency Fund Basics", progress: 0, type: "locked" }
  ];

  const achievements = [
    { id: 1, title: "First Week Complete", icon: "🎯", earned: true },
    { id: 2, title: "Budget Master", icon: "💰", earned: true },
    { id: 3, title: "Savings Champion", icon: "🏆", earned: false },
    { id: 4, title: "Investment Explorer", icon: "📈", earned: false }
  ];

  const todaysTasks = [
    { id: 1, title: "Complete daily quiz", completed: false },
    { id: 2, title: "Track today's expenses", completed: true },
    { id: 3, title: "Chat with FinWise AI", completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, Sarah! 👋
            </h1>
            <p className="text-muted-foreground">
              You're on a {currentStreak}-day learning streak. Keep it up!
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Learning Progress</p>
                    <p className="text-2xl font-bold text-foreground">{learningProgress}%</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <Progress value={learningProgress} className="mt-4" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
                    <p className="text-2xl font-bold text-foreground">{currentStreak} days</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Personal best: 12 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Points</p>
                    <p className="text-2xl font-bold text-foreground">{totalPoints.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">+150 this week</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Continue Learning */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Continue Learning
                  </CardTitle>
                  <CardDescription>
                    Pick up where you left off
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentLessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{lesson.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={lesson.progress} className="flex-1 h-2" />
                          <span className="text-sm text-muted-foreground">{lesson.progress}%</span>
                        </div>
                      </div>
                      <Button 
                        variant={lesson.type === "completed" ? "outline" : "default"}
                        size="sm"
                        className="ml-4"
                        disabled={lesson.type === "locked"}
                      >
                        {lesson.type === "completed" ? "Review" : lesson.type === "locked" ? "Locked" : "Continue"}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Jump into your favorite learning activities
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/chat" className="block">
                    <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                      <MessageCircle className="w-6 h-6" />
                      <span>Chat with AI</span>
                    </Button>
                  </Link>
                  <Link to="/quiz" className="block">
                    <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                      <Brain className="w-6 h-6" />
                      <span>Take Quiz</span>
                    </Button>
                  </Link>
                  <Link to="/lessons" className="block">
                    <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                      <BookOpen className="w-6 h-6" />
                      <span>Browse Lessons</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Today's Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Today's Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {todaysTasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        task.completed ? "bg-success border-success" : "border-muted-foreground"
                      }`}>
                        {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`text-sm ${
                        task.completed ? "line-through text-muted-foreground" : "text-foreground"
                      }`}>
                        {task.title}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3">
                      <div className={`text-2xl ${achievement.earned ? "" : "grayscale opacity-50"}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${achievement.earned ? "text-foreground" : "text-muted-foreground"}`}>
                          {achievement.title}
                        </p>
                        {achievement.earned && (
                          <Badge variant="secondary" className="text-xs">
                            Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Weekly Goal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    This Week's Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground mb-2">5 of 7</p>
                    <p className="text-sm text-muted-foreground mb-4">lessons completed</p>
                    <Progress value={(5/7) * 100} className="mb-4" />
                    <p className="text-xs text-muted-foreground">
                      Complete 2 more lessons to reach your weekly goal!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;