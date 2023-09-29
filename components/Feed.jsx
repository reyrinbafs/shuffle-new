"use client";

import { useState, useEffect } from "react";
import ContestCard from "./ContestCard";




const ContestCardList = ({ data }) => {
  const sortedData = data.sort((a, b) => {
    if (a.status === "CODING" && b.status !== "CODING") {
      return -1; // a should come before b
    } else if (a.status !== "CODING" && b.status === "CODING") {
      return 1; // b should come before a
    } else {
      return 0; // no change in order
    }
  });
  return (
    <div className="mt-16 prompt_layout">
      {sortedData.map((contest) => (
        <ContestCard
          contest={contest}
          running={contest.status === "CODING"}
          in24hrs={contest.in_24_hours === "Yes"}
          before={contest.status === "BEFORE"}
        />
      ))}
    </div>
  );
};

const LiveContest = () => {
  const [contest, setContest] = useState([]);

  useEffect(() => {
    const fetchContest = async () => {
      try {
        const resp = await fetch(`https://kontests.net/api/v1/all`);
        const data = await resp.json();
        console.log(data);
        setContest(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchContest();
  }, []);
  return (
    <div>
      <ContestCardList
        data={contest}
        // running={contest.status === "CODING"}
        // in24hrs={contest.in_24_hours === "Yes"}
        // before={contest.status === "BEFORE"}
      />
    </div>
  );
};

export default LiveContest;
