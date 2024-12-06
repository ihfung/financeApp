import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qiqkirsvsshgdzrjlyjr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpcWtpcnN2c3NoZ2R6cmpseWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MjI5NzUsImV4cCI6MjA0ODk5ODk3NX0.VCPGHUdEOhBWO5-9gMvMPCfXzE2mrGJVWfeOUia_IAU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
