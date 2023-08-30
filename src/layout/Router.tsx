import { lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import { supaClient } from "@client/supa-client";
import { useRecoilState } from "recoil";
import { sessionAtom, userAtom } from "@data/userAtom";

// signUp
export const SignUp = lazy(() => import("@pages/auth/SignUp"));

// login
export const Login = lazy(() => import("@pages/auth/Login"));

// Home
export const Home = lazy(() => import("@pages/Home"));

export const Router = () => {
  const [userState, setUserState] = useRecoilState(userAtom);
  const [session, setSession] = useRecoilState(sessionAtom);

  useEffect(() => {
    const { data } = supaClient.auth.onAuthStateChange((event, session) => {
      setUserState(session?.user ?? null);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
