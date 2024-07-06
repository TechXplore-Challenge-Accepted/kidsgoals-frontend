import Image from "next/image";

import BankImg from "../public/bank.png";
import ServiceImg from "../public/service.webp";
import SecurityImg from "../public/security.jpg";
import SavingsImg from "../public/savings.jpg";

const InfoBoxes = () => {
  return (
    <section className="w-4/5 mx-auto mt-32 flex justify-around">
      <div className="w-[320px] h-[300px] relative rounded-xl overflow-hidden cursor-pointer">
        <Image
          src={BankImg}
          alt="bank image"
          width={320}
          height={300}
          className="w-[320px] h-[300px]"
        />
        <div className="absolute w-full h-1/3 bottom-0 bg-black bg-opacity-90 flex items-center px-6">
          <p className="text-white text-2xl font-semibold">აპლიკაცია</p>
        </div>
      </div>
      <div className="w-[320px] h-[300px] relative rounded-xl overflow-hidden cursor-pointer">
        <Image
          src={ServiceImg}
          alt="service image"
          width={320}
          height={300}
          className="w-[320px] h-[300px]"
        />
        <div className="absolute w-full h-1/3 bottom-0 bg-black bg-opacity-90 flex items-center px-6">
          <p className="text-white text-2xl font-semibold">სერვისები</p>
        </div>
      </div>
      <div className="w-[320px] h-[300px] relative rounded-xl overflow-hidden cursor-pointer">
        <Image
          src={SecurityImg}
          alt="security image"
          width={320}
          height={300}
          className="w-[320px] h-[300px]"
        />
        <div className="absolute w-full h-1/3 bottom-0 bg-black bg-opacity-90 flex items-center px-6">
          <p className="text-white text-2xl font-semibold">უსაფრთხოება</p>
        </div>
      </div>
      <div className="w-[320px] h-[300px] relative rounded-xl overflow-hidden cursor-pointer">
        <Image
          src={SavingsImg}
          alt="savings image"
          width={320}
          height={300}
          className="w-[320px] h-[300px]"
        />
        <div className="absolute w-full h-1/3 bottom-0 bg-black bg-opacity-90 flex items-center px-6">
          <p className="text-white text-2xl font-semibold">დაგროვება</p>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
