import BtnProjects from "./BtnProjects";

function Bamboo() {
  return (
    <div className="p-4 mx-5 my-[-50px] flex flex-col text-center relative bg-white rounded-lg shadow-lg">
      <img
        src="/images/logo-mastercraft.svg"
        alt="imagen master"
        className="absolute top-[-40px] left-35 w-18"
      />
      <div className="mt-10">
        <h3 className="font-extrabold text-2xl">
          Mastercraft Bamboo Monitor Riser
        </h3>
        <p className="text-Dark-gray text-[16px] mt-4">
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="flex justify-between mt-8">
        <BtnProjects />
        <img src="/images/icon-bookmark.svg" alt="imagen book" />
      </div>
    </div>
  );
}

export default Bamboo;
