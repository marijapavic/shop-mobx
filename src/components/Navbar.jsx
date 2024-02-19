import React, { useEffect } from "react";
import Hamburger from "./Hamburger";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import { NavbarStore } from "../store/NavbarStore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { BsCart2 } from "react-icons/bs";
import logo from "../assets/logo.jpg";

const Navbar = observer(() => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const name = user.displayName;
    const mail = user.email;
    console.log(name, mail);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      NavbarStore.setIsLoggedIn(!!user);
    });
  }, []);

  return (
    <header className="navbar">
      <NavLink to="/">
        <div className={`nav-title ${NavbarStore.showNavbar && "active"}`}>
          <img src={logo} alt="logo" width={250} />
        </div>
      </NavLink>
      <div onClick={NavbarStore.handleShowNavbar} className="ham">
        <Hamburger isOpen={NavbarStore.showNavbar} />
      </div>
      <div className={`nav-elements ${NavbarStore.showNavbar && "active"}`}>
        <ul className="nav-ul">
          <li className="listitem">
            <NavLink to="/" onClick={NavbarStore.handleShowNavbar}>
              Home
            </NavLink>
          </li>
          <li className="listitem">
            <NavLink to="/shop" onClick={NavbarStore.handleShowNavbar}>
              Shop
            </NavLink>
          </li>

          {NavbarStore.isLoggedIn ? (
            <>
              <li className="listitem">
                <NavLink
                  to="/"
                  onClick={NavbarStore.logOut}
                  className="logout-btn"
                >
                  Log out
                </NavLink>
              </li>
              <li className="listitem">
                <NavLink to="/cart">
                  <BsCart2 />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="listitem">
                <NavLink to="/signin">Sign in</NavLink>
              </li>
              <li className="listitem">
                <NavLink to="/register">Sign up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
});

export default Navbar;
