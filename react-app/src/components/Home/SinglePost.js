import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import React from 'react';
import './SinglePost.css';

export default function SinglePost({ post }) {
   const history = useHistory();
   // const user = useSelector(state => state.session.user);

   const onClick = () => {

      console.log('Clicked on post with id:', post.id);
      console.log('Photo ID:', post.photoId);

      history.push(`/posts/${post.id}`);
      // history.push(`/posts/${post.photoId}`);
   }

   const photoUrl = useSelector(state => {
      const photoId = state.posts.allPosts[post.id]?.photoId;
      return state.posts.allPosts[photoId]?.photoUrl || '';
   });

   return (
      <div onClick={onClick}>
         <div className="post-container">
            <div className="photo">
               <div>
                     <img className='post-photo' src={photoUrl} alt={post.title} />
               </div>
            </div>
         </div>
      </div>
   );
}
