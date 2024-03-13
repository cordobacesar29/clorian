import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../commons/Header";

const Layout = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
