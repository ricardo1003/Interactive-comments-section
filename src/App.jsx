import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Comment } from "./components/comment";
import { comments as data } from "./data/data.json";
import { currentUser as current } from "./data/data.json";
import { NewMessage } from "./components/NewMessage";
import { comment } from "postcss";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);

  const addNewComment = (
    newComment,
    type,
    NofComment,
    isReply,
    parentComment
  ) => {
    type === "main"
      ? setComments(comments.push(newComment))
      : isReply
      ? setComments(
          comments[comments.indexOf(parentComment)].replies.push(newComment)
        )
      : setComments(comments[NofComment].replies.push(newComment));
    console.log(NofComment, comments);
  };

  const deleteComment = (comment, isResponse, parentComment) => {
    if (!isResponse) {
      setComments(comments.splice(comment, 1));
      console.log(comments);
    } else {
      setComments(
        comments[comments.indexOf(parentComment)].replies.splice(comment, 1)
      );
      console.log(comments);
    }
  };

  let repliesLength = [];

  return (
    <>
      <main className="flex flex-col max-w-[750px] mx-auto gap-4">
        {comments.map((comment, index) => (
          <Comment
            length={comments.length + repliesLength.reduce((a, b) => a + b, 0)}
            user={current}
            onAddComment={addNewComment}
            deleteComment={deleteComment}
            isReply={false}
            NofComment={comments.indexOf(comment)}
            hasComments={comment.replies.length ? true : false}
            id={`comment#${comment.id}`}
            key={comment.id}
            author={comment.user.username}
            content={comment.content}
            profilePicture={comment.user.image.png}
            createdAt={comment.createdAt}
            score={comment.score}
          >
            <div className="hidden">
              {(repliesLength[index] = comment.replies.length)}
            </div>
            {comment.replies.map((reply) => (
              <Comment
                length={
                  comments.length + repliesLength.reduce((a, b) => a + b, 0)
                }
                user={current}
                onAddComment={addNewComment}
                deleteComment={deleteComment}
                isReply={true}
                parentComment={comment}
                NofComment={comment.replies.indexOf(reply)}
                key={reply.id}
                id={reply.id}
                author={reply.user.username}
                content={reply.content}
                profilePicture={reply.user.image.png}
                createdAt={reply.createdAt}
                score={reply.score}
                replyingTo={comment.user.username}
              />
            ))}
          </Comment>
        ))}
        <NewMessage
          isShown={true}
          type={"main"}
          length={comments.length + repliesLength.reduce((a, b) => a + b, 0)}
          user={current}
          onAddComment={addNewComment}
        ></NewMessage>
      </main>
    </>
  );
}

export default App;
