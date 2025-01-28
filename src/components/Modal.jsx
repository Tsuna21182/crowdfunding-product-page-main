import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Cierra el modal al hacer clic en el fondo
    >
      <div
        className="bg-white rounded-lg shadow-lg w-72 p-6 max-h-[80vh] overflow-y-auto relative md:w-[720px] lg:w-[980px]"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el fondo
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
