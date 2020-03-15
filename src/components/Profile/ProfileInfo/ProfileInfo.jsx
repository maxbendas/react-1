import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cdn.beach-inspector.com/static/awards/lp-header.jpg?w=1200&h=400&fit=crop" />
      </div>
      <div className={s.descriptionBlock}>
        <img className={s.logo} src="https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg" />
        descr
      </div>

    </div>
  )
}

export default ProfileInfo;