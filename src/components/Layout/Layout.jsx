import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

import s from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
