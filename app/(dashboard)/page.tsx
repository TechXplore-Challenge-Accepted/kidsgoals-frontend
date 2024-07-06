import Image from "next/image";

import PiggyBank from "../../public/piggy-bank.webp";
import InfoBoxes from "@/components/InfoBoxes";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-slate-700 py-36">
      <div className="w-full p-20 flex justify-around">
        <div className="w-[750px]">
          <h1 className="text-5xl text-white font-bold">
            აპლიკაცია, რომელიც ზრუნავს შენი შვილის მომავალზე
          </h1>
          <ul className="list-disc mt-10 p-10 flex flex-col gap-4 text-3xl text-white font-semibold">
            <li>სანდო</li>
            <li>საიმედო</li>
            <li>ინფორმაციული</li>
            <li>უსაფრთხო</li>
          </ul>
        </div>
        <Image src={PiggyBank} alt="piggy bank" width={600} height={600} />
      </div>
      <InfoBoxes />
    </section>
  );
}
