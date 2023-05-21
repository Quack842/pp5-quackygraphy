import React, { useState } from "react";

import {
  Card,
  OverlayTrigger,
  Tooltip,
  Modal,
  Button,
  Toast,
} from "react-bootstrap";

import Avatar from "../../components/Avatar";

import { MoreDropdown } from "../../components/MoreDropdown";

import styles from "../../assets/styles/Post.module.css";
import btnStyles from "../../assets/styles/Buttons.module.css";

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
  // This will remove the "_" in the posted data and replace it with a space
    const formatType = (type) => {
      return type.replace(/_/g, " ");
    };

  const [show, setShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    navigate(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      navigate("/");
      // Refresh the page
      window.location.reload(); 
    } catch (error) {}
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
      setToastShow(true);
    } catch (error) {}
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
    } catch (error) {}
  };

  return (
    <>
      <Toast
        onClose={() => setToastShow(false)}
        show={toastShow}
        delay={2000}
        autohide
        className={styles.Toast}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Post Liked!</strong>
        </Toast.Header>
        <Toast.Body>You Liked A Most!</Toast.Body>
      </Toast>
      <Card className={styles.Post}>
        <Card.Header className={styles.Header}>
          <div className={`${styles.Font} align-items-center d-flex`}>
            {/* Avatar of the user who post it is */}
            <Link to={`/profiles/${profile_id}`} className="flex-fill">
              <Avatar src={profile_image} height={55} />
              {owner}
            </Link>

            {/* When the user post/edited the post */}
            <div className="justify-content-end d-flex">
              <span>{updated_at}</span>
              &nbsp;
              {is_owner && (
                <MoreDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleShow}
                />
              )}
            </div>
          </div>
          <div className="text-center">
            {/* Title Of the Post */}
            {title && <Card.Title className="m-auto">{title}</Card.Title>}
            <div className="d-flex">
              {/* Camera Type of the user, if selected */}
              {camera_type && (
                <Card.Text className={`${styles.Text} flex-fill m-auto`}>
                  <i className={`${styles.Icons} fa-solid fa-camera`}></i>{" "}
                  <br />
                  {formatType(camera_type)}
                </Card.Text>
              )}
              {/* Photo type of the user, if selected */}
              {photo_type && (
                <Card.Text className={`${styles.Text} flex-fill m-auto`}>
                  <i className={`${styles.Icons} fa-regular fa-images`}></i>{" "}
                  <br />
                  {formatType(photo_type)}
                </Card.Text>
              )}
            </div>
          </div>
        </Card.Header>
        {/* Image that the user posted */}
        <Link to={`/posts/${id}`}>
          <Card.Img className={styles.Image} src={image} alt={title} />
        </Link>
        <Card.Footer className={styles.Footer}>
          {/* The content the user added to the post */}
          {content && <Card.Text>{content}</Card.Text>}
          {/* Like Button if it is users own post */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="fa-solid fa-fire me-2" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              {/* Unlike button if Clicked */}
              <i className={`fa-solid fa-fire me-2 ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              {/* Like button if Clicked */}
              <i className={`fa-solid fa-fire me-2 ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              {/* When no user is signed in */}
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

      {/* Pop-up Modal for Delete Confimation */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className={styles.ModalHeader} closeButton>
          <Modal.Title>Are You Sure!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-align-center m-auto">
          Are you sure you want to delete this Post? This Post will be
          deleted forever.
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`${btnStyles.ButtonCancel} m-auto`}
            onClick={handleClose}
          >
            Nah
          </Button>
          <Button
            className={`${btnStyles.ButtonBlue} m-auto`}
            onClick={handleDelete}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Post;
