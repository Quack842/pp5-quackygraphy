import React, { useState } from "react";

import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Upload from "../../assets/images/upload.png";

import styles from "../../assets/styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {

    const [errors, setErrors] = useState({});


    const textFields = (
        <div className={`${styles.Container} text-center`}>
            {/* Form For Uploading the Image */}
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Camera Type</Form.Label>
                <Form.Select className="mb-3" aria-label="Camera Type">
                    <option>Click To Select</option>
                    <option value="dslr_camera">DSLR Camera</option>
                    <option value="mirrorless_camera">Mirrorless Camera</option>
                    <option value="bridge_camera">Bridge Camera</option>
                    <option value="compact_digital_camera">Compact Digital Camera</option>
                    <option value="smartphone">Smartphone</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Photo Theme</Form.Label>
                <Form.Select className="mb-3" aria-label="Photo Theme">
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
                    <option value="transportation">Transportation</option>
                    <option value="water">Water</option>
                    <option value="wedding">Wedding</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                />
            </Form.Group>
            <Button
                className={styles.Button}
                onClick={() => { }}
            >
                Cancel
            </Button>
            <Button
                type="submit"
                className={styles.Button}
            >
                Post
            </Button>
        </div>
    );

    return (
        <Form>
            <Row className={styles.Row}>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">

                            <Form.Label
                                className="d-flex justify-content-center"
                                htmlFor="image-upload"
                            >
                                <Asset src={Upload} message="Click To Upload Image" />
                            </Form.Label>

                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostCreateForm;