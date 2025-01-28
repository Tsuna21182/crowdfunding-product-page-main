function Pledge() {
  return (
    <div className="text-center border-t-1 border-gray-300 mt-5">
      <p className="text-Dark-gray mt-5">Enter your pladge</p>
      <div className="flex justify-center gap-5 mt-3">
        <input
          type="number"
          placeholder="0"
          className="border-1 border-Dark-gray rounded-4xl w-20 text-center"
        />
        <button className="bg-Moderate-cyan text-white py-3 rounded-4xl px-5">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Pledge;
