import React from "react";

function Action({ isSelected, onSelect }) {
  return (
    <div>
      {/* Controlar el estado seleccionado */}
      <input
        type="radio"
        checked={isSelected}
        onChange={onSelect}
        className="cursor-pointer"
      />
    </div>
  );
}

export default Action;
