import React from "react";

import styles from "../../assets/styles/Profiles.module.css";

import { useCurrentUser } from "../../context/CurrentUserContext";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import Avatar from "../../components/Avatar";
import { useSetProfileData } from "../../context/ProfileDataContext";

const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const {handleFollow} = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center flex-fill" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak} flex-fill`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button className={styles.Button} onClick={() => {}}>
              Unfollow
            </Button>
          ) : (
            <Button className={styles.ButtonBlue} onClick={() => handleFollow(profile)}>
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
