import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ReservasiPage from "./pages/ReservasiPage";
import ArtikelPage from "./pages/ArtikelPage";
import LoginPage from "./pages/LoginPage";
import DaftarPage from "./pages/DaftarPage";
import MembershipPage from "./pages/MembershipPage";
import TentangPage from "./pages/TentangPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";

function App() {
  return (
    <div>
      <NavbarComponent />

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
      </Routes>
      
      <FooterComponent />
    </div>
  );
}

export default App;
