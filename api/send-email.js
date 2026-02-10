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

        // Compute a base URL for static assets so email clients can fetch images
        const baseUrl = process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`);

        const mailOptions = {
            from: `"Babin.Portfolio" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `🚀 Portfolio Contact: New Message from ${email}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Babin.Portfolio Contact</title>
                    <style>
                        :root {
                            color-scheme: light dark;
                        }
                        @media (prefers-color-scheme: dark) {
                            body { background-color: #0f172a !important; color: #f8fafc !important; }
                            .container { background-color: #1e293b !important; border: 1px solid #334155 !important; }
                            .header { background: linear-gradient(135deg, #4338ca 0%, #6d28d9 100%) !important; }
                            .content-title { color: #f1f5f9 !important; }
                            .info-box { background-color: #334155 !important; border: 1px solid #475569 !important; }
                            .info-label { color: #94a3b8 !important; }
                            .info-value { color: #f1f5f9 !important; }
                            .message-box { background-color: #1e293b !important; border: 1px solid #334155 !important; color: #cbd5e1 !important; }
                            .social-container { background-color: #334155 !important; }
                            .footer { border-top: 1px solid #334155 !important; color: #94a3b8 !important; }
                        }
                        @media (prefers-color-scheme: light) {
                            body { background-color: #f1f5f9 !important; color: #1e293b !important; }
                            .container { background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; background-color: #f1f5f9;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);" class="container">
                        
                        <!-- Premium Header -->
                        <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 48px 32px; text-align: center;" class="header">
                            <img src="https://avatars.githubusercontent.com/KGFCH2" alt="Babin" style="width: 72px; height: 72px; border-radius: 50%; border: 3px solid rgba(255, 255, 255, 0.3); margin-bottom: 16px; background-color: white;">
                            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; text-transform: uppercase;">Babin.Portfolio</h1>
                            <p style="color: rgba(255, 255, 255, 0.8); margin: 4px 0 0 0; font-size: 14px; font-weight: 500;">SYSTEM NOTIFICATION: NEW CONTACT INBOUND</p>
                        </div>

                        <!-- Main Content Body -->
                        <div style="padding: 32px;">
                            
                            <!-- Section: Welcome Message -->
                            <div style="margin-bottom: 32px; text-align: center;">
                                <div style="display: inline-block; padding: 8px 16px; background-color: #e0e7ff; color: #4338ca; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 16px;">NEW INQUIRY</div>
                                <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #1e293b;" class="content-title">📬 Message Received</h2>
                                <p style="margin: 8px 0 0 0; color: #64748b; font-size: 15px;">A visitor has reached out through your professional portfolio website.</p>
                            </div>

                            <!-- Section: Sender Profile -->
                            <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;" class="info-box">
                                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                                    <div style="font-size: 20px; margin-right: 12px;">👤</div>
                                    <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #1e293b;" class="content-title">Sender Identification</h3>
                                </div>
                                
                                <div style="display: grid; gap: 16px;">
                                    <div>
                                        <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;" class="info-label">Contact Email</div>
                                        <div style="font-size: 15px; font-weight: 600; color: #1e293b;" class="info-value">${email}</div>
                                    </div>
                                    <div>
                                        <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;" class="info-label">Submission Timestamp</div>
                                        <div style="font-size: 15px; font-weight: 600; color: #1e293b;" class="info-value">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Section: Message Content -->
                            <div style="margin-bottom: 32px;">
                                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                                    <div style="font-size: 20px; margin-right: 12px;">💬</div>
                                    <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #1e293b;" class="content-title">Communication Details</h3>
                                </div>
                                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;" class="message-box">${message}</div>
                            </div>

                            <!-- Section: Social & Action -->
                            <div style="background-color: #f1f5f9; border-radius: 16px; padding: 32px 24px; text-align: center;" class="social-container">
                                <h3 style="margin: 0 0 20px 0; font-size: 15px; font-weight: 700; color: #475569;" class="content-title">ESTABLISH CONNECTION</h3>
                                <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                                    <a href="https://github.com/KGFCH2" style="display: flex; align-items: center; gap: 8px; background-color: #1e293b; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                                        <img src="${baseUrl}/Logo/GitHub.svg" alt="GitHub" style="width: 18px; height: 18px; filter: invert(1);">
                                        GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/in/babinbid123" style="display: flex; align-items: center; gap: 8px; background-color: #0077b5; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                                        <img src="${baseUrl}/Logo/LinkedIn.svg" alt="LinkedIn" style="width: 18px; height: 18px;">
                                        LinkedIn
                                    </a>
                                </div>
                                <div style="margin-top: 24px;">
                                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 15px; font-weight: 700; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">🚀 FORMULATE RESPONSE</a>
                                </div>
                            </div>
                        </div>

                        <!-- Footer Section -->
                        <div style="padding: 24px; text-align: center; border-top: 1px solid #f1f5f9; color: #94a3b8; font-size: 12px;" class="footer">
                            <p style="margin: 0;">Automated Dispatch from <strong>Babin.Portfolio v2.0</strong></p>
                            <p style="margin: 4px 0 0 0;">&copy; ${new Date().getFullYear()} Babin Kumar Bid. All systems operational.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
🚀 BABIN.PORTFOLIO - NEW CONTACT MESSAGE

👤 Sender Information:
📧 Email: ${email}
🕒 Date: ${new Date().toLocaleString()}

💬 Message Content:
${message}

🌐 Connect With Me:
🔗 GitHub: https://github.com/KGFCH2
🔗 LinkedIn: https://www.linkedin.com/in/babinbid123

---
Email generated via professional portfolio system.
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