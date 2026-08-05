import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </>
  );
}
