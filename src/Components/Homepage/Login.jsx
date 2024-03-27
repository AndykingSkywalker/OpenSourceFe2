import React from "react";
import { useNavigate, } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Home");
  };



  return (
    <div style={{textAlign: "center", display: "grid", placeItems:"center", marginTop: "12%"}}>
      <h1 className="title" style={{ textAlign: "center", fontSize: "2rem" }}>Login Form</h1>
      <br />
      <form  onSubmit={handleSubmit} style={{fontSize: "1rem"}} className="App">
        <input required type="text" placeholder="Username" />
        <br />
        <br />
        <input required type="password" placeholder="Password" />
        <br />
        <button style={{marginTop: "20px"}} className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}

export default Login;
