"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { BACKEND_URL } from "@/app/config";
import axios from "axios";

export default function SignInComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (password.trim().length < 8) {
            toast.warning("Password length must be at least 8 characters");
            return;
        }

        const loadingToastId = toast.loading("Signing in...");

        try {
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/signin`,
                { email, password },
                { withCredentials: true }
            );

            toast.dismiss(loadingToastId);

            if (response.data.message && response.data.message !== "User signed in successfully") {
                toast.warning(response.data.message);
                return;
            }

            toast.success("Signed in successfully");
            router.push("/dashboard");
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
                    <h1 className="text-4xl font-bold mb-2">Sign in to your account</h1>
                    <p className="text-muted-foreground">
                        Enter your credentials to access your account
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-md font-medium">
                                Password
                            </label>

                        </div>
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
                                placeholder="Password must be 8  at least character"
                                required
                            />
                        </div>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-primary hover:underline ml-auto sm:ml-20 md:ml-40 lg:ml-60 xl:ml-80"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"

                        className="w-full flex items-center justify-center py-3 bg-black text-white px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-md text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/"
                            className="text-primary hover:underline font-medium"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}