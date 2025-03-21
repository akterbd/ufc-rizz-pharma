import OffcanvasCart from "../../components/OffcanvasSidebarCart/OffcanvasSidebarCart";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
        <Header />
        <main className={`${location.pathname === "/" ? "home-page" : ""}`}>
          <Outlet />
        </main>
        <Footer />
        <OffcanvasCart />
    </>
  )
}

export default MainLayout