import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ReservasiPage from "./pages/ReservasiPage";
import ArtikelPage from "./pages/ArtikelPage";
import LoginPage from "./pages/LoginPage";
import DaftarPage from "./pages/DaftarPage";
import MembershipPage from "./pages/MembershipPage";
import TentangPage from "./pages/TentangPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import KebijakanDataPage from "./pages/KebijakanDataPage";
import DetailProdukPage from "./pages/DetailProdukPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ScrollToTop /> {/* Use ScrollToTop component */}

      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/beranda" Component={HomePage} />
        <Route path="/membership" Component={MembershipPage} />
        <Route path="/reservasi" Component={ReservasiPage} />
        <Route path="/artikel" Component={ArtikelPage} />
        <Route path="/tentangkami" Component={TentangPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/daftar" Component={DaftarPage} />
        <Route path="/syarat&ketentuan" Component={SyaratKetentuanPage} />
        <Route path="/kebijakandata" Component={KebijakanDataPage} />
        <Route path="/detailproduk" Component={DetailProdukPage} />

      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
