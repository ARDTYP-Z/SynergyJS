import React from "react";

import styles from "./Lesson_4_2.module.css"
import './style.scss'


const container = {
  padding: 30,
  color: 'white',
  background: 'black',
  textAlign: 'center',
}

const Homepage = (props) => {
  return (
    <>
      <div style={container}>
        <h1 className={styles.red}>Welcome to React site!</h1>
        <p>This is {props.styleType}</p>
      </div>
      <div className='home'>
        <h1 className='home-title'>Home title</h1>
        <p className='home-paragraph'>Home paragraph</p>
      </div>
    </>
  )
}

export default Homepage