import { comment } from "postcss";
import { useState } from "react";

export function EditButton({ thisComment, NofComment, id, isReply, hideComment, showEditable }) {

  const editComment = () => {
    const bodyOfComment = document.getElementById(`commentBody#${NofComment}${isReply}`);
    console.log(bodyOfComment);
    console.log(thisComment);
    console.log(NofComment);
    console.log(id);
    hideComment("text-GrayishBlue hidden")
    showEditable("flex flex-col items-end gap-4")
  };
  return (
    <button
      className="flex text-ModerateBlue items-center gap-2 font-bold hover:opacity-50"
      onClick={editComment}
    >
      <img src="../../src/assets/images/icon-edit.svg" alt="edit" />
      Edit
    </button>
  );
}
