import React from "react";
import { ColorRing } from "react-loader-spinner";
import styles from "../assets/styles/Asset.module.css";

const Asset = ({ src, message, spinner }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#ddc000", "#fff3a3", "#011638", "#fff3a3", "#ddc000"]}
        />
      )}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
