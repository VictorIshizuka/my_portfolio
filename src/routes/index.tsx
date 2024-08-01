import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SobreMim } from "../pages/SobreMim";
import { NotFound } from "../pages/NotFound";
import { MenuLink } from "../components/MenuLink";
import { Banner } from "../components/Banner";

export const ComponentRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MenuLink />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
