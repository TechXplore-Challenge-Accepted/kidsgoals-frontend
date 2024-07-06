import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black w-full h-[150px] flex justify-around items-center">
      <div className="text-white text-lg">
        <p>FAQ</p>
        <p>კონფიდენციალურობის პოლიტიკა</p>
        <p>წესები და პირობები</p>
      </div>
      <div className="flex text-white text-4xl gap-2">
        <FaAppStoreIos />
        <IoLogoGooglePlaystore />
        <FaFacebookSquare />
        <FaInstagramSquare />
      </div>
    </footer>
  );
};

export default Footer;
