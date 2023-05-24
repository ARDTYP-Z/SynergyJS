import React, {useEffect, useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    })

    return (
        <>
            <p>{date.toString()}</p>
            <div>
                <p>You push {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </>

    );
}


export default Counter