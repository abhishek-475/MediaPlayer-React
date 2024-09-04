import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../services/AllApis";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const handleLogin = async () => {
    console.log(user);
    const { email, password } = user;
    if (!email || !password) {
      toast.warning("Enter Valid inputs");
    } else {
      const result = await getLogin(email, password);
      if (result.status == 200) {
        if (result.data.length > 0) {
          console.log(result.data[0]);
          sessionStorage.setItem("userData", JSON.stringify(result.data[0]));
          toast.success("Login Successfully");
          nav("/home");
          setUser({
            email: "",
            password: "",
          });
        } else {
          toast.warning("Invalid Email/Password");
        }
      } else {
        toast.error("Something Went Wrong");
      }
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}>
        <div className="w-75 border shadow bg-dark p-5">
          <h1>Login</h1>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Your Email Here"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input
            type="password"
            name=""
            placeholder="Enter Password"
            className="form-control mb-3"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <div className="d-flex justify-content-between">
            <button className="btn btn-success" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/reg"}>New User?</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
