import { Score } from "./Score";
import { currentUser as current } from "../data/data.json";

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
}) {
  return (
    <section className="flex flex-col gap-4">
      <section className="bg-white rounded-xl p-6 flex">
        <Score score={score} id={id} />
        <div className="mainInfo flex flex-col gap-2">
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
            {current.username === author ? (
              <button className="text-SoftRed font-medium flex items-center gap-1 mr-2 hover:opacity-50">
                <img src="../src/assets/images/icon-delete.svg"/>Delete
              </button>
            ) : (
              <></>
            )}
            {current.username !== author ? (
            <button className="flex text-ModerateBlue items-center gap-2 font-bold hover:opacity-50">
              <img src="../src/assets/images/icon-reply.svg" alt="reply" />
              Reply
            </button>) : (
              <button className="flex text-ModerateBlue items-center gap-2 font-bold hover:opacity-50">
              <img src="../src/assets/images/icon-edit.svg" alt="edit" />
              Edit
            </button>
            )}
          </div>
          <p className="text-GrayishBlue">
          {replyingTo !== undefined ? (
              <b className="text-ModerateBlue">@{replyingTo} </b>
            ) : (
              ""
            )}
            {content}
          </p>
        </div>
      </section>
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
