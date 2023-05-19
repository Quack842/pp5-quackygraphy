import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DuckyImage from "../../assets/images/duck-img-3.jpg";

import styles from "../../assets/styles/SignInRegister.module.css";
import btnStyles from "../../assets/styles/Buttons.module.css";
import appStyles from "../../App.module.css";

import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";
import PasswordStrengthBar from "react-password-strength-bar";

const RegisterForm = () => {

  // Controls where user have access to depending on Log in status
  useRedirect("loggedIn");

  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const navigate = useNavigate();
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  // Handles the data when a user registers
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Submits the data when a user registers to the database
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      navigate("/signin");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1>Register</h1>
          <hr />
          {/* The username */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {/* The First Password */}
            <Form.Group className="mb-3" controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Password strength Checker Bar */}
            <PasswordStrengthBar 
              password={password1}
              minLength={8}
              scoreWords={["Weaksause","Still weak", "A little Better", "I Guess that will do", "Unbreakable!"]}
              shortScoreWord="Too Short"
              barColors={["#ddd", "#b20000", "#af00b2", "#0900b2", "#00b24d"]}
            />
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            {/* The Second Password */}
            <Form.Group className="mb-3" controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button type="submit" className={btnStyles.Button}>
              Register
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        {/* If the user already have an account */}
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image className={appStyles.FillerImage} src={DuckyImage} />
      </Col>
    </Row>
  );
};

export default RegisterForm;
