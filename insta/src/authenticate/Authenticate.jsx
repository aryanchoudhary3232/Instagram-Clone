import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./Authenticate.css";

const Authenticate = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authenticate">
      <div className="auth__left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="Instagram Photo" />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account?
                <button onClick={handleChange}>Log In</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
