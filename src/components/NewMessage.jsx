import { useState } from "react";



export function NewMessage({user}) {
  return (
    <form action="newMessage" className="bg-white rounded-xl p-6 flex gap-2 justify-between items-start">
      <img src={user.image.png} alt={user.username} className="h-10"/>
      <textarea name="newComment" id="" placeholder="Add a comment..." className="w-[100%] py-2 px-4 rounded-md border-[1px] border-solid border-GrayishBlue/50"></textarea>
      <button type="button" className="bg-ModerateBlue text-white px-6 py-2 rounded-md">SEND</button>
    </form>
  );
}
