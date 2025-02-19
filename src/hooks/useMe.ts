import {useEffect, useState} from 'react';
import {supabase} from '../config/supabase';
import {Session, User} from '@supabase/supabase-js';

export const useMe: () => {user: User | null; accessToken?: string} = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return {
    user: session?.user || null,
    accessToken: session?.access_token,
  };
};
