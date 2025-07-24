import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isLandingPage = location.pathname === "/";

  const navItems = isLandingPage ? [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ] : [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Chat", href: "/chat" },
    { label: "Quiz", href: "/quiz" },
    { label: "Profile", href: "/profile" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary"></div>
            <span className="text-xl font-bold text-foreground">FinWise Local</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              isLandingPage ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-muted-foreground hover:text-foreground transition-colors duration-200 ${
                    location.pathname === item.href ? "text-foreground font-medium" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {isLandingPage ? (
              <>
                <Button variant="ghost">
                  Sign In
                </Button>
                <Link to="/onboarding">
                  <Button variant="hero">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/profile">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                isLandingPage ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 ${
                      location.pathname === item.href ? "text-foreground font-medium" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                {isLandingPage ? (
                  <>
                    <Button variant="ghost" className="justify-start">
                      Sign In
                    </Button>
                    <Link to="/onboarding">
                      <Button variant="hero">
                        Get Started
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Link to="/profile">
                    <Button variant="outline" className="justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;