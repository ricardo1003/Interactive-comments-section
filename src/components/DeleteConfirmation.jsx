import { useState } from "react";

export function DeleteConfirmation({
  deleteConfirmationStyles,
  parentComment,
  NofComment,
  isReply,
  deleteComment,
  setDCStyles,
}) {
  const hideBox = () => {
    setDCStyles(
      "fixed w-[100vw] h-[100vh] bg-black/50 left-0 top-0 flex justify-center items-center backdrop-blur-25 hidden"
    );
  };

  const handleDeleted = () => {
    if (!isReply) {
      deleteComment(NofComment, false, parentComment);
    } else {
      deleteComment(NofComment, true, parentComment);
    }
  };
  return (
    <div className={deleteConfirmationStyles}>
      <div className="bg-white w-[375px] p-6 rounded-md">
        <h3 className="text-xl font-semibold text-DarkBlue mb-4">
          Delete Comment
        </h3>
        <p className="text-GrayishBlue">
          Are you sure you want to delete this comment? This will remove thte
          comment and can't be undone
        </p>
        <ul className="flex justify-between gap-2 mt-4">
          <li className="text-white bg-GrayishBlue p-2 w-[100%] text-center rounded-md">
            <button onClick={hideBox}>NO, CANCEL</button>
          </li>
          <li className="text-white bg-SoftRed p-2 w-[100%] text-center rounded-md">
            <button onClick={handleDeleted}>YES, DELETE</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
