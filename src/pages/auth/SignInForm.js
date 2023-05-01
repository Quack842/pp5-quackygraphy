import {React, useState} from "react";

import {
  Form,
  Alert,
  Button,
  Col,
  Row,
  Image,
  Container,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import styles from "../../assets/styles/SignInRegister.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { username, password } = signInData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      navigate("/");
      console.log("redirect successfull")
    } catch (err) {}
  };
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
            <Form.Control 
                        type="text" 
                        placeholder="Username"
                        name="username" 
                        className={styles.Input}
                        value={username}
                        onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        className={styles.Input}
                        value={password}
                        onChange={handleChange}
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/register">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"}
        />
      </Col>
    </Row>
  );
};

export default SignInForm;
