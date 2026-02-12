"use server";

export async function subscribeEmail(email: string) {
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    console.log("Attempting to subscribe:", email);
    console.log("Script URL defined:", !!scriptURL);

    if (!scriptURL) {
        console.error("GOOGLE_SCRIPT_URL is not defined in environment variables");
        return { success: false, error: "Configuration error" };
    }

    try {
        console.log("Sending request to Google Apps Script...");
        const response = await fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                source: "Landing Page",
                timestamp: new Date().toISOString(),
            }),
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            const text = await response.text();
            console.error("Apps Script Error Response:", response.status, text);
            return { success: false, error: `Server error: ${response.status}` };
        }

        const data = await response.json();
        console.log("Response data:", data);

        if (data.status === "success") {
            return { success: true };
        } else {
            console.error("Script returned failure status:", data);
            return { success: false, error: data.message || "Unknown error from script" };
        }
    } catch (error) {
        console.error("Submission exception:", error);
        return { success: false, error: error instanceof Error ? error.message : "Network error" };
    }
}
