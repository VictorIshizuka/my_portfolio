import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { LayoutBase } from "../pages/Layout";
import { SobreMim } from "../pages/SobreMim";
import { NotFound } from "../pages/NotFound";

import { MenuLink } from "../components/MenuLink";
import { Footer } from "../components/Footer";
import { Post } from "../pages/Post";

export const ComponentRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MenuLink />
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<Home />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
