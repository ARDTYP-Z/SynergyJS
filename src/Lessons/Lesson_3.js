import React from 'react';


let Hello = (props) => {
  return (
    <>
      <h2>Hello, {props.name}</h2>
      <p>Age = {props.age}</p>
    </>
    )

}

export default Hello