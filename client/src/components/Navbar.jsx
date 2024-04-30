// import { IconButton } from "@mui/material";
// import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
 import "../styles/Navbar.scss";
 import { useHistory } from 'react-router-dom'; 
// import { Link, useNavigate } from "react-router-dom";
// import { setLogout } from "../redux/state";
// import React, { createContext, useContext } from 'react';

// const Navbar = () => {
//   const [dropdownMenu, setDropdownMenu] = useState(false);

//   const user = useSelector((state) => state.user);

//   const dispatch = useDispatch();

//   const [search, setSearch] = useState("")

//   const navigate = useNavigate()
//   return (
//     <div className='navbar'>
//         <a href='/'>
//             <img src="/assets/logo.png" alt='logo'/>
//         </a>
//       <div classNmae='navbar_search'>
//         <input type='text' placeholder='Search' />
        
        

//       </div>

//   <div className="navbar_right">
//         {user ? (
//           <a href="/create-listing" className="host">
//             Become A Host
//           </a>
//         ) : (
//           <a href="/login" className="host">
//             Become A Host
//           </a>
//         )}

//         <button
//           className="navbar_right_account"
//           onClick={() => setDropdownMenu(!dropdownMenu)}
//         >
//           <Menu sx={{ color: variables.darkgrey }} />
//           {!user ? (
//             <Person sx={{ color: variables.darkgrey }} />
//           ) : (
//             <img
//               src={`http://localhost:3001/${user.profileImagePath.replace(
//                 "public",
//                 ""
//               )}`}
//               alt="profile photo"
//               style={{ objectFit: "cover", borderRadius: "50%" }}
//             />
//           )}
//         </button>

//         {dropdownMenu && !user && (
//           <div className="navbar_right_accountmenu">
//             <Link to="/login">Log In</Link>
//             <Link to="/register">Sign Up</Link>
//           </div>
//         )}

//         {dropdownMenu && user && (
//           <div className="navbar_right_accountmenu">
//             <Link to={/${user._id}/trips}>Trip List</Link>
//             <Link to={/${user._id}/wishList}>Wish List</Link>
//             <Link to={/${user._id}/properties}>Property List</Link>
//             <Link to={/${user._id}/reservations}>Reservation List</Link>
//             <Link to="/create-listing">Become A Host</Link>

//             <Link
//               to="/login"
//               onClick={() => {
//                 dispatch(setLogout());
//               }}
//             >
//               Log Out
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
const Navbar = () => {
    // const history = useHistory();

  const handleLogout = () => {
    // Clear user data from session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

    // Redirect to the login page
    // history.push('/login');
  };
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <img src='/assets/logo.png' alt="Dream_Nest Logo" className="logo" />
          <a href="#">Dream_Nest</a>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/create-listing" className="nav-link">Become a Host</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="./login" onClick={handleLogout} className="nav-link">LogOut</a>
          </li>
        </ul>
      </nav>
    );
  };
  export default Navbar;
// import React, { useState, useRef, useEffect } from 'react';
// import { IconButton } from "@mui/material";
// import { Search, Person, Menu } from "@mui/icons-material";
// import variables from "../styles/variables.scss";
// import { useSelector, useDispatch } from "react-redux";

// import { Link, useNavigate } from "react-router-dom";
// import { setLogout } from "../redux/state";

// const Navbar = () => {
//   const [dropdownMenu, setDropdownMenu] = useState(false);
//   const dropdownRef = useRef(null);
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate()

//   const toggleDropdown = () => {
//     setDropdownMenu(!dropdownMenu);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownMenu(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className='navbar'>
//       <a href='/'>
//         <img src="/assets/logo.png" alt='logo'/>
//       </a>
//       <div className='navbar_search'>
//         <input type='text' placeholder='Search' />
//       </div>
//       <div className="navbar_right">
//         {user ? (
//           <a href="/create-listing" className="host">
//             Become A Host
//           </a>
//         ) : (
//           <a href="/login" className="host">
//             Become A Host
//           </a>
//         )}
//         <div className="navbar_right_account" onClick={toggleDropdown}>
//           <Menu sx={{ color: variables.darkgrey }} />
//           {!user ? (
//             <Person sx={{ color: variables.darkgrey }} />
//           ) : (
//             <img
//               src={`http://localhost:3001/${user.profileImagePath.replace(
//                 "public",
//                 ""
//               )}`}
//               alt="profile photo"
//               style={{ objectFit: "cover", borderRadius: "50%" }}
//             />
//           )}
//         </div>
//         {dropdownMenu && !user && (
//           <div className="navbar_right_accountmenu">
//             <Link to="/login">Log In</Link>
//             <Link to="/register">Sign Up</Link>
//           </div>
//         )}
//         {dropdownMenu && user && (
//           <div className="navbar_right_accountmenu" ref={dropdownRef}>
//             <Link to={/${user._id}/trips}>Trip List</Link>
//             <Link to={/${user._id}/wishList}>Wish List</Link>
//             <Link to={/${user._id}/properties}>Property List</Link>
//             <Link to={/${user._id}/reservations}>Reservation List</Link>
//             <Link to="/create-listing">Become A Host</Link>
//             <Link
//               to="/login"
//               onClick={() => {
//                 dispatch(setLogout());
//               }}
//             >
//               Log Out
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;