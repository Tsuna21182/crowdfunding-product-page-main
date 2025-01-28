import Modal from "./Modal";
import { useState } from "react";
import Cards from "./Cards";

function BtnProjects({ name, onClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-Moderate-cyan py-4 rounded-4xl text-white font-bold w-50 hover:bg-Dark-cyan transition-all cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {name}
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col text-left gap-5">
          <h2 className="text-Black font-bold text-2xl">Back this project</h2>
          <button
            className="text-xl font-bold text-Dark-gray absolute top-6 right-4 cursor-pointer"
            onClick={onClick} // Cierra el modal
          >
            X
          </button>
          <p className="text-Dark-gray text-sm">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="flex flex-col gap-5">
            <div className="border-1 border-gray-300 p-5 rounded-lg mt-5">
              <h3 className="font-bold mb-0">Pledge with no reward</h3>
              <p className="text-Dark-gray mt-5">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
            <Cards />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BtnProjects;
