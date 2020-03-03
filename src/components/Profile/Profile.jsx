import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts.jsx/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cdn.beach-inspector.com/static/awards/lp-header.jpg?w=1200&h=400&fit=crop" />
      </div>
      <div>
        <img className={s.logo} src="https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg" />
        descr
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;