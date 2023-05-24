import React, { useState, useEffect } from "react";


const _NumberList  = (props) => {

  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  )

  return (
    <>
      <ul>{listItems}</ul>
    </>
  )
}

const NumberList = () => {
  let arr = [1, 5, -2, 4, 8]
  return (
    <_NumberList numbers={arr} />

  )
}

export default NumberList
