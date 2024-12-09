/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../RoomInspiration.module.css";

const Room = () => {
  return (
    <div className={styles["room-inspiration-container"]}>
      <div className={styles.content}>
        <h1 className={styles.title}>50+ Beautiful Rooms Inspiration</h1>
        <p className={styles.subtitle}>
          Our designer has already created many beautiful prototypes of rooms that inspire you.
        </p>
        <button className={styles["explore-button"]}>Explore More</button>
      </div>
      <div className={styles.slider}>
        <div className={`${styles["slider-item"]} ${styles.active}`}>
          <img
            src="/images/room1.jpg"
            alt="Inner Peace"
            className={styles["slider-image"]}
          />
          <div className={styles["slider-overlay"]}>
            <span className={styles["slider-category"]}>01 — Bed Room</span>
            <h2 className={styles["slider-title"]}>Inner Peace</h2>
            <button className={styles["arrow-button"]}>→</button>
          </div>
        </div>
        <div className={styles["slider-item"]}>
          <img
            src="/images/room2.jpg"
            alt="Dining Room"
            className={styles["slider-image"]}
          />
        </div>
        <div className={styles["slider-item"]}>
          <img
            src="/images/room3.jpg"
            alt="Living Room"
            className={styles["slider-image"]}
          />
        </div>
        <div className={styles["slider-pagination"]}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
};

export default Room;
