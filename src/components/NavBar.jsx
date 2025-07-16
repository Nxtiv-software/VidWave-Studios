import { NavLink } from "react-router";
import logo from "../../public/VidWave.png";
import Button from "./Button";

function NavBar() {
  return (
    <nav
      className={`fixed top-10 left-1/2 -translate-x-1/2 rounded-xl w-[60vw] border border-[#351C59] text-white py-4 px-6 backdrop-blur-md z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="flex items-center justify-between">
        <img className="h-12" src={logo} alt="" />
        <ul className="flex gap-6 items-center text-sm">
          <NavLink to="/">Home </NavLink>
          <li>Services  </li>
          <NavLink to="/portfolio">Portfolio </NavLink>
          <li>About Us </li>
          <li>Call Us </li>
        </ul>
        <button className="bg-white px-5 py-1 rounded-sm font-semibold text-black">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;
