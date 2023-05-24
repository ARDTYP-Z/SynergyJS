import React from "react";

import styles from "./registration.module.css"


const Registration = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Registration</h1>
        <form className={styles.form}>
          <div className={styles.form_top}>
            <input placeholder={"Username"} className={styles.input} />
            <input placeholder={"Password"} className={styles.input} />
          </div>
          <button type={"submit"} className={styles.button}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Registration