import { React, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DuckyImage from "../../assets/images/duck-img-3.jpg";

import styles from "../../assets/styles/SignInRegister.module.css";
import appStyles from "../../App.module.css";

import {
  Image,
  Col,
  Row,
  Container,
  Form,
  Button,
  Overlay,
  Tooltip,
  Alert,
} from "react-bootstrap";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";

const RegisterForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { username, password, confirmPassword } = signUpData;

  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      console.log("IN THE TRY BLOCK");
      navigate.push("/signin");
    } catch (error) {
      setErrors(error.response?.data);
      console.log(error);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1>Register</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
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

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={handleChange}
              />
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={ confirmPassword }
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group ref={target} onClick={() => setShow(!show)}>
              <i className="fa-solid fa-circle-question"></i> Click For a Hint
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-hint" {...props}>
                    <PasswordChecklist
                      rules={[
                        "minLength",
                        "specialChar",
                        "number",
                        "capital",
                        "match",
                      ]}
                      minLength={5}
                      value={password}
                      valueAgain={confirmPassword}
                    />
                  </Tooltip>
                )}
              </Overlay>
            </Form.Group>
            <br />
            <Button className={styles.Button} variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Container>
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
        <Image className={`${appStyles.FillerImage}`} src={DuckyImage} />
      </Col>
    </Row>
  );
};

export default RegisterForm;
