import React from "react";
import styles from "../../assets/styles/Post.module.css";
import { Card } from "react-bootstrap";
import Avatar from "../../components/Avatar";

import { useCurrentUser } from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    camera_type,
    photo_type,
    image,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Header className={styles.Header}>
        <div className="align-items-center d-flex">
          <Link to={`/profiles/${profile_id}`} className="flex-fill">
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="justify-content-end">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </div>
      <div className="text-center d-flex">
        {title && <Card.Title className="flex-fill m-auto">{title}</Card.Title>}
        {camera_type && <Card.Text className={`${styles.Text} flex-fill m-auto`}><i className={`${styles.Icons} fa-solid fa-camera`}></i> {camera_type}</Card.Text>}
        {photo_type && <Card.Text className={`${styles.Text} flex-fill m-auto`}><i className={`${styles.Icons} fa-regular fa-images`}></i> {photo_type}</Card.Text>}
      </div>
      </Card.Header>
      <Link>
        <Card.Img className={styles.Image} src={image} alt={title} />
      </Link>
      <Card.Footer>{content && <Card.Text>{content}</Card.Text>}</Card.Footer>
    </Card>
  );
};

export default Post;
