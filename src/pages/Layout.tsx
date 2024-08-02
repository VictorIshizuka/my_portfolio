import { Outlet } from "react-router-dom";

import { Banner } from "../components/Banner";

export const LayoutBase = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};
