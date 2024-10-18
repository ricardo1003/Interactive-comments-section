import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Comment } from "./components/comment";
import { comments as data } from "./data/data.json";

function App() {
  return (
    <>
      <main className="flex flex-col max-w-[750px] mx-auto gap-4">
        {data.map((comment) => (
          <Comment
            hasComments={comment.replies.length ? true : false}
            id={`comment#${comment.id}`}
            key={comment.id}
            author={comment.user.username}
            content={comment.content}
            profilePicture={comment.user.image.png}
            createdAt={comment.createdAt}
            score={comment.score}
          >
            {comment.replies.map((reply) => (
               <Comment
               key={reply.id}
                 id={`reply#${reply.id}`}
                 author={reply.user.username}
                 content={reply.content}
                 profilePicture={reply.user.image.png}
                 createdAt={reply.createdAt}
                 score={reply.score}
                 replyingTo={reply.replyingTo}
                 >
                 {console.log(reply)}
               </Comment>
            ))}
          </Comment>
        ))}
      </main>
    </>
  );
}

export default App;
