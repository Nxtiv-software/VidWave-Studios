import logo from "../../public/VidWave.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
function Footer() {
  return (
    <div className="h-[30vh] w-[80vw] mx-auto gap-10 py-5">
      <div>
        <p className="text-[#808490] text-sm">Contact vidwave at:</p>
        <a href="https://wa.me/message/F57FQASLHONHH1">
          <p className="text-lg text-white">hello@vidwavestudios.com</p>
        </a>
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
          <a
            href="https://www.facebook.com/share/1BRi4A4vzM/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="white" size={24} />
          </a>

          <a
            href="https://instagram.com/vidwavestudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram color="white" size={24} />
          </a>

          <a
            href="https://www.linkedin.com/company/vidwave-studios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="white" size={24} />
          </a>

          <a
            href="https://www.tiktok.com/@vidwavestudios?_t=ZS-8yys5R21AGH&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok color="white" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
