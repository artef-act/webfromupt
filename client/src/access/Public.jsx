import { Outlet } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";

function Public() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default Public;
