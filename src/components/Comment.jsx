import { Score } from "./Score";
import { currentUser as current } from "../data/data.json";
import { DeleteButton } from "./DeleteButton";
import { ReplyButton } from "./ReplyButton";
import { NewMessage } from "./NewMessage";
import { useState } from "react";
import { EditButton } from "./EditButton";

export function Comment({
  profilePicture,
  author,
  createdAt,
  score,
  content,
  id,
  children,
  hasComments,
  replyingTo,
  NofComment,
  isReply,
  deleteComment,
  parentComment,
  length,
  user,
  onAddComment,
  thisComment,
}) {
  const [isShown, setIsShown] = useState(false);

  const showReplyBox = (isShown) => {
    setIsShown(isShown);
  };

  const [commentStyles, setStyles] = useState("text-GrayishBlue");

  const hideComment = (style) => {
    setStyles(style);
  };

  const [editingStyles, setEditingStyles] = useState("hidden");

  const showEditable = (style) => {
    setEditingStyles(style);
  };

  const [commentContent, setContent] = useState(content)
  
  let newContent = ""

  const handleTextChange = (event) =>{
    newContent = event.target.value
  }

  const updateComment = ()=>{
    hideComment("text-GrayishBlue") //reversing, it now shows it
    showEditable("flex flex-col items-end gap-4 hidden") // and this one hides
    setContent(newContent)
  }
  
  return (
    <section className="flex flex-col gap-4">
      <section className="bg-white rounded-xl p-6 flex">
        <Score score={score} id={id} />
        <div className="mainInfo flex flex-col gap-2 w-[100%]">
          <div className="user flex gap-2 items-center">
            <img
              src={profilePicture}
              alt={author}
              className="w-8 aspect-square block"
            />
            <h3 className="font-bold text-DarkBlue">{author}</h3>
            {current.username === author ? (
              <p className="bg-ModerateBlue text-white px-2 rounded-sm text-sm">
                you
              </p>
            ) : (
              <></>
            )}
            <p className="text-GrayishBlue mr-auto">{createdAt}</p>
            {current.username !== author ? (
              <ReplyButton
                showReplyBox={showReplyBox}
                NofComment={NofComment}
              ></ReplyButton>
            ) : (
              <>
                <DeleteButton
                  parentComment={parentComment}
                  NofComment={NofComment}
                  isReply={isReply}
                  deleteComment={deleteComment}
                ></DeleteButton>
                <EditButton
                  showEditable={showEditable}
                  hideComment={hideComment}
                  thisComment={thisComment}
                  NofComment={NofComment}
                  id={id}
                  isReply={isReply}
                >
                </EditButton>
              </>
            )}
          </div>
          <p
            className={commentStyles}
            id={`commentBody#${NofComment}${isReply}`}
          >
            {isReply ? <b className="text-ModerateBlue">@{replyingTo} </b> : ""}
            {commentContent}
          </p>
          <form action="editing" className={editingStyles}>
            <textarea
              defaultValue={commentContent}
              name="editing"
              id={`editing${id}`}
              className="w-[100%] py-2 px-4 rounded-md border-[1px] border-solid border-GrayishBlue/50"
              onChange={handleTextChange}
            ></textarea>
            <button
              type="button"
              className="bg-ModerateBlue text-white px-6 py-2 rounded-md"
              onClick={updateComment}
            >
              UPDATE
            </button>
          </form>
        </div>
      </section>
      <NewMessage
        showReplyBox={showReplyBox}
        parentComment={parentComment}
        isReply={isReply}
        NofComment={NofComment}
        isShown={isShown}
        length={length}
        user={user}
        type={"reply"}
        onAddComment={onAddComment}
        receptorUser={author}
      ></NewMessage>
      {hasComments ? (
        <div className="flex flex-row">
          <div className="self-stretch w-[2px] bg-black/10 block mx-8"></div>
          <article className="flex flex-col gap-4 w-[100%]">{children}</article>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
