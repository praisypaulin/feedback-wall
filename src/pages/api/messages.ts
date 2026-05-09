import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://mtgnoummjwwtmhbsqbte.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Z25vdW1tand3dG1oYnNxYnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMDg5ODYsImV4cCI6MjA5Mzg4NDk4Nn0.GO0P5sOSQC7qY_cltJDSqxBHVptDXF2uD_i8GZ2yyzk'
);

export const GET: APIRoute = async () => {
  try {
    const { data, error } = await supabase
      .from('feedbacks')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    console.log('Messages response:', data, error);

    if (error) {
      console.log('Messages error:', error);
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.log('Caught error:', err);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};