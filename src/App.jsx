import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Comment } from "./components/comment";
import { comments as data } from "./data/data.json";
import { currentUser as current } from "./data/data.json"
import { NewMessage } from "./components/NewMessage";
import { comment } from "postcss";

function App() {
  const [comments, setComments] = useState([])

  useEffect(()=>{
    setComments(data)
  }, [])

  const addNewComment = (newComment)=>{
    comments.push(newComment)
  }

  let repliesLength = []

  return (
    <>
      <main className="flex flex-col max-w-[750px] mx-auto gap-4">
        {comments.map((comment, index) => (
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
                 />
            ))}
          {/* {console.log(comments.length + 1)}
          {console.log(comments.length)}
          {console.log(comments)} */}
          {repliesLength[index] = comment.replies.length}
          {console.log(repliesLength)}
          </Comment>
        ))}
        <NewMessage
          lenght={comments.length + repliesLength.reduce((a,b) => a+b, 0)}
          user={current}
          onAddComment={addNewComment}
        ></NewMessage>
      </main>
    </>
  );
}

export default App;
