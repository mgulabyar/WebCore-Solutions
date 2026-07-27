import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, phone, company, service, message } = body || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Service:</strong> ${service || "-"}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: "mubeen.dev356@gmail.com",
      replyTo: email,
      subject: `New Contact Form Message: ${subject}`,
      html,
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully." });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}