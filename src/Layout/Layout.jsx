import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Layout() {
  const { pathname } = useLocation();
  const firstname = "trtoto"
    const handleclick = () => {
       alert("click")
    }
  return (
    <>
      <Header clickOnFirstname={handleclick} firstname={firstname} />
      {pathname === "/" ? <Home /> : <Outlet />}
      <Footer />
    </>
  );
}

export default Layout;
