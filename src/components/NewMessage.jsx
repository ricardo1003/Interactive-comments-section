import { useState } from "react";
import { comments as data } from "../data/data.json";

export function NewMessage({ user, onAddComment,lenght }) {
  const textareaDoc = document.getElementById("addCommentArea");

  const [newComment, setNewComment] = useState("");

  const handlePressed = (event) => {
    event.preventDefault();
    if (textareaDoc.value.trim() === "") {
      console.log("pon algo pe");
    } else {
      const comment = {
        id: `reply#${lenght + 1}`,
        content: textareaDoc.value.trim(),
        createdAt: "now",
        score: 0,
        user: {
          image: user.image,
          username: user.username,
        },
        replies: [],
      };
      console.log(data);
      onAddComment(comment);
      textareaDoc.value = "";
    }
  };

  return (
    <form
      action="newMessage"
      className="bg-white rounded-xl p-6 flex gap-2 justify-between items-start"
      onSubmit={handlePressed}
    >
      <img src={user.image.png} alt={user.username} className="h-10" />
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        name="newComment"
        id="addCommentArea"
        placeholder="Add a comment..."
        className="w-[100%] py-2 px-4 rounded-md border-[1px] border-solid border-GrayishBlue/50"
      ></textarea>
      <button
        type="send"
        className="bg-ModerateBlue text-white px-6 py-2 rounded-md"
      >
        SEND
      </button>
    </form>
  );
}
