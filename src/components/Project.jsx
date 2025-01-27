import Cards from "./Cards";

function Project() {
  return (
    <div className="p-4 mx-5 mt-1 my-[-50px] flex flex-col gap-5 t bg-white rounded-lg shadow-lg">
      <div className="md:p-4">
        <h3 className="font-bold text-xl mt-5">About this project</h3>
        <p className="text-Dark-gray md:mt-5">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stulish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="text-Dark-gray md:mt-5">
          Featuring artisan craftsmanship, the simplicity of desing creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Project;
