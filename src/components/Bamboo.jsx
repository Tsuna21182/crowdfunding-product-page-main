import BtnProjects from "./BtnProjects";

function Bamboo() {
  return (
    <div className="p-4 mx-5 my-[-50px] flex flex-col text-center relative bg-white rounded-lg shadow-lg">
      <img
        src="/images/logo-mastercraft.svg"
        alt="imagen master"
        className="absolute top-[-40px] left-32 w-18 sm:left-65 md:w-20 lg:w-24  md:left-80 lg:left-110 lg:top-[-60px]"
      />
      <div className="mt-10">
        <h3 className="font-extrabold text-2xl">
          Mastercraft Bamboo Monitor Riser
        </h3>
        <p className="text-Dark-gray text-[16px] mt-4">
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="flex justify-between md:justify-around mt-8">
        <BtnProjects name="Back this project" />
        <img
          src="/images/icon-bookmark.svg"
          alt="imagen book"
          className="md:w-15"
        />
      </div>
    </div>
  );
}

export default Bamboo;
