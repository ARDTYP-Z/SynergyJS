import React, {useState} from "react";


let stylesForm = {
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  marginTop: 30,
  marginBottom: 20,
  marginLeft: 30,
}

let stylesBtn  = {
  width: 200,
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 30,
}

let stylesInput = {
  padding: 5,
  margin: 2,
}

const Form = () => {
  return (
    <>
      <form style={stylesForm}>
        <input style={stylesInput} type={"text"} placeholder={"Name"}/>
        <input style={stylesInput} type={"text"} placeholder={"Surname"}/>
        <input style={stylesInput} type={"text"} placeholder={"Username"}/>
        <input style={stylesInput} type={"password"} placeholder={"Password"}/>
        <select  style={stylesInput}>
          <option>Moscow</option>
          <option>Saint-Petersburg</option>
          <option>Simferopol</option>
        </select>
        <button type={"submit"}>Submit</button>
      </form>
    </>
  )
}

const Btn = () => {
  let [show, setShow] = useState(false)

  return (
    <>
      {show ? <Form /> : null}
      <button style={stylesBtn} onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
    </>
  )

}


export default Btn