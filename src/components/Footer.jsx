import logo from "../../public/VidWave.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className="h-[50vh] w-[80vw] mx-auto gap-10 py-20">
      <div>
        <p className="text-[#808490] text-sm">Contact vidwave at:</p>
        <p className="text-lg text-white">productionsvidwave@gmail.com</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img className="h-20" src={logo} alt="" />
        <p className="text-2xl text-white">Vidwave Studios</p>
        <p className="text-[#B0ABC9]">Colombo, Sri Lanka</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-white font-extralight">
          2025 vidwave. All rights reserved
        </p>
        <div className="flex gap-5">
          <FaFacebook color="white" />
          <AiFillInstagram color="white" />
          <FaLinkedin color="white" />
          <FaSquareXTwitter color="white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
