import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { ScaleLoader } from "react-spinners";
import "animate.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleLogin = (email, password) => {
    actions.login(email, password);
  };

  const handleLogout = () => {
    actions.logout();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (store.token && store.token !== "" && store.token !== undefined) {
      navigate("/manage");
    }
  }, [store.token, navigate]);

  return (
    <div className="app">
      <div className="login-container">
        {loading ? (
          <div className="loading-spinner">
            <ScaleLoader id="loader" color="#e8c552" height={75} width={8} />
          </div>
        ) : (
          <>
            {store.token && store.token !== "" && store.token !== undefined ? (
              <button className="ghost btn btn-success" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <div className="auth-form-container" id="container">
                <SignInForm handleLogin={handleLogin} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const SignInForm = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div>
      <div className="circles">
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
        <li className="squares"></li>
      </div>
      <div className="area d-flex justify-content-center">
        <div className="d-lg-inline-flex d-flex justify-content-center align-items-center">
          <div
            className="login-container d-flex justify-content-center text-center align-items-center"
            id="login-container"
          >
            <div className="form-container sign-in-container animate__animated animate__rotateInDownLeft">
              <form onSubmit={handleSignIn}>
                <h1 className="login-hdr">Sign in</h1>
                <div className="social-container">
                  <button className="social mx-2">
                    <FaFacebook />
                  </button>
                  <button className="social mx-2">
                    <FaGoogle />
                  </button>
                  <button className="social mx-2">
                    <FaLinkedinIn />
                  </button>
                </div>
                <span id="other-p">or use your account</span>
                <input
                  id="signInForm"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id="signInForm"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/forgot-password" id="other-p" p-2>
                  Forgot your password?
                </Link>
                <div className="d-flex justify-content-end">
                  <button className="ghost p-2 btn btn-bg-dark" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
