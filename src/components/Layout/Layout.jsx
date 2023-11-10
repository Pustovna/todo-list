import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import "../../styles/style.css"
import "./layout.css";

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return (
      <div>
        <Header  />
        <div className="container">{children}</div>
      </div >
    );
  };
  
  export default Layout;