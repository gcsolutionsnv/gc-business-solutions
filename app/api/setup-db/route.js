import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Visit this route once to create the contacts table
// GET /api/setup-db
export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        service_interest TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;

    return NextResponse.json({ success: true, message: 'Contacts table created' });
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
