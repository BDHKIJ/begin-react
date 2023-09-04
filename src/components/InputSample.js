import React, { useState } from "react";
function InputSample(){
    const [inputs,setinputs] = useState({
        name: "",
        nickname: ""
    });
    const {name,nickname} = inputs;
    const onChange = (e) => {
        const {name,value} = e.target;
        setinputs({
            ...inputs, //덮어쓰기
            [name]:value
        })
    }
    const OnRest = () => {
        setinputs({
            name: "",
            nickname: ""
        })
    }
    return(
        <div>
            <input onChange={onChange} placeholder="이름" name="name" value={name}/>
            <input onChange={onChange} placeholder="닉네임" name="nickname" value={nickname}/>
            <button onClick={OnRest}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}
export default InputSample;