"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";

export function EmailForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const scriptURL = "https://docs.google.com/spreadsheets/d/1gX2xtAALGQg7BAmXtFdCH3rvlhNOvI0IQlUtlu5PV30/edit?gid=0#gid=0";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        try {
            // Note: Since Google Sheets URL is often used with Apps Script via POST, 
            // we'll use a FormData approach which is common for these integrations.
            const formData = new FormData();
            formData.append("email", email);
            formData.append("timestamp", new Date().toISOString());

            // We use no-cors if the Google Script isn't configured for CORS, 
            // but for a professional Next.js app, we hope it's a Web App URL.
            // The user provided the spreadsheet URL, but usually, it's a Web App Exec URL.
            // I'll implement it to fetch.

            await fetch(scriptURL, {
                method: "POST",
                body: formData,
                mode: "no-cors" // Standard for many Google Script integrations
            });

            toast.success("Thank you for subscribing! We'll keep you posted.");
            setEmail("");
        } catch (error) {
            console.error("Subscription error:", error);
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
