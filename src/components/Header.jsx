import { useState } from "react";
import Modal from "./Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative bg-[url(/images/image-hero-mobile.jpg)] bg-cover bg-center h-[300px] flex justify-between p-5">
      {isModalOpen && <div className="fixed inset-0 opacity-80 z-40"></div>}
      <h2 className="text-3xl text-white font-bold relative z-50">crowdfund</h2>
      <div className="p-4 relative z-50">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="cursor-pointer"
        >
          <img
            src={
              isModalOpen
                ? "/images/icon-close-menu.svg"
                : "/images/icon-hamburger.svg"
            }
            alt="menu icon"
          />
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-10">
            <a href="#" className="text-Black font-bold text-xl">
              About
            </a>
            <a href="#" className="text-Black font-bold text-xl">
              Discover
            </a>
            <a href="#" className="text-Black font-bold text-xl">
              Get Started
            </a>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
