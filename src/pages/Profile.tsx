import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  User, 
  Globe, 
  Bell, 
  Shield, 
  Award, 
  Target,
  BookOpen,
  MessageCircle,
  Trophy,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    country: "india",
    language: "english",
    experience: "intermediate",
    goals: "saving",
    notifications: {
      dailyReminders: true,
      weeklyProgress: true,
      achievements: true,
      marketingEmails: false
    }
  });

  const stats = {
    lessonsCompleted: 23,
    currentStreak: 7,
    totalPoints: 1250,
    achievements: 5,
    joinDate: "January 2024"
  };

  const achievements = [
    { id: 1, title: "First Week Complete", description: "Completed your first week of learning", earned: true, date: "2024-01-08" },
    { id: 2, title: "Budget Master", description: "Completed 5 budget-related lessons", earned: true, date: "2024-01-15" },
    { id: 3, title: "Consistent Learner", description: "Maintained a 7-day learning streak", earned: true, date: "2024-01-22" },
    { id: 4, title: "Quiz Champion", description: "Scored 80% or higher on 5 quizzes", earned: true, date: "2024-01-28" },
    { id: 5, title: "AI Chat Explorer", description: "Had 10 conversations with FinWise AI", earned: true, date: "2024-02-05" },
    { id: 6, title: "Savings Champion", description: "Complete all savings-related content", earned: false, date: null },
    { id: 7, title: "Investment Explorer", description: "Complete investment basics track", earned: false, date: null },
    { id: 8, title: "Month Milestone", description: "Learn consistently for 30 days", earned: false, date: null }
  ];

  const handleSave = () => {
    // Simulate saving profile
    toast({
      title: "Profile Updated",
      description: "Your profile settings have been saved successfully.",
    });
    setIsEditing(false);
  };

  const handleNotificationChange = (key: keyof typeof profileData.notifications) => {
    setProfileData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

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
              <h1 className="text-2xl font-bold text-foreground">Profile & Settings</h1>
              <p className="text-muted-foreground">Manage your account and learning preferences</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <CardTitle>Personal Information</CardTitle>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  {isEditing && (
                    <Button onClick={handleSave} className="w-full">
                      Save Changes
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Learning Preferences */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <CardTitle>Learning Preferences</CardTitle>
                  </div>
                  <CardDescription>
                    Customize your learning experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Country/Region</Label>
                      <Select value={profileData.country} onValueChange={(value) => setProfileData(prev => ({ ...prev, country: value }))}>
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
                      <Label>Preferred Language</Label>
                      <Select value={profileData.language} onValueChange={(value) => setProfileData(prev => ({ ...prev, language: value }))}>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Experience Level</Label>
                      <Select value={profileData.experience} onValueChange={(value) => setProfileData(prev => ({ ...prev, experience: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="basic">Some Knowledge</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Primary Goal</Label>
                      <Select value={profileData.goals} onValueChange={(value) => setProfileData(prev => ({ ...prev, goals: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saving">Start saving money</SelectItem>
                          <SelectItem value="budgeting">Learn budgeting</SelectItem>
                          <SelectItem value="investing">Understand investing</SelectItem>
                          <SelectItem value="debt">Manage debt</SelectItem>
                          <SelectItem value="business">Start a business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    <CardTitle>Notification Settings</CardTitle>
                  </div>
                  <CardDescription>
                    Choose what notifications you'd like to receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Daily Learning Reminders</Label>
                        <p className="text-sm text-muted-foreground">Get reminded to continue your learning journey</p>
                      </div>
                      <Switch 
                        checked={profileData.notifications.dailyReminders}
                        onCheckedChange={() => handleNotificationChange('dailyReminders')}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Weekly Progress Reports</Label>
                        <p className="text-sm text-muted-foreground">See your learning progress and achievements</p>
                      </div>
                      <Switch 
                        checked={profileData.notifications.weeklyProgress}
                        onCheckedChange={() => handleNotificationChange('weeklyProgress')}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Achievement Notifications</Label>
                        <p className="text-sm text-muted-foreground">Celebrate when you unlock new achievements</p>
                      </div>
                      <Switch 
                        checked={profileData.notifications.achievements}
                        onCheckedChange={() => handleNotificationChange('achievements')}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Marketing Emails</Label>
                        <p className="text-sm text-muted-foreground">Tips, updates, and special offers</p>
                      </div>
                      <Switch 
                        checked={profileData.notifications.marketingEmails}
                        onCheckedChange={() => handleNotificationChange('marketingEmails')}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Learning Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Learning Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Lessons Completed</span>
                    </div>
                    <Badge variant="secondary">{stats.lessonsCompleted}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Current Streak</span>
                    </div>
                    <Badge variant="secondary">{stats.currentStreak} days</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Total Points</span>
                    </div>
                    <Badge variant="secondary">{stats.totalPoints.toLocaleString()}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Achievements</span>
                    </div>
                    <Badge variant="secondary">{stats.achievements}</Badge>
                  </div>
                  
                  <Separator />
                  
                  <div className="text-center pt-2">
                    <p className="text-sm text-muted-foreground">
                      Member since {stats.joinDate}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Achievements
                  </CardTitle>
                  <CardDescription>
                    {achievements.filter(a => a.earned).length} of {achievements.length} unlocked
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.slice(0, 6).map((achievement) => (
                      <div 
                        key={achievement.id} 
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          achievement.earned ? "bg-accent/50" : "opacity-50"
                        }`}
                      >
                        <div className={`text-xl ${achievement.earned ? "" : "grayscale"}`}>
                          {achievement.earned ? "🏆" : "🔒"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${
                            achievement.earned ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {achievement.title}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {achievement.description}
                          </p>
                          {achievement.earned && achievement.date && (
                            <p className="text-xs text-muted-foreground">
                              Earned {new Date(achievement.date).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {achievements.length > 6 && (
                      <Button variant="outline" size="sm" className="w-full">
                        View All Achievements
                      </Button>
                    )}
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

export default Profile;