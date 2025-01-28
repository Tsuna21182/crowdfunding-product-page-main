import { useState } from "react";
import { db } from "../db/Data";
import Pledge from "./Pledge";
import Action from "./Action";
import BtnProjects from "./BtnProjects";
import Modal from "./Modal";

function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const handleSelectCard = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  const handleBtnClick = () => {
    setIsModalOpen(true); // Abre el modal
  };

  return (
    <div>
      {db.map((item) => (
        <div
          key={item.id}
          className={`border-1 p-5 rounded-lg mt-5 transition-all ${
            selectedCard === item.id
              ? "border-Moderate-cyan border-2"
              : "border-gray-300"
          }`}
        >
          <div className="flex gap-4 md:justify-between items-center">
            {/* Mostrar Action solo si el modal no está abierto */}
            {!isModalOpen && (
              <Action
                isSelected={selectedCard === item.id}
                onSelect={(e) => {
                  e.stopPropagation(); // Evita cerrar el modal
                  handleSelectCard(item.id);
                }}
              />
            )}
            <div>
              <h3 className="font-bold mb-0">{item.name}</h3>
              <p className="text-Moderate-cyan font-semibold mt-0">
                {item.pledge}
              </p>
            </div>
          </div>
          <p className="text-Dark-gray mt-5">{item.description}</p>
          <div className="mb-5 md:flex md:justify-between md:items-center mt-5">
            <p className="font-extrabold text-4xl mt-5">
              {item.left}{" "}
              <span className="text-Dark-gray text-lg font-semibold">left</span>
            </p>
          </div>

          {selectedCard === item.id && <Pledge />}

          {/* Mostrar el botón solo si el modal no está abierto */}
          {!isModalOpen && (
            <BtnProjects name="Select Reward" onClick={handleBtnClick} />
          )}
        </div>
      ))}

      {/* Pasa el estado y la función para abrir y cerrar el modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col text-left gap-5">
            <h2 className="text-Black font-bold text-2xl">Back this project</h2>
            <button
              className="text-xl font-bold text-Dark-gray absolute top-6 right-4 cursor-pointer"
              onClick={() => setIsModalOpen(false)} // Cierra el modal
            >
              X
            </button>
            <p className="text-Dark-gray text-sm">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
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
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Cards;
