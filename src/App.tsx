import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import "../server";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./layout/HostLayout";
import Dashbord from "./pages/host/Dashbord";
import { About, Home } from "./pages";
import HostVanPricing from "././pages/host/vans/HostVanPricing";
import HostVanPhoto from "./pages/host/vans/HostVanPhoto";
import HostVans from "./pages/host/vans/HostVans";
import HostVanDetail from "./layout/HostVanDetail";
import HostVanInfo from "./pages/host/vans/HostVanInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashbord />} />
            <Route path="income" element={<Income />} />
            <Route path="vans">
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhoto />} />
              </Route>
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
