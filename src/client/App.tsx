import React from "react";
import { Router } from "@layout/Router";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
