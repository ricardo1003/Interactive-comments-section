import { useState } from "react";

export function DeleteButton({
  NofComment,
  isReply,
  deleteComment,
  parentComment,
}) {
  const handleDeleted = () => {
    console.log(NofComment);
    if (!isReply) {
      deleteComment(NofComment, false, parentComment);
    } else {
      deleteComment(NofComment, true, parentComment);
    }
  };
  return (
    <button
      className="text-SoftRed font-medium flex items-center gap-1 mr-2 hover:opacity-50"
      onClick={handleDeleted}
    >
      <img src="../src/assets/images/icon-delete.svg" />
      Delete
    </button>
  );
}
