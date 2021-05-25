import React, { useState} from 'react';


function Counter () {
    const [Count, setCount] = useState("0");


    function ChangeCount(e){
    setCount(e.target.value--);
    }
    function ChangeCountAdd(e){
        setCount(e.target.value++)
    }
    return(
        <div>
        <h1>{Count}</h1>
            <button
            onClick={ChangeCount}>-</button>
            <button onClick={ChangeCountAdd}>+</button>
        </div>
    )

}
export default Counter;