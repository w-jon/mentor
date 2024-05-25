import React from "react";
import styles from "./onboarding.module.css";

import peopleNetwork from "../../../images/setup/peopleNetwork.png";

const 
  Onboarding = () => {


  return (
    <div className={styles.container}>
      <img
        src={peopleNetwork}
        alt="Onboarding Image"
        className={styles.image}
      />
      <h1 className={styles.text}>
        From <span style={{ color: "red" }}>Doubt</span> to{" "}
        <span style={{ color: "green" }}>Confidence</span> - Match your local
        mentor
      </h1>
      <p>Your mentor, Your Pathway to success</p>
      <button className={styles.button}>
        Get Started
      </button>
    </div>
  );
};

export default Onboarding;
