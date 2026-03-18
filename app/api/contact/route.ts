import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name: string
  email: string
  message: string
}

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_RECEIVER_EMAIL',
] as const

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload
    const name = payload.name?.trim()
    const email = payload.email?.trim()
    const message = payload.message?.trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const missing = requiredEnvVars.filter((key) => !process.env[key])
    if (missing.length > 0) {
      return NextResponse.json(
        { message: `Server is missing environment variables: ${missing.join(', ')}` },
        { status: 500 }
      )
    }

    const smtpPort = Number(process.env.SMTP_PORT)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `Website Contact <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #10253a;">
          <h2 style="margin-bottom: 8px;">New Website Message</h2>
          <p style="margin: 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 16px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Message sent.' }, { status: 200 })
  } catch {
    return NextResponse.json(
      { message: 'Unable to send message right now. Please try again later.' },
      { status: 500 }
    )
  }
}