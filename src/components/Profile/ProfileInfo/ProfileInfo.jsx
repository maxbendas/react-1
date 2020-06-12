import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
  return (
    <div className={s.content}>
      <div className={s.descriptionBlock}>
          <img className={s.logo} src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>

    </div>
  )
}

export default ProfileInfo;