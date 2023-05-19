import React, { useEffect, useState } from "react";

import {Alert, Button, Container, Row, Col, Form } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefault";
import { useCurrentUser } from "../../context/CurrentUserContext";

import styles from "../../assets/styles/ProfileEditForm.module.css";
import btnStyles from "../../assets/styles/Buttons.module.css";

const UserPasswordForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      navigate("/");
    }
  }, [currentUser, navigate, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      // Use -1 instead of history.goBack
      navigate(-1);
      
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <>
      <Row>
        <Col className="py-2 mx-auto text-center" md={6}>
          <Container className={`${styles.Container} m-auto text-center`}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>New password</Form.Label>
                <Form.Control
                  placeholder="New password"
                  type="password"
                  value={new_password1}
                  onChange={handleChange}
                  name="new_password1"
                />
              </Form.Group>
              {errors?.new_password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  placeholder="Confirm New Password"
                  type="password"
                  value={new_password2}
                  onChange={handleChange}
                  name="new_password2"
                />
              </Form.Group>
              {errors?.new_password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Button
                className={btnStyles.ButtonCancel}
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button className={btnStyles.Button} type="submit">
                Save
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default UserPasswordForm;
