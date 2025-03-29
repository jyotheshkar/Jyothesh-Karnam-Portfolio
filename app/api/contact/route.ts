import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Use your Gmail + app password
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Send to YOUR Gmail
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    replyTo: email, // so you can reply to the visitor
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  return NextResponse.json({ success: true });
}
