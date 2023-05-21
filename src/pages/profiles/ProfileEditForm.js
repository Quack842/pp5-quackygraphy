import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Form,
  Button,
  Image,
  Row,
  Col,
  Container,
  Alert,
} from "react-bootstrap";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../context/CurrentUserContext";

import styles from "../../assets/styles/ProfileEditForm.module.css";
import btnStyles from "../../assets/styles/Buttons.module.css";

import { axiosReq } from "../../api/axiosDefault";

const ProfileEditForm = () => {
  const [errors, setErrors] = useState({});

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    camera_type: "",
    image: "",
  });
  const { name, camera_type, content,  image } = profileData;

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, camera_type, content,  image } = data;
          setProfileData({ name, camera_type, content,  image });
        } catch (error) {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };

    handleMount();
  }, [currentUser, navigate, id]);

  const handleCameraTypeChange = (event) => {
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      camera_type: event.target.value,
    }));
  };
  
  const handleBioChange = (event) => {
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      content: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("camera_type", camera_type);
    formData.append("content", content);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      navigate(-1);
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  const textFields = (
    <div className="text-center">
      {/* Title */}
      <Form.Group className="mb-3 mt-3" controlId="title">
        {/* Preferred Camera Type  */}
        <Form.Label className={styles.FontLabel}>Preferred Camera</Form.Label>
        <Form.Select
          value={camera_type}
          name="camera_type"
          className="mb-3"
          onChange={handleCameraTypeChange}
          aria-label="Camera Type"
          rows={7}
        >
          <option>Click To Select</option>
          <option value="dslr_camera">DSLR Camera</option>
          <option value="mirrorless_camera">Mirrorless Camera</option>
          <option value="bridge_camera">Bridge Camera</option>
          <option value="compact_digital_camera">Compact Digital Camera</option>
          <option value="smartphone">Smartphone</option>
        </Form.Select>
        {/* The Bio */}
        <Form.Label className={styles.FontLabel}>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleBioChange}
          name="content"
          rows={7}
        />
      </Form.Group>
      {/* The Error andler for Invalid Content */}
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {/* Buttons */}
      <Button className={btnStyles.ButtonCancel} onClick={() => navigate(-1)}>
        Cancel
      </Button>
      <Button type="submit" className={btnStyles.Button}>
        Save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col
          className={`${styles.Container} py-2 p-0 p-md-2 text-center`}
          md={6}
        >
          <Container>
            {/* The user Image */}
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {/* The error for invalid image selected */}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                {/* Button for changing the image */}
                <Form.Label
                  className={`${btnStyles.ButtonBlue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.Control
                id="image-upload"
                className="d-none"
                type="file"
                accept="image/*"
                ref={imageFile}
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={1}></Col>
        <Col
          md={5}
          className={`${styles.Container} d-none d-md-block p-0 p-md-2 text-center`}
        >
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
