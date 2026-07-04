import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Route: Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route: Contact Form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, experienceType, message } = req.body;
      
      // Validate fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
      }

      const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "alyka.licuben@outsourceddoers.com";

      // Setup transporter
      let transporter;
      let isTestAccount = false;
      let testUrl = null;

      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
      } else {
        // Fallback: Use Ethereal test account so it is a REAL email submission with preview!
        try {
          const testAccount = await nodemailer.createTestAccount();
          transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass,
            },
          });
          isTestAccount = true;
        } catch (err) {
          console.error("Failed to create Ethereal test account, falling back to JSON logger", err);
        }
      }

      const mailOptions = {
        from: `"Sole Hope Contact Form" <noreply@solehope.org>`,
        replyTo: `"${name}" <${email}>`,
        to: receiverEmail,
        subject: `[Sole Hope Contact] ${subject || "New Inquiry"} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nExperience Type: ${experienceType || "General Inquiry"}\nSubject: ${subject || "None"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1A3A5C; background-color: #FAF7F2; border-radius: 12px; border: 1px solid rgba(26,58,92,0.1); max-width: 600px;">
            <h2 style="color: #D15A3B; margin-top: 0; font-family: serif; border-bottom: 1px solid rgba(26,58,92,0.1); padding-bottom: 10px;">
              New Sole Hope Inquiry
            </h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #D15A3B;">${email}</a></p>
            <p><strong>Experience Type:</strong> <span style="background-color: rgba(26,58,92,0.05); padding: 4px 8px; border-radius: 6px; font-weight: bold;">${experienceType || "General Inquiry"}</span></p>
            <p><strong>Subject:</strong> ${subject || "None"}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-radius: 8px; border-left: 4px solid #D15A3B;">
              <p style="margin-top: 0; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #D15A3B;">Message:</p>
              <p style="white-space: pre-line; margin-bottom: 0; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>
            <footer style="margin-top: 30px; font-size: 11px; color: rgba(26,58,92,0.6); border-top: 1px solid rgba(26,58,92,0.1); padding-top: 10px; text-align: center;">
              Sent from Sole Hope Team Building Platform
            </footer>
          </div>
        `,
      };

      if (transporter) {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        if (isTestAccount) {
          testUrl = nodemailer.getTestMessageUrl(info);
          console.log("Preview URL: %s", testUrl);
        }
        res.status(200).json({ 
          success: true, 
          message: "Email sent successfully!", 
          messageId: info.messageId,
          testUrl: testUrl,
          receiver: receiverEmail
        });
      } else {
        // If transport creation completely failed, log it to the console
        console.log("============= SIMULATED EMAIL =============");
        console.log(`To: ${receiverEmail}`);
        console.log(`Subject: ${mailOptions.subject}`);
        console.log(`Body:\n${mailOptions.text}`);
        console.log("==========================================");
        res.status(200).json({
          success: true,
          message: "Email logged to console successfully!",
          simulated: true,
          receiver: receiverEmail
        });
      }

    } catch (error: any) {
      console.error("Error sending contact email:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
