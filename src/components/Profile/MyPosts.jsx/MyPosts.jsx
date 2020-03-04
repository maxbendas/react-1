import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
        <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>

        <Post message='hey hey hey' count='15' />
        <Post message='go go go' count='20' />
          <Post message='go go go' count='20' />
      </div>
    </div>
  )
}

export default MyPosts;