function Data() {
  return (
    <div className="p-4 mx-5 mt-1 my-[-50px] flex flex-col gap-5 text-center bg-white rounded-lg shadow-lg md:text-left">
      <div className="md:flex md:flex-row md:gap-22 md:p-5">
        <div className="md:border-r md:border-gray-300 md:pr-10">
          <p className="font-bold text-2xl">$89,914</p>
          <p className="text-Dark-gray">of $100.000 backed</p>
          <div className="border-b border-Dark-gray w-1/4 mx-auto mt-2 md:border-b-0"></div>
        </div>
        <div className="md:border-r md:border-gray-300 md:pr-10">
          <p className="font-bold text-2xl">5,007</p>
          <p className="text-Dark-gray">total backers</p>
          <div className="border-b border-Dark-gray w-1/4 mx-auto mt-2 md:border-b-0"></div>
        </div>
        <div>
          <p className="font-bold text-2xl">56</p>
          <p className="text-Dark-gray">days left</p>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={56}
        className="appearance-none w-full h-3 bg-Moderate-cyan rounded-lg md:w-3/4 md:mx-5 md:mb-5"
      />
    </div>
  );
}

export default Data;
