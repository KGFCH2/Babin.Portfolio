import nodemailer from "nodemailer";

export default async function handler(req, res) {
    console.log("API called with method:", req.method);
    console.log("Environment variables:", {
        EMAIL_USER: process.env.EMAIL_USER ? "SET" : "NOT SET",
        EMAIL_PASS: process.env.EMAIL_PASS ? "SET" : "NOT SET"
    });

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { email, message } = req.body;
    console.log("Request body:", { email, message });

    if (!email || !message) {
        return res.status(400).json({ error: "Email and message are required" });
    }

    try {
        console.log("Creating transporter...");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        console.log("Verifying transporter...");
        await transporter.verify();

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: "New Message from Website",
            text: message,
            replyTo: email
        };

        console.log("Sending email...");
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully");
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({
            error: "Failed to send email",
            details: process.env.NODE_ENV === "development" ? error.message : "Internal server error"
        });
    }
}