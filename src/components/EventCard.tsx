import Image from "next/image";
import { DM_Sans } from "next/font/google";
const dm_Sans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

interface Props {
  title: string;
  time: string;
  description?: string;
  imageURL?: string;
  name?: string;
  position?: string;
  index: number;
  isLast?: boolean;
}

export default function EventCard({
  title,
  description,
  time,
  imageURL,
  name,
  position,
  index,
  isLast,
}: Props) {
  return (
    <div
      className={`text-pink-100 ${
        !isLast && "border-b-[1px]"
      } border-gray-200 w-full flex flex-row pt-2 pb-6 px-1`}
    >
      <div
        className={`${dm_Sans.className} text-[22px] w-[100px] flex-shrink-0 mr-4 font-[400] -mt-[2px]`}
      >
        {time}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <h2
            className={`${dm_Sans.className} text-[20px] font-[600] leading-tight tracking-tight`}
          >
            {title}
          </h2>
          <p className={`${dm_Sans.className} text-sm`}>{description}</p>
        </div>
        <div className="flex items-center">
          {imageURL && (
            <div
              className={`overflow-x-clip relative min-w-[70px] w-[70px] h-[70px] border-[2px] border-[black] rounded-full 
              }`}
            >
              <Image
                src={imageURL}
                width={100}
                height={100}
                alt="profile"
                className="object-cover absolute top-0 left-0 objecxt w-full h-full rounded-full grayscale brightness-105"
              />
            </div>
          )}
          <div className="ml-4 flex flex-col">
            <p className={`${dm_Sans.className} text-[18px] font-[500]`}>
              {name}
            </p>
            <p
              className={`${dm_Sans.className} text-[15px] font-[100] -mt-[1px]`}
            >
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
