import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

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
            },
            // Add additional Gmail-specific settings
            secure: true,
            tls: {
                rejectUnauthorized: false
            }
        });

        console.log("Verifying transporter...");
        await transporter.verify();

        const mailOptions = {
            from: `"Babin.Portfolio" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: New Message from ${email}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                    <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #2563eb;">
                        <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Babin.Portfolio</h1>
                        <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">Professional Portfolio Contact</p>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">New Contact Message</h2>
                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
                            <p style="margin: 0; color: #555; font-size: 14px;"><strong>From:</strong> ${email}</p>
                            <p style="margin: 5px 0 0 0; color: #555; font-size: 14px;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                        </div>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #333; margin: 0 0 10px 0; font-size: 16px;">Message:</h3>
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>

                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
                        <p style="margin: 0; color: #666; font-size: 12px;">
                            This message was sent through Babin.Portfolio contact form.<br>
                            Please reply directly to the sender's email address above.
                        </p>
                    </div>
                </div>
            `,
            text: `
Babin.Portfolio - New Contact Message

From: ${email}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
This message was sent through Babin.Portfolio contact form.
Please reply directly to the sender's email address.
            `,
            replyTo: email
        };

        console.log("Sending email...");
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully");
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);

        // Provide more specific error messages
        let errorMessage = "Failed to send email";
        if (error.code === 'EAUTH') {
            errorMessage = "Authentication failed. Please check your email credentials.";
        } else if (error.code === 'ECONNREFUSED') {
            errorMessage = "Could not connect to email server. Please try again later.";
        } else if (error.responseCode === 535) {
            errorMessage = "Email authentication failed. Please check your Gmail app password.";
        }

        res.status(500).json({
            error: errorMessage,
            details: process.env.NODE_ENV === "development" ? error.message : "Internal server error"
        });
    }
}