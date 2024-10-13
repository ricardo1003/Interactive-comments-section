import { Score } from "./Score";

export function Comment({
  profilePicture,
  author,
  createdAt,
  score,
  content,
  id
}) {
  return (
    <section className="bg-white rounded-xl p-6 flex">
      <Score score={score} id={id} />
      <div className="mainInfo flex flex-col gap-2">
        <div className="user flex gap-2">
          <img
            src={profilePicture}
            alt={author}
            className="w-8 aspect-square block"
          />
          <h3 className="font-bold text-DarkBlue">{author}</h3>
          <p className="text-GrayishBlue">{createdAt}</p>
          <button className="flex text-ModerateBlue ml-auto items-center gap-2 font-bold">
            <img src="../src/assets/images/icon-reply.svg" alt="reply" />
            Reply
          </button>
        </div>
        <p className="text-GrayishBlue">{content}</p>
      </div>
    </section>
  );
}
