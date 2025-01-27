import Modal from "./Modal";
import { useState } from "react";
import Cards from "./Cards";

function BtnProjects({ onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-Moderate-cyan py-4 rounded-4xl text-white font-bold w-60 hover:bg-Dark-cyan transition-all cursor-pointer"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Back this project
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col text-left gap-5">
          <h2 className="text-Black font-bold text-2xl">Back this project</h2>
          <button
            className="text-xl font-bold text-Dark-gray absolute top-6 right-4 cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
          <p className="text-Dark-gray text-sm">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="flex flex-col gap-5">
            <Cards />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BtnProjects;
