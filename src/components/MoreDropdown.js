import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../assets/styles/MoreDropdown.module.css";

import { useNavigate } from "react-router-dom";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fa-solid fa-ellipsis-vertical"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu className="text-center">
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="Edit"
        >
          <i className={`fa-solid fa-pencil ${styles.Icons}`}></i>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="Delete"
        >
          <i className={`fa-regular fa-trash-can ${styles.Icons}`}></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const navigate = useNavigate();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu variant="dark">
        <Dropdown.Item
          className="d-flex"
          onClick={() => navigate(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fa-solid fa-user-pen flex-fill"></i>&nbsp;
          <span className="text-end">Edit Profile</span>
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex"
          onClick={() => navigate(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="fa-regular fa-id-card flex-fill"></i>&nbsp;
          <span className="text-end">Change Username</span>
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex"
          onClick={() => navigate(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fa-solid fa-unlock-keyhole flex-fill"></i>&nbsp;
          <span className="text-end">Change Password</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
