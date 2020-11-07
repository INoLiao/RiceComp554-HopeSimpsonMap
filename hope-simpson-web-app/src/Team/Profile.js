import React from "react";
import './Team.css';

function Profile({ name, avatar, title, details, link }) {
  return (
    <div className="team-profile-box d-flex flex-nowrap">
      <div className="team-profile-avatar-box align-self-center">
        {
          link && link.length > 0
            ? (
              <a href={ link } target="_blank" rel="noopener noreferrer">
                <img src={ avatar } alt="" className="team-profile-avatar rounded-circle" />
              </a>
            )
            : <img src={ avatar } alt="" className="team-profile-avatar rounded-circle" />
        }
      </div>
      <div className="team-profile-info-box align-self-center">
        <div className="team-profile-info-name">{ name }</div>
        <div className="team-profile-info-title lead mb-1">{ title }</div>
        <div className="team-profile-info-details">{ details }</div>
      </div>
    </div>
  );
}

export default Profile;
