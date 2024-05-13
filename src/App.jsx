import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";

import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import ReservasiPage from "./pages/ReservasiPage/ReservasiPage";
import ArtikelPage from "./pages/ArtikelPage/ArtikelPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DaftarPage from "./pages/DaftarPage/DaftarPage";
import MembershipPage from "./pages/MembershipPage/MembershipPage";
import TentangPage from "./pages/TentangPage/TentangPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage/SyaratKetentuanPage";


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/beranda" Component={HomePage} />
        <Route path="/reservasi" Component={ReservasiPage} />
        <Route path="/artikel" Component={ArtikelPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/daftar" Component={DaftarPage} />
        <Route path="/membership" Component={MembershipPage} />
        <Route path="/tentangkami" Component={TentangPage} />
        <Route path="/syarat&ketentuan" Component={SyaratKetentuanPage} />
      </Routes>
      
      <FooterComponent />
    </div>
  );
}

export default App;
