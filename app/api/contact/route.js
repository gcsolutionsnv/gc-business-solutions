import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwRUiB8l7XaiO5ki5oX6Madft5B3QyMTY4wO2oE5gG6BuJbqlcbcW4EyTnLUKMQxRf8Qg/exec';

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

    // Send to Google Apps Script (sends email)
    // Google Apps Script returns a 302 redirect, so we follow it and accept any response
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, company, service_interest, message }),
      redirect: 'follow',
    });

    // Google Apps Script redirects to a response page - any non-error status is fine
    const text = await res.text();

    // Check if the response contains success
    if (res.status >= 500) {
      throw new Error('Google Script server error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
