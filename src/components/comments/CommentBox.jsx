const CommentBox = ({ data }) => {
  return data.map((comment, index) => (
    <div key={index} className="flex pl-4 my-4 border-l">
      <img
        className="w-10 h-10"
        src="https://styles.redditmedia.com/t5_7moa1s/styles/communityIcon_gqjf6knu4e7a1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=baa45edb9b2cb7040f43c302f89341151397c272"
        alt=""
      />
      <div className="pl-2">
        <h2 className="font-bold">{comment.autohr}</h2>
        <p>{comment.comment}</p>
        <div>{comment.replies && <CommentBox data={comment.replies} />}</div>
      </div>
    </div>
  ));
};

export default CommentBox;
