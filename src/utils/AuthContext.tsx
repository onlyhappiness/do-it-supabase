import React, { useEffect } from "react";
import { supaClient } from "@client/supa-client";
import { useRecoilState } from "recoil";
import { userAtom } from "@data/userAtom";

export function AuthProvider({ children }) {
  const [userState, setUserState] = useRecoilState(userAtom);

  useEffect(() => {
    const session = supaClient.auth.getSession();

    console.log("sesssion: ", session);

    setUserState(session?.user ?? null);

    const { data: listener } = supaClient.auth.onAuthStateChange(
      async (session) => {
        setUserState(session?.user ?? null);
      }
    );

    console.log("listener: ", listener);

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data) => supaClient.auth.signUp(data),
    signIn: (data) => supaClient.auth.signInWithPassword(data),
    signOut: () => supaClient.auth.signOut(),
    userState,
  };
}
