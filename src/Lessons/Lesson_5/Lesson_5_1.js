import React, { useState, useEffect } from "react";


const ButtonPress = (e) => {
  function print(name, age) {
    console.log(e)
    console.log(`Name: ${name}, Age: ${age}`)
    alert("Hello React")
  }

  const [text, setText] = useState("Default value")
  const [value, setTextVal] = useState("Default value")
  function handlerChange(event) {
    setText(event.target.value)
    console.log(event)
  }

  return (
    <>
      <button onClick={() => print("Dany", 15)}>Click1</button>
      <button onClick={() => print("Alex", 13)}>Click2</button>
      <input type='text' value={text} onChange={handlerChange}/>
      <p> { text } </p>
      <select value={value} onChange={(event) => setTextVal(event.target.value)}>
        <option value='1'>text1</option>
        <option value='2'>text2</option>
        <option value='3'>text3</option>
      </select>
      <p>
        {value === "1" && "first option"}
        {value === "2" && "second option"}
        {value === "3" && "third option"}
      </p>
    </>
  )
}
export default ButtonPress