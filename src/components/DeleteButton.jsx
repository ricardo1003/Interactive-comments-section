import { useState } from "react";

export function DeleteButton({
  NofComment,
  isReply,
  deleteComment,
  parentComment,
  setDCStyles,
}) {
  const handleDeleted = () => {
      setDCStyles(
        "fixed w-[100vw] h-[100vh] bg-black/50 left-0 top-0 flex justify-center items-center backdrop-blur-[2.5px] z-10"
      );
  };
  return (
    <button
      className="text-SoftRed font-medium flex items-center gap-1 mr-2 hover:opacity-50 "
      onClick={handleDeleted}
    >
      <img src="./assets/images/icon-delete.svg" />
      Delete
    </button>
  );
}
