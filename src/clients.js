/* eslint-disable import/prefer-default-export */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://drawbeobfozyrwvkabpy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyYXdiZW9iZm96eXJ3dmthYnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUxMDUzMzgsImV4cCI6MTk4MDY4MTMzOH0.P8rDZTEurfq4YGkOnGq6vf7WelDB_cT2X5bfeDevyAs'
);

export { supabase };
