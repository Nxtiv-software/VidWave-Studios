import logo from "../../public/VidWave.png";
import Button from "./Button";

function NavBar({ show }) {
  return (
    <nav
      className={`fixed rounded-xl bottom-5 w-[60vw] border border-[#351C59] text-white py-4 px-6 backdrop-blur-md z-50 transition-all duration-500 ease-in-out
        ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      <div className="flex items-center justify-between">
        <img className="h-12" src={logo} alt="" />
        <ul className="flex gap-6 items-center text-sm">
          <li>Home </li>
          <li>Services  </li>
          <li>Portfolio </li>
          <li>About Us </li>
          <li>Call Us </li>
        </ul>
        <button className="bg-white px-5 py-1 rounded-sm font-semibold text-black">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;
