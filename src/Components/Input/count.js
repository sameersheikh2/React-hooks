import React, { useState} from 'react';


const Counter = () => {
    const [count, setCount] = useState("0");

const onIncrement = () => {
setCount(count+1);
};
const onDecrement = () => {
setCount(count-1);
};
    return(
        <div>
            <h1>Count : {count}</h1>
            <button
            onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    )

}
export default Counter;
