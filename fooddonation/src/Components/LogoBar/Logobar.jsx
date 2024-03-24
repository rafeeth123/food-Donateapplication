import React from "react";
import "./LogoBar.css";
import Image from "./logo.svg";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../NewLogin/UserSlice"; 

function Logobar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //const loggedIn = user.loggedIn;

  let navbarClass = "navbar-dashboard";
  if (location.pathname === "/") {
    navbarClass = "navbar";
  }

  return (
    <nav className={navbarClass}>
      <div className="left-bar bars">
        <div className="boxs">
          <p onClick={() => navigate("/projects")}>PROJECTS</p>
        </div>
      
          <>
            <div className="boxs">
              <p onClick={() => navigate("/ngo")}>NGO</p>
            </div>
            <div className="boxs">
              <p onClick={() => navigate("/volunteer")}>VOLUNTEER</p>
            </div>
          </>
    
      </div>
      <div className="center-logo">
        <img onClick={() => navigate("/")} src={Image} alt="Logo" />
      </div>
      <div className="right-bar bars">
        <div className="boxs">
          <p onClick={() => navigate("/community")}>FAQ</p>
        </div>
        <div className="boxs">
          <p onClick={() => navigate("/dashboard/myaccount")}>DASHBOARD</p>
        </div>
          
       
          <div className="boxs">
            <p onClick={() => navigate("/newlogin")}>LOG IN</p>
          </div>
        
      </div>
    </nav>
  );
}

export default LoadingPage(Logobar);
