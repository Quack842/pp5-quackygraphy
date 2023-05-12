import React, { useEffect, useState } from "react";

import { Alert, Button, Col, Row, Container, Form } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefault";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../context/CurrentUserContext";

import appStyles from "../../App.module.css";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
        navigate("/");
    }
  }, [currentUser, navigate, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      navigate(-1);
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control
                placeholder="Username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={appStyles.ButtonCancel}
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button
              className={appStyles.Button}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;
