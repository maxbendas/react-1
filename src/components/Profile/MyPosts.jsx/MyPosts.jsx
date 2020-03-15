import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'hey hey hey', countLikes: 12},
    {id: 2, message: 'go go go', countLikes: 15},
    {id: 3, message: 'hi hi hi', countLikes: 2},
    {id: 4, message: 'ho ho ho', countLikes: 10}
  ]

  let postsElements = posts.map(p=><Post message={p.message} countLikes={p.countLikes} />)

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
        <div>
          <div>
        <textarea></textarea>
            </div>
          <div>
            <button>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;