export function ReplyButton({ showReplyBox }) {
  const show = () => {
    showReplyBox(true);
  };

  return (
    <button
      className="flex text-ModerateBlue items-center gap-2 font-bold hover:opacity-50"
      onClick={show}
    >
      <img src="../src/assets/images/icon-reply.svg" alt="reply" />
      Reply
    </button>
  );
}
