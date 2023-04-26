import React from "react";
import WalkingDuck from "../assets/images/walking-ducky-facing.gif";
import Asset from "./Asset";
import styles from "../assets/styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={WalkingDuck}
        message="Sorry, the Page your looking for does not exist"
      />
    </div>
  );
};

export default NotFound;
