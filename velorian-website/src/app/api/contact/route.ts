import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, company, timeline, message } = await req.json();

  if (!name || !email || !company || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const timelineLabel: Record<string, string> = {
    '30days': '30 Days - Rapid Implementation',
    '60days': '60 Days - Complex Solutions',
    'consulting': 'Not sure - Need consultation',
  };

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'Velorian Contact Form <onboarding@resend.dev>',
    to: 'VelorianAIGroup@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${name} at ${company}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Timeline:</strong> ${timelineLabel[timeline] ?? timeline}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
