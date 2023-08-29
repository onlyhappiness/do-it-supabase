import { supaClient } from "@/client/supa-client";

// 회원가입 - 이메일, 비밀번호
export const signup = async ({ email, password }) => {
  let { data, error } = await supaClient.auth.signUp({
    email,
    password,
  });

  return { data, error };
};

// 로그인
export const login = async ({ email, password }) => {
  let { data, error } = await supaClient.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};
