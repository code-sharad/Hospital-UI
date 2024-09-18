
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      console.log("Email:", email); // Use the email state variable
      console.log("Password:", password); // Use the password state variable
      // const result = await signIn("credentials", {
      //   redirect: false,
      //   email,
      //   password,
      // });
      // console.log(result);
      // if (result?.error) {
      //   setError(result.error);
      // } else if (result?.ok) {
      //   router.push("/main");
      // }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Login
          </h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to your HMS account
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-center text-sm text-red-500">{error}</div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <a
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
