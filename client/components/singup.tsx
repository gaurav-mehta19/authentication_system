"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";

export default function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); 
  
    if (password.trim().length < 8) {
      toast.warning("Password length must be at least 8 characters");
      return;
    }
  
    const loadingToastId = toast.loading("Creating account...");
  
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/signup`,
        { email, password },
        { withCredentials: true }
      );
  
      toast.dismiss(loadingToastId);
  
      if (response.data.message && response.data.message !== "User created successfully") {
        toast.warning(response.data.message);
        return;
      }
  
      toast.success("Account created successfully");
      router.push("/signin");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.dismiss(loadingToastId);
  
      if (error.response && error.response.data && error.response.data.message) {
        toast.warning(error.response.data.message);
      } else {
        toast.warning("An error occurred. Please try again later");
      }
    }
  
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Create your account</h1>
          <p className="text-muted-foreground">
            Enter your details to get started with our platform
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-md font-medium">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-md font-medium">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Password must be at least 8 characters"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 bg-black text-white px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-md text-muted-foreground">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
