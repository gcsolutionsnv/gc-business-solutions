import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, company, service_interest, message } = await request.json();

    // Validate required fields
    if (!name || !email || !company || !service_interest || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send notification email to your team
    await resend.emails.send({
      from: 'GC Business Solutions <notifications@gcsolutionsnv.com>',
      to: ['csteam@gcsolutionsnv.com'],
      subject: `New Contact Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service Interest:</strong> ${service_interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p style="color: #666; font-size: 12px;">Submitted via gcsolutionsnv.com contact form</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
