import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import icon from "../../../assets/icon/icon.png";
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../../Hooks/useCard";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [cart] = useCard();
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const links = (
    <ul className="flex items-center">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/shop/salad">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myCart">
          <FaShoppingCart />
          <div className="badge badge-secondary">+{cart.length}</div>
        </NavLink>
      </li>
      {user ? (
        <>
          <div onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </ul>
  );
  return (
    <div className="navbar max-w-screen-xl fixed z-20 bg-[#0000001c] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="text-xl font-medium mr-2">{user.displayName}</p>
            <img
              src={user?.photoURL}
              alt="photo"
              className="rounded-full w-12 h-12"
            />
          </>
        ) : (
          <>
            <div className="avatar">
              <div className="rounded-full w-12 h-12">
                <img src={icon} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
