import Link from "next/link";
import { BsBank } from "react-icons/bs";
import LogoutButton from "./LogoutBtn";

const Header = () => {
  return (
    <header className="absolute top-0 z-500 w-full h-[90px] bg-[#4477CE] flex items-center justify-between px-24 shadow-lg shadow-black">
      <div className="w-[260px]">
        <p className="h-[50px] w-[100px] bg-white flex items-center justify-center text-lg font-bold">
          ლოგო
        </p>
      </div>

      <nav className="h-full">
        <ul className="flex items-center text-black font-semibold text-lg h-full">
          <Link href="/" className="h-full w-[150px]">
            <li className="h-full flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in">
              მთავარი
            </li>
          </Link>

          <li className="h-full w-[150px] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in">
            ჩვენს შესახებ
          </li>
          <li className="h-full w-[150px] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in">
            კონტაქტი
          </li>
        </ul>
      </nav>
      <div className="w-[260px] flex justify-end gap-6">
        <Link href="/cabinet">
          <button className="flex items-center gap-1 font-semibold bg-white hover:bg-[#EEEDEB] py-2 px-3 rounded-md">
            <BsBank className="text-2xl" /> კაბინეტი
          </button>
        </Link>

        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
