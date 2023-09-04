import React from "react";
//props 객체를 구조 분해 할당으로 받기
function Hello({color , age, name,isSpecial}){
    return(
        <div style={{color:color}}>
            {isSpecial ? <b>***</b> : null}
            안녕하세요 {name}
            <h2>{age}</h2>
        </div>
    )
}
//기본값 props
Hello.defaultProps = {
    name : "월요일"
}
//컴포넌트 내보내기
export default Hello;