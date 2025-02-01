import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/raise-together.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Navbar() {
  const { logOut, user } = useContext(AuthContext);

  const links = (
    <>
      <li className="text-gray-800">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-800">
        <NavLink to="/allCampaigns">All Campaigns</NavLink>
      </li>
      <li className="text-gray-800">
        <NavLink to="/myCampaigns">My Campaigns</NavLink>
      </li>
      <li className="text-gray-800">
        <NavLink to="/myDonations">My Donations</NavLink>
      </li>
      <li className="text-gray-800">
        <NavLink to="/addNewCampaign">Add New Campaign</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-blue-100">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-4 sm:-ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5 text-gray-800"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl text-gray-800 -ml-4 sm:-ml-0">
            <img className="w-8" src={logo} alt="" />
            RAISE TOGETHER
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.email && (
            <img
              className="w-10 h-10 object-cover rounded-full hidden sm:block"
              title={user.displayName}
              src={user?.photoURL}
              alt=""
            />
          )}
          {user ? (
            <button onClick={logOut} className="btn btn-primary ml-4">
              Logout
            </button>
          ) : (
            <div className="flex">
              <Link className="inline-block" to={"/login"}>
                <button className="btn btn-primary ml-4">Login</button>
              </Link>
              <Link className="hidden sm:inline-block" to={"/register"}>
                <button className="btn btn-outline btn-primary ml-4">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
