import React from "react";

function Data() {
  return (
    <div className="p-4 mx-5 mt-1 my-[-50px] flex flex-col gap-5 text-center bg-white rounded-lg shadow-lg">
      <div>
        <p className="font-bold text-2xl">$89,914</p>
        <p className="text-Dark-gray">of $100.000 backed</p>
        <div className="border-b border-Dark-gray w-1/4 mx-auto mt-2"></div>
      </div>
      <div>
        <p className="font-bold text-2xl">5,007</p>
        <p className="text-Dark-gray">total backers</p>
        <div className="border-b border-Dark-gray w-1/4 mx-auto mt-2"></div>
      </div>
      <div>
        <p className="font-bold text-2xl">56</p>
        <p className="text-Dark-gray">days left</p>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={56}
        className="appearance-none w-full h-3 bg-Moderate-cyan rounded-lg"
      />
    </div>
  );
}

export default Data;
