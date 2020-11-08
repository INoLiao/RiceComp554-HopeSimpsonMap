import React from "react";
import './Team.css';
import Profile from "./Profile";
import profiles from "./ProfileDatabase";

const RICE_IMAGE_PATH = '/assets/rice.jpeg';

function Team() {

  // Sort names alphabetically except Professor Simar
  const sortedProfiles = [
    ...profiles.slice(0, 1),
    ...profiles.slice(1)
      .sort((a, b) => (a.name > b.name) ? 1 : -1)];

  return (
    <div>
      <img src={ RICE_IMAGE_PATH } alt="" className="img-fluid"/>
      <div className="team-container container">
        <div className="row">
          {
            sortedProfiles && sortedProfiles.map((profile, index) => (
              <div className="col-md-6" key={ index }>
                <Profile
                  name={ profile.name }
                  avatar={ profile.avatar }
                  title={ profile.title }
                  details={ profile.details }
                  link={ profile.link }
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Team;
