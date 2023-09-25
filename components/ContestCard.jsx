"use client";

import Link from "next/link";
import Image from "next/image";

const ContestCard = ({ running, in24hrs, before }) => {
  const optionsDateTime = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return (
    <div className="running_card_live">
      <Link href={running.url} className="">
        <div className="flex flex-col justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3">
            <Image
              src="assests/images/icon-logo.svg"
              alt="site image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs tracking-widest uppercase text-orange-800">
                {running.site}
              </p>
              <h3 className="font-semibold text-xl text-orange-900">
                {running.name}
              </h3>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <p>Start: {running.start_time}</p>
            <p>End: {running.end_time}</p>
          </div>
          <div className="flex flex-row justify-between">
            {/* Convert into hr-min */}
            <p>Duration: {running.duration}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContestCard;
