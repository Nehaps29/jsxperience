import { useState } from "react";
import CommentForm from "../CommentForm";

const PostCard = ({post}) => {
    const [showCommentForm, setShowCommentForm] = useState(false);

    const handleAddComment = () => {
   
        console.log('handleAddComment called');
     
        setShowCommentForm(!showCommentForm);    
      };
    return (
        <div key={post._id} className="card mb-3">
          <h3 className="card-header bg-primary text-light p-2 m-0">{post.postTitle}</h3>
          <p className="text-black"> {post.postBody}</p>
          <p className="card-body bg-light p-2">Author: {post.postAuthor}</p>
          <h4>Comments</h4>
          <div className="border border-black">
          {post.comments.map(comment=>(
              <p className="card-body bg-light p-2">{comment.commentText} by {comment.commentAuthor}</p>
              ))}
        </div>
         
          <hr />
          <button onClick={handleAddComment}>{showCommentForm ? "Hide Comment Form":"Add Comment"}</button>
          {showCommentForm && (
        <CommentForm postId={post._id} onClose={() => setShowCommentForm(false)} />
        )}
        </div>
    )
}

export default PostCard