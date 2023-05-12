import React from "react";

import profileStyle from "../../assets/styles/Profiles.module.css";

import { Container } from "react-bootstrap";

import Asset from "../../components/Asset";

import { useProfileData } from "../../context/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container>
      <p>Popular Profiles</p>
      <Container
        className={`${profileStyle.Profile} ${
          mobile && "d-lg-none text-center mb-3"
        } text-capitalize`}
      >
        {mobile ? (
          <div className="d-flex justify-content-around text-capitalize">
            {popularProfiles.results.slice(0, 4).map((profile) => (
              <Profile key={profile.id} profile={profile} mobile />
            ))}
          </div>
        ) : popularProfiles.results.length ? (
          <>
            {popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))}
          </>
        ) : (
          <Asset spinner />
        )}
      </Container>
    </Container>
  );
};

export default PopularProfiles;
