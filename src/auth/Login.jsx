import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebaseConfig";




const Login = () => {
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    
      navigate("/");
    } catch (error) {
        toast(error.code, {type:'error'})
    }
  };
  return (
    <div className="border p-3 bg-light mx-auto" style={{maxwidth:400, marginTop:60}}>
      <h1>Login</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassWord(e.target.value)}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
