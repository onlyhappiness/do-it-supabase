import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./MainLayout";

// signUp
export const SignUp = lazy(() => import("@pages/auth/SignUp"));

// login
export const Login = lazy(() => import("@pages/auth/Login"));

// Home
export const Home = lazy(() => import("@pages/Home"));

export const Router = () => {
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
