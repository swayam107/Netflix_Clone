import React, { useEffect, useState } from "react";
import "../Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {

  const [show, handleShow] = useState(false);

  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 200) {
      handleShow(true);
    }
    else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    
    // clean up function
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img 
          onClick={() => history("/")} 
          className="nav_logo" 
          src="images/netflix.png" 
          alt="alt" />

        <img 
          onClick={() => history("/profile")} 
          className="nav_avatar" 
          src="images/my_avatar_n.jpg" 
          alt="" />
        <h4>Home</h4>  
        <h4>Movies</h4>
        <h4>Series</h4>
        <h4>My List</h4>

      </div>
    </div>
  );
}

export default Nav;
