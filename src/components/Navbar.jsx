import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed-top border " style={{ backgroundColor: "whitesmoke" }}>
      <nav className="nav" >
        <div>
          <img src='logo192.png' width={30} height={30} alt="" />
        </div>
        <Link className="nav-link" to='/'>Home</Link>
      </nav>
    </div>
  );
};

export default Navbar;
