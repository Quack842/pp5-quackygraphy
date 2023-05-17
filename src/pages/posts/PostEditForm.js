import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Image,
  Alert,
} from "react-bootstrap";

import styles from "../../assets/styles/PostCreateEditForm.module.css";
import btnStyles from "../../assets/styles/Buttons.module.css";
import appStyles from "../../App.module.css";

import { axiosReq } from "../../api/axiosDefault";

function PostEditForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    camera_type: "",
    photo_type: "",
    content: "",
    image: "",
  });
  const { title, camera_type, photo_type, content, image } = postData;

  const imageInput = useRef(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { title, content, image, camera_type, photo_type, is_owner } =
          data;

        is_owner
          ? setPostData({ title, content, image, camera_type, photo_type })
          : navigate(-1);
      } catch (error) {}
    };

    handleMount();
  }, [navigate, id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("camera_type", camera_type);
    formData.append("photo_type", photo_type);
    formData.append("content", content);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      navigate(`/posts/${id}`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  const textFields = (
    <div className={`${styles.Container} text-center`}>
      {/* Form For Uploading the Image */}

      {/* Title */}
      <Form.Group className="mb-3" controlId="title">
        <Form.Label className={styles.FontLabel}>Text</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {/* Camera Type */}
      <Form.Group>
        <Form.Label className={styles.FontLabel}>Camera Type</Form.Label>
        <Form.Select
          value={camera_type}
          name="camera_type"
          onChange={handleChange}
          className="mb-3"
          aria-label="Camera Type"
        >
          <option>Click To Select</option>
          <option value="dslr_camera">DSLR Camera</option>
          <option value="mirrorless_camera">Mirrorless Camera</option>
          <option value="bridge_camera">Bridge Camera</option>
          <option value="compact_digital_camera">Compact Digital Camera</option>
          <option value="smartphone">Smartphone</option>
        </Form.Select>
      </Form.Group>
      {errors?.camera_type?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {/* Photo Type */}
      <Form.Group>
        <Form.Label className={styles.FontLabel}>Photo Theme</Form.Label>
        <Form.Select
          value={photo_type}
          name="photo_type"
          onChange={handleChange}
          className="mb-3"
          aria-label="Photo Theme"
        >
          <option>Click To Select</option>
          <option value="abstract">Abstract</option>
          <option value="action">Action</option>
          <option value="animals">Animals</option>
          <option value="architecture">Architecture</option>
          <option value="black_and_white">Black and White</option>
          <option value="colors">Colors</option>
          <option value="city">City</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="landscape">Landscape</option>
          <option value="macro">Macro</option>
          <option value="manipulation">Manipulation</option>
          <option value="nature">Nature</option>
          <option value="night">Night</option>
          <option value="objects">Objects</option>
          <option value="people">People</option>
          <option value="sport">Sport</option>
          <option value="transportation">Transportation</option>
          <option value="water">Water</option>
          <option value="wedding">Wedding</option>
        </Form.Select>
      </Form.Group>
      {errors?.photo_type?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {/* Content */}
      <Form.Group>
        <Form.Label className={styles.FontLabel}>Content</Form.Label>
        <Form.Control
          value={content}
          onChange={handleChange}
          as="textarea"
          rows={6}
          name="content"
        />
      </Form.Group>
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
      <Row className={styles.Row}>
        <Col className="py-2 p-0 p-md-2" md={7} sm={12}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.FillerImage} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.ButtonBlue} btn`}
                  htmlFor="image-upload"
                >
                  Change the Image
                </Form.Label>
              </div>
              <Form.Control
                className="d-none"
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} sm={12} className="d-none d-md-block p-0 p-md-2">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostEditForm;
