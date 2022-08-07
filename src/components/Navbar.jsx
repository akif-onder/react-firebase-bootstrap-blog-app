import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";


const Navbar = () => {
    const [user] = useAuthState(auth)
  return (
    <div className="fixed-top border-bottom mb-3" style={{ backgroundColor: "whitesmoke"}}>
      <nav className="navbar d-flex justify-content-between
       align-items-center" >
        <div>
          <img src='logo192.png' width={30} height={30} alt="" />
        </div>
        <Link className="nav-link" to='/'>Home</Link>
        <div>
            {
                user && 
                <>
                <span className="pe-4">
                    {user.displayName}
                </span>
                <button className="btn btn-primary btn-sm me-3"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
                </>
            }
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
