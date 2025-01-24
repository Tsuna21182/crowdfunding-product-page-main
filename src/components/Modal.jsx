import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-22 left-10 inset-0 bg-transparent z-50">
      <div className="bg-white rounded-lg shadow-lg w-72 p-6 relative">
        {children}
      </div>
    </div>
  );
};

export default Modal;
