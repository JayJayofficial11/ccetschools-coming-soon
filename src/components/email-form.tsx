"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { subscribeEmail } from "@/app/actions";

export function EmailForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        console.log("Submitting email:", email); // Debug log

        try {
            console.log("Calling server action..."); // Debug log
            const result = await subscribeEmail(email);
            console.log("Server action result:", result); // Debug log

            if (result.success) {
                toast.success("Thank you for subscribing! We'll keep you posted.");
                setEmail("");
            } else {
                console.error("Subscription failed:", result.error);
                toast.error(result.error || "Subscription failed. Please try again later.");
            }
        } catch (error) {
            console.error("Client-side subscription error:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 h-14 px-6 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-zinc-900 dark:border-zinc-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button
                type="submit"
                size="lg"
                className="h-14 rounded-2xl sm:w-auto"
                isLoading={isLoading}
            >
                <span className="flex items-center gap-2">
                    Notify Me <Send className="h-4 w-4" />
                </span>
            </Button>
        </form>
    );
}
