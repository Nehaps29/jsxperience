import { useState } from "react";
import CommentForm from "../CommentForm";
import { Card, CardHeader, CardBody, Heading, Center, Stack, StackDivider, Box} from '@chakra-ui/react'
const PostCard = ({post}) => {
    const [showCommentForm, setShowCommentForm] = useState(false);

    const handleAddComment = () => {
   
        console.log('handleAddComment called');
     
        setShowCommentForm(!showCommentForm);    
      };
    return (
        
        <Card key={post._id} className="blogpostcard" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardHeader>
         <Heading >{post.postTitle}</Heading> 
         </CardHeader>

         <CardBody> 
         <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <p className="text-black"> {post.postBody}</p>
         <p className="card-body bg-light p-2">Author: {post.postAuthor}</p>
         </Box>
         <Box>
         <Heading className="pl-2" size="md">Comments</Heading> 
          <div className="border border-black">
            
          {post.comments.map(comment=>(
           
              <p className="card-body bg-light p-2">{comment.commentText} by {comment.commentAuthor}</p>
             
             ))}
        </div>
        </Box>
         
          <Center h="25px">
          <button className="p-2 commentbutton"onClick={handleAddComment}>{showCommentForm ? "Hide Comment Form":"Add Comment"}</button>
          </Center>
          
          {showCommentForm && (
        <CommentForm postId={post._id} onClose={() => setShowCommentForm(false)} />
        )}
        </Stack> 
        </CardBody>
        </Card>
       

    )
}

export default PostCard