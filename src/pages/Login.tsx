import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/portal");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CR</span>
            </div>
            <span className="font-semibold text-xl text-foreground">Co-Repairs</span>
          </Link>
          <h1 className="text-2xl font-semibold text-foreground mb-2">Partner Portal</h1>
          <p className="text-muted-foreground">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="bg-card rounded-2xl border border-border shadow-soft p-8 space-y-6">
          <div className="bg-accent/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Demo Mode</span> — Authentication is disabled. Click login to enter.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="partner@brand.com"
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-background"
            />
          </div>

          <Button type="submit" variant="portal" size="lg" className="w-full">
            Login (Demo)
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            <Link to="/" className="text-primary hover:underline">
              ← Back to website
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
