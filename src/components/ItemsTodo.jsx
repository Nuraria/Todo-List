import React from "react";
import Tick from "../assets/tick-circle-svgrepo-com.svg";
import not_tick from "../assets/radio-svgrepo-com.svg";
import delete_tick from "../assets/delete-svgrepo-com.svg";

const ItemsTodo = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          className="w-7"
          src={isComplete ? Tick : not_tick}
          alt="radio_icon"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through " : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        className="w-4 cursor-pointer"
        src={delete_tick}
        alt="delete"
      />
    </div>
  );
};

export default ItemsTodo;
