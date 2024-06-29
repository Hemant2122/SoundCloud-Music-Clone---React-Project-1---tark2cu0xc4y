import React from "react";
import comingSoonImg from "../../assets/icons/18505047_SL-070720-32260-21.svg"
import styles from "./feed.module.css";

function Feed() {
  return (
    <>
      <div className={styles.feed_containe}>
        <img className={styles.image} src={comingSoonImg} alt="coming_soon" />
      </div>
    </>
  );
}

export default Feed;
