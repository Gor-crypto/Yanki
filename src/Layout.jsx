import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
