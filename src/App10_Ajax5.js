import React, { useState } from 'react';

const App10_Ajax5=()=>{
    // input 요소에 입력한 문자열을 상태값으로 관리 하기 위해 
    const [msg, setMsg]=useState('');
    // input 요소의 내용이 바뀌었을때 호출되는 함수 
    const changed=(e)=>{
        //setMsg() 함수 호출하면서 입력된 value 값 전달하기 
        setMsg(e.target.value);
    };

    //전송 버튼을 눌렀을때 호출되는 함수 
    const send=()=>{
        fetch("http://localhost:8888/spring05/react/send.do", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:`msg=${msg}`
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
        <div>
            <h1>ajax 예제</h1>
            <input onChange={changed} type="text" placeholder="메세지 입력..."/>
            <button onClick={send}>POST 전송</button>
            <p>입력한 문자열: <strong>{msg}</strong></p>
        </div>
    );
};

export default App10_Ajax5;