import React, { useState } from "react";
import { Col, Modal, Row, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";

import { MoreDropdown } from "../../components/MoreDropdown";

import styles from "../../assets/styles/Comment.module.css";
import btnStyles from "../../assets/styles/Buttons.module.css";

import { useCurrentUser } from "../../context/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefault";
import CommentEditForm from "./CommentEditForm";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (error) {}
  };

  return (
    <div className={styles.CommentSection}>
      <Row>
        <Col lg={1}>
          {/* Profile Image Of Commenter */}
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} />
          </Link>
        </Col>
        {/* Updated at of Comment */}
        <Col className={styles.Owner} lg={3}>
          {owner}{" "}
          <span className={styles.Updated}>
            &nbsp;
            {updated_at}
          </span>
        </Col>
        {/* Content of the comment */}
        <Col lg={7}>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Col>
        {/* If the user is signed in, Edit and Delete of comment, option */}
        <Col lg={1}>
          {is_owner && !showEditForm && (
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={handleShow}
            />
          )}
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className={styles.ModalHeader} closeButton>
            <Modal.Title >Are You Sure!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-align-center m-auto">
            Are you sure you want to delete this comment? This Comment will be delete forever.
          
          </Modal.Body>
          <Modal.Footer>
            <Button className={`${btnStyles.ButtonCancel} m-auto`} onClick={handleClose}>
              Nah
            </Button>
            <Button className={`${btnStyles.ButtonBlue} m-auto`} onClick={handleDelete}>
              Yes
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Comment;
