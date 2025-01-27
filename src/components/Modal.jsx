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
      className="fixed inset-0 absolute top-20 left-11 z-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg w-72 p-6 max-h-[80vh] overflow-y-auto relative md:w-[720px] md:left-[-21px] md:top-20 lg:w-[980px] xl:left-27 xxl:transform xxl:-translate-x-[-75px] 2xl:left-58 3xl:transform 3xl:-translate-x-[-190px] 3xl:-translate-y-20">
        {children}
      </div>
    </div>
  );
};

export default Modal;
