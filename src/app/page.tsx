import React from "react";
import Stopwatch from "@/components/stopwatch";

const HomePage = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-4">Billing</h1>
      <div className="w-full flex justify-center items-center flex-wrap">
        <Stopwatch billing={1} ps="PS 3" category="Standar" price={5000} />
        <Stopwatch billing={2} ps="PS 3" category="Standar" price={5000} />
        <Stopwatch billing={3} ps="PS 4" category="Standar" price={7500} />
        <Stopwatch billing={4} ps="PS 4" category="Premium" price={10000} />
        <Stopwatch billing={5} ps="PS 5" category="VIP" price={15000} />
      </div>
    </>
  );
};

export default HomePage;
