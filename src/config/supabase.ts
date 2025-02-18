import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const SUPABASE_URL = 'https://hdtvnacwxslndriwzahu.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdHZuYWN3eHNsbmRyaXd6YWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MjA1MDMsImV4cCI6MjA1NTI5NjUwM30.Xh7W_2sFASpnRjq0Tl9OBdtPyHqFtR90ZiKQtCAcBsk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
