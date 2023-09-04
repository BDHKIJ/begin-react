import React, { useState } from "react";
function Counter(){
    //useState(상태초기값) --> 배열[상태,setter]
    // const stareArray = useState(0);
    // console.log(stareArray);
    // const number = stareArray[0];
    // const setNumber = stareArray[1];
    //위 코드를 구조분해할당한 코드
    const [number,setNumber] = useState(0);
    const onIncreae = () => {
        setNumber(number+1);
        console.log("number : "+number);
    }
    const onDecreae = () => {
        setNumber(number-1);
        console.log("number : "+number);
    }
    return(
        <div>
            <h2>{number}</h2>
            <button onClick={onIncreae}>+1</button>
            <button onClick={onDecreae}>-1</button>
        </div>
    )
}
export default Counter;