import { db } from "../db/Data";

function Cards() {
  return (
    <div className="mt-5">
      {db.map((item) => (
        <div
          key={item.id}
          className="border-1 border-gray-300 p-5 rounded-lg mt-5"
        >
          <div className="md:flex md:justify-between md:items-center">
            <h3 className="font-bold mb-0">{item.name}</h3>
            <p className="text-Moderate-cyan font-semibold mt-0">
              {item.pledge}
            </p>
          </div>
          <p className="text-Dark-gray mt-5">{item.description}</p>
          <div className="md:flex md:justify-between md:items-center mt-5">
            <p className="font-extrabold text-4xl mt-5 ">
              {item.left}{" "}
              <span className="text-Dark-gray text-lg font-semibold">left</span>
            </p>
            <button className="bg-Moderate-cyan text-white py-3 px-8 rounded-3xl mt-8 hover:bg-Dark-cyan transition-all cursor-pointer">
              Select Reward
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
