import React from "react";

function NewCard(props) {
  return (
    <div
      onClick={props.btnFunc}
      className="border-2 rounded-xl border-compatible w-56 h-40 flex items-center justify-center cursor-pointer"
      id="newCardParent"
    >
      <div>
        <div className="text-center text-6xl font-medium">+</div>
      </div>
    </div>
  );
}

export default NewCard;
