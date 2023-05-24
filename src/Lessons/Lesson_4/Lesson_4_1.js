import React, {useContext, useState} from "react";


const UserContext = React.createContext()

const MyComponent1 = () => {
  const user = "Dany"

  return(
    <UserContext.Provider value={user}>
      <MyComponent2 />
    </UserContext.Provider>
  )
}


const MyComponent2 = () => {
  const user = useContext(UserContext)

  return <h1>{ `Hello, my name is ${user}` }</h1>
}


export default MyComponent1