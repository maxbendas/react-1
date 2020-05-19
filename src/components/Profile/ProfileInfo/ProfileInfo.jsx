import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
  return (
    <div className={s.content}>
        {/*<div>
        <img src="https://cdn.beach-inspector.com/static/awards/lp-header.jpg?w=1200&h=400&fit=crop" />
      </div>*/}
      <div className={s.descriptionBlock}>
          <img className={s.logo} src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>

    </div>
  )
}

export default ProfileInfo;