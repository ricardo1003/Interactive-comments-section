import { useState } from "react";

export function NewMessage({
  user,
  onAddComment,
  length,
  isShown,
  type,
  NofComment,
  receptorUser,
  isReply,
  parentComment,
  showReplyBox,
}) {
  const textareaDoc = document.getElementById(
    `addCommentArea${type + NofComment + isReply}`
  );

  const [newComment, setNewComment] = useState("");

  const hideReplyBox = () => {
    type === "main" ? <></> : showReplyBox(false);
  };
  const handlePressed = (event) => {
    if (textareaDoc.value.trim() === "") {
      console.log("pon algo pe");
    } else {
      const comment = {
        id: length + 1,
        content: textareaDoc.value.trim(),
        createdAt: "now",
        score: 0,
        user: {
          image: user.image,
          username: user.username,
        },
        replies: [],
      };
      if (type === "reply") {
        comment.replyingTo = "hola";
      }
      onAddComment(comment, type, NofComment, isReply, parentComment);
    }
  };

  if (isShown) {
    return (
      <form
        action="newMessage"
        className="bg-white rounded-xl p-6 flex gap-2 justify-between items-start max-tn:grid max-tn:grid-cols-2 max-tn:gridrows-2"
      >
        <img
          src={user.image.png}
          alt={user.username}
          className="h-10 max-tn:row-start-2 max-tn:row-end-3"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          name="newComment"
          id={`addCommentArea${type + NofComment + isReply}`}
          placeholder="Add a comment..."
          className="w-[100%] py-2 px-4 rounded-md border-[1px] border-solid border-GrayishBlue/50 focus:border-ModerateBlue focus:border-[2px] focus:outline-none max-tn:col-span-2"
        ></textarea>
        <button
          type="button"
          className="bg-ModerateBlue text-white px-6 py-2 rounded-md hover:opacity-50 w-max place-self-end"
          onClick={() => {
            handlePressed();
            hideReplyBox();
            setNewComment("");
          }}
        >
          {type === "main" ? "SEND" : "REPLY"}
        </button>
      </form>
    );
  } else {
    return <></>;
  }
}
