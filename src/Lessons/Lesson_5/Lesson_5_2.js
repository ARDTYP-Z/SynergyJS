import React, { useState, useEffect } from "react";


function UserHello(props) {
  return <h1>Hello, {props.name}</h1>
}

function GuestHello(props) {
  return <h1>Hello, please, get registration</h1>
}


function Btn(props) {
  const [show, setShow] = useState(false)
  let islog = props.islog


  let text;
  if (show) {
    text = <p>Output text....</p>
    islog = true
  }

  return (
    <>
    <button onClick={() => setShow(!show)}>
      {show ? 'Hide' : 'Show'}
    </button>

      {text}

      {islog ? <UserHello name={"Dany"} /> : <GuestHello />}
    </>
  )
}

const IfElse = () => {
  return (
    <>
      <Btn />
    </>
  )
}


export default IfElse