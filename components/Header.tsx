import Link from "next/link";
import { BsBank } from "react-icons/bs";
import LogoutButton from "./LogoutBtn";

const Header = () => {
  return (
    <header className="absolute top-0 z-500 w-full h-[90px] bg-[#6DB9EF] flex items-center justify-between px-24 shadow-lg shadow-black">
      <div className="w-[300px]">
        <p className="h-[50px] w-[100px] bg-white flex items-center justify-center text-lg font-bold">
          ლოგო
        </p>
      </div>

      <nav className="h-full">
        <ul className="flex items-center text-[#F4F27E] font-semibold text-lg h-full">
          <Link href="/" className="h-full w-[200px]">
            <li className="h-full border-r border-r-[#F4F27E] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
              მთავარი
            </li>
          </Link>

          <li className="h-full w-[200px] border-r border-r-[#F4F27E] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
            ჩვენს შესახებ
          </li>
          <li className="h-full w-[200px] flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out">
            კონტაქტი
          </li>
        </ul>
      </nav>
      <div className="w-[300px] flex justify-end gap-10">
        <Link href="/cabinet">
          <button className="flex items-center gap-1 font-semibold bg-white py-2 px-3 rounded-md">
            <BsBank className="text-2xl" /> კაბინეტი
          </button>
        </Link>

        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
