import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {

  const [menu,setMenu] = useState("home")

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</li>
        <li onClick={()=>setMenu("contacts-us")} className={menu==="contacts-us"?"active":""}>Contacts Us</li>
      </ul>
      <div className="navbar-rigth">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
          <button>Sing IN</button>
      </div>
    </div>
  );
}

export default Navbar;
