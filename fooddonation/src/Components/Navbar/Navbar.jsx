import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "./logo.svg";

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "../Navbar/Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from '../NewLogin/UserSlice';

function Navbar() {
  const user = useSelector(selectUser);
  console.log(user);
  const loggedIn = user.loggedIn;
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    toggleDrawer(false);
  };

  const handleClick = () => setClick(!click);
  

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLink exact to="/" className="nav-logo">
            <img src={Image} alt="Logo" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact to="/community"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FAQ
              </NavLink>
            </li>
            
            {loggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact to="/dashboard"
                    activeClassName="active"
                    className="nav-links"
                    onClick={() => dispatch(logout())}
                  >
                    DASHBOARD
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact to="/newlogin"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    LOGIN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact to="/signup"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    SIGNUP
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
            <div style={{ width: '250px' }}>
              <List>
                <center><br /></center>
                
                
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/feedback" style={{ textDecoration: "none" }}>
                    <ListItemText primary="FEEDBACK" />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/newlogin" style={{ textDecoration: "none" }}>
                    <ListItemText primary="ADMIN" />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/projects" style={{ textDecoration: "none" }}>
                    <ListItemText primary="PROJECTS" />
                  </Link>
                </ListItem>
                {loggedIn && (
                  <>
                    <ListItem button onClick={toggleDrawer(false)}>
                      <Link to="/ngo" style={{ textDecoration: "none" }}>
                        <ListItemText primary="NGO" />
                      </Link>
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                      <Link to="/volunteer" style={{ textDecoration: "none" }}>
                        <ListItemText primary="DONATE" />
                      </Link>
                    </ListItem>
                  </>
                )}
              </List>
            </div>
          </Drawer>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
