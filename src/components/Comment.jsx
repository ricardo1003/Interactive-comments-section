import { Score } from "./Score";
import { currentUser as current } from "../data/data.json";
import { DeleteButton } from "./DeleteButton";
import { ReplyButton } from "./ReplyButton";
import { NewMessage } from "./NewMessage";
import { useState } from "react";
import { EditButton } from "./EditButton";
import { DeleteConfirmation } from "./deleteConfirmation";

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

  const [commentContent, setContent] = useState(content);

  let newContent = content;

  const handleTextChange = (event) => {
    newContent = event.target.value;
  };

  const updateComment = () => {
    hideComment("text-GrayishBlue"); //reversing, it now shows it
    showEditable("flex flex-col items-end gap-4 hidden"); // and this one hides
    setContent(newContent);
  };

  const [deleteConfirmationStyles, setDCStyles] = useState(
    "fixed w-[100vw] h-[100vh] bg-black/50 left-0 top-0 flex justify-center items-center backdrop-blur-25 hidden"
  );

  return (
    <section className="flex flex-col gap-4">
      <section className="bg-white rounded-xl p-6 flex max-tn:flex-col-reverse relative">
        <Score score={score} id={id} NofComment={NofComment} length={length} />
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
            <div className="flex max-tn:absolute max-tn:right-6 max-tn:bottom-6">
              {current.username !== author ? (
                <ReplyButton
                  showReplyBox={showReplyBox}
                  NofComment={NofComment}
                ></ReplyButton>
              ) : (
                <>
                  <DeleteButton
                    setDCStyles={setDCStyles}
                    parentComment={parentComment}
                    NofComment={NofComment}
                    isReply={isReply}
                    deleteComment={deleteComment}
                  ></DeleteButton>
                  <DeleteConfirmation
                    setDCStyles={setDCStyles}
                    deleteConfirmationStyles={deleteConfirmationStyles}
                    parentComment={parentComment}
                    NofComment={NofComment}
                    isReply={isReply}
                    deleteComment={deleteComment}
                  ></DeleteConfirmation>
                  <EditButton
                    showEditable={showEditable}
                    hideComment={hideComment}
                    thisComment={thisComment}
                    NofComment={NofComment}
                    id={id}
                    isReply={isReply}
                  ></EditButton>
                </>
              )}
            </div>
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
              className={
                "w-[100%] py-2 px-4 rounded-md border-[1px] border-solid border-GrayishBlue/50 focus:border-ModerateBlue focus:border-[2px] focus:outline-none"
              }
              onChange={handleTextChange}
            ></textarea>
            <button
              type="button"
              className="bg-ModerateBlue text-white px-6 py-2 rounded-md hover:opacity-50"
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
          <div className="self-stretch w-[2px] bg-black/10 block mx-8 max-tn:mx-[2.5%] max-tn:ml-0"></div>
          <article className="flex flex-col gap-4 w-[100%]">{children}</article>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
