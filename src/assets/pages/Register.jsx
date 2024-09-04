import React, { useState } from "react";
import { Await, Link } from "react-router-dom";
import { checkEmail, registerEmail } from "../services/AllApis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const handleRegister = async () => {
    console.log(user);
    const { username, email, password } = user;
    if (!username || !email || !password) {
      toast.warning("Enter Valid inputs");
    } else {
      const result = await checkEmail(email);
      console.log(result);
      if (result.data.length > 0) {
        toast.warning("Email is already in use");
      } else {
        const res = await registerEmail(user);
        if (res.status == 201) {
          toast.success("Success");
          setUser({
            username: "",
            email: "",
            password: "",
          });
          nav("/login");
        } else {
          toast.error("Registration Failed");
        }
      }
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}>
        <div className="w-75 border shadow bg-dark p-5">
          <h1>Register</h1>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
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
            <button className="btn btn-success" onClick={handleRegister}>
              Register
            </button>
            <Link to={"/login"}>Already a User?</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
