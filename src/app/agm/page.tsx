import EventCard from "@/components/EventCard";
import { AgendaData } from "@/data/AgendaData";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import AgendaIcon from "/public/agm.png";

const dm_Sans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-pink-100 sm:pt-10 pb-10"
      style={{
        background:
          "radial-gradient(circle at top left, #9DADEB 0%, #002FED 100%)",
        boxShadow: "0 10px 30px rgba(0,47,237,0.2)",
      }}
    >
      {/* Triangle pattern overlay */}
      <div
        className="absolute inset-0 w-full h-full opacity-15 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/triangle-pattern.png')",
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />
      {/* Noise texture overlay */}

      <div
        className="overflow-clip relative max-w-lg mx-auto pb-10 px-4 sm:px-8 sm:border border-gray-100 sm:rounded-xl sm:shadow-2xl pt-10 sm:pt-10 backdrop-blur-sm bg-gradient-to-br from-[#002FED] to-[rgba(157,173,235,0.6)] hover:shadow-2xl transition-all duration-300 z-10"
        style={{
          background:
            "radial-gradient(circle at top left, #9DADEB 0%, #002FED 100%)",
          boxShadow: "0 10px 30px rgba(0,47,237,0.2)",
        }}
      >
        <div
          className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url('/grain_bg.png')",
            backgroundRepeat: "cover",
            backgroundSize: "full 200px",
          }}
        />
        <div
          className={`${dm_Sans.className} text-center bg-none rounded-lg p-6 flex flex-col items-center`}
        >
          <Image
            src={AgendaIcon}
            alt="Agenda"
            className="w-[200px] sm:w-[250px] mb-4 transition-all duration-300 ease-in-out hover:scale-105"
          />
          <div className={`${dm_Sans.className} max-w-md`}>
            <h2 className="text-pink-100 text-[28px] font-[500] mb-4">
              Event Outline
            </h2>

            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-row flex-wrap gap-2 justify-center">
                <div className="px-4 py-1.5 border-2 border-pink-100 rounded-full text-pink-100 font-[500] hover:bg-pink-100/10 transition-all">
                  1 PM – 4 PM
                </div>
                <div className="px-4 py-1.5 border-2 border-pink-100 rounded-full text-pink-100 font-[500] hover:bg-pink-100/10 transition-all">
                  13 February
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2 justify-center">
                <div className="px-4 py-1.5 border-2 border-pink-100 rounded-full text-pink-100 font-[500] hover:bg-pink-100/10 transition-all">
                  Main Auditorium
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${dm_Sans.className} flex flex-row justify-center mt-6 mb-4`}
        ></div>
        <div className="flex flex-col gap-y-4 p-4 backdrop-blur-sm bg-white/40 rounded-lg">
          {AgendaData.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              time={event.time}
              imageURL={event.imageURL}
              name={event.name}
              position={event.position}
              index={index}
              isLast={index === AgendaData.length - 1}
            />
          ))}
        </div>
      </div>

      {/* <div className="relative bg-[#13131391]"></div> */}
      <div className="bg-white mt-8 rounded-t-lg shadow-lg relative z-10">
        <div className="max-w-[500px] py-5 mx-auto flex flex-row items-center justify-center px-[150px] ">
          <Image
            src={"/logo/fcsc-logo.svg"}
            width={80}
            height={80}
            alt=""
            className="mr-4"
          />
          <Image src={"/logo/sesc-logo.svg"} width={80} height={80} alt="" />
          <div className="w-[1px] h-10 bg-pink-100"></div>
        </div>
      </div>
    </main>
  );
}
