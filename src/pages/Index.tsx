import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, Shield, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl gradient-primary mb-6 shadow-glow">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to TaskFlow
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern, scalable task management platform with complete authentication and dashboard functionality
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate("/auth")} size="lg" className="gradient-primary shadow-glow">
              Get Started
            </Button>
            <Button onClick={() => navigate("/auth")} variant="outline" size="lg">
              Sign In
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
          <div className="text-center p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow bg-card animate-in">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
            <p className="text-muted-foreground">
              JWT-based authentication with email verification and password hashing
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow bg-card animate-in">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Task Management</h3>
            <p className="text-muted-foreground">
              Complete CRUD operations with search, filter, and status tracking
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow bg-card animate-in">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Built to Scale</h3>
            <p className="text-muted-foreground">
              Modern architecture with React, TypeScript, and backend integration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
