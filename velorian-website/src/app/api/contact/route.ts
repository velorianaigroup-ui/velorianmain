import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited, getClientIp } from '@/lib/rateLimit';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
    console.error('Failed to parse contact form request body:', e);
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
  const { name, email, company, timeline, message, website } = body;

  // Honeypot: real users never see or fill this field. Fake success so
  // bots don't learn they were caught.
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

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
    to: 'velorianaigroup@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${name} at ${company}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timelineLabel[timeline] ?? timeline)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
