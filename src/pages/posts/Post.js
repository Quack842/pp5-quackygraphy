import React from "react";
import styles from "../../assets/styles/Post.module.css";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";

import { useCurrentUser } from "../../context/CurrentUserContext";
import { Link, useNavigate } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefault";

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
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Header className={styles.Header}>
        <div className="align-items-center d-flex">
          <Link to={`/profiles/${profile_id}`} className="flex-fill">
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="justify-content-end d-flex">
            <span>{updated_at}</span>
            &nbsp;
            {is_owner && (
              <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete} />
            )}
          </div>
        </div>
        <div className="text-center d-flex">
          {title && (
            <Card.Title className="flex-fill m-auto">{title}</Card.Title>
          )}
          {camera_type && (
            <Card.Text className={`${styles.Text} flex-fill m-auto`}>
              <i className={`${styles.Icons} fa-solid fa-camera`}></i>{" "}
              {camera_type}
            </Card.Text>
          )}
          {photo_type && (
            <Card.Text className={`${styles.Text} flex-fill m-auto`}>
              <i className={`${styles.Icons} fa-regular fa-images`}></i>{" "}
              {photo_type}
            </Card.Text>
          )}
        </div>
      </Card.Header>
      <Link>
        <Card.Img className={styles.Image} src={image} alt={title} />
      </Link>
      <Card.Footer className={styles.Footer}>
        {content && <Card.Text>{content}</Card.Text>}
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>You can't like your own post!</Tooltip>}
          >
            <i className="fa-solid fa-fire me-2" />
          </OverlayTrigger>
        ) : like_id ? (
          <span onClick={handleUnlike}>
            <i className={`fa-solid fa-fire me-2 ${styles.Heart}`} />
          </span>
        ) : currentUser ? (
          <span onClick={handleLike}>
            <i className={`fa-solid fa-fire me-2 ${styles.HeartOutline}`} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Log in to like posts!</Tooltip>}
          >
            <i className="fa-solid fa-fire me-2" />
          </OverlayTrigger>
        )}
        {likes_count}
        &nbsp;&nbsp;
        <Link to={`/posts/${id}`}>
          <i className="fa-brands fa-rocketchat me-2" />
        </Link>
        {comments_count}
      </Card.Footer>
    </Card>
  );
};

export default Post;
