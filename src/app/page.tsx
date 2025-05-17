import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container px-4 h-screen mx-auto flex flex-col justify-center items-center text-center">
      <div className="bg-white rounded-xl flex flex-col justify-center items-center p-7  shadow-xl">
        <Image
          src={"/logo/sesc-logo.svg"}
          width={150}
          height={150}
          alt="logo"
          className=""
        />
        <h1 className="text-2xl font-normal text-black mt-4">
          Official Website of SESC SLIIT
          <br />
          Coming Soon
        </h1>
        <Link href={"/agm"}>
          <button className="p-4 px-6 mt-6 hover:bg-white hover:text-black rounded-xl font-semibold border-[2px] border-orange-500 bg-orange-500 transition-colors duration-200 text-white hover:border-orange-400">
            View Agenda for AGM 2025
          </button>
        </Link>
      </div>
    </main>
  );
}
