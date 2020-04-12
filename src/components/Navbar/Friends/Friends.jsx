import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendElements = props.friends.map(f => <Friend name={f.name}/>);
  return (
    <div>
      <div className={s.friends}>
        Friends:
      </div>
      <div>
        {friendElements}
      </div>
    </div>
  )
}

export default Friends;