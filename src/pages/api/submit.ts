import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://mtgnoummjwwtmhbsqbte.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Z25vdW1tand3dG1oYnNxYnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMDg5ODYsImV4cCI6MjA5Mzg4NDk4Nn0.GO0P5sOSQC7qY_cltJDSqxBHVptDXF2uD_i8GZ2yyzk'
);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    console.log('Request body:', body);
    const { name, message } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { data, error } = await supabase
      .from('feedbacks')
      .insert({ name: name || 'Anonymous', message });

    console.log('Supabase response:', data, error);

    if (error) {
      console.log('Supabase error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.log('Caught error:', err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};