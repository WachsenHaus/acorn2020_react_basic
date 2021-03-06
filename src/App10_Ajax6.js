import React, { useState } from 'react';
import qs from 'query-string';

const App10_Ajax6 = () => {
  
  
  const [formData,setFormData] = useState({
    id:'', 
    pwd:'',
    loginId:null
  });

  const changed = (e)=>{
    //이벤트가 일어난 input 요소의 name속성의 값 (id or pwd) 읽어오기
    let name = e.target.name;
    //name은 id,pwd임. 각 요소에서 체인지 함수가 일어나면 해당하는 네임이 나옴.
    console.log(`name은: ${name}`)
    //이벤트가 일어난 input 요소에 입력한 value 값
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]:value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8888/spring05/users/ajax_login.do", {
      method:"POST",
      headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:qs.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.isSuccess){
          setFormData({
            ...formData,
            loginId:data.id
          })
        }
    })
    .catch(err=>{
        console.log(err);
    });
  };
  const logout = () => {
    //ajax 로 로그아웃 요청을 한다.
    fetch("http://localhost:8888/spring05/users/ajax_logout")
    .then(res => res.json())
    .then(data =>{
      if(data.isSuccess){
        setFormData({
          ...formData,
          loginId:null
        })
        alert("로그 아웃 되었습니다.")
      }
    })
  }

  return (
    <div>
      {
        formData.loginId && <p><strong>{formData.loginId}</strong>님 로그인중...</p>
      }
      <h1>로그인 폼 입니다.</h1>
      <form onSubmit={submit}>
        <input onChange={changed} name="id" type="text" placeholder="아이디..."/>
        <input onChange={changed} name="pwd" type="password" placeholder="비밀번호..."/>
        <button type="submit">로그인</button>
        <button onClick={logout}>로그아웃</button>
      </form>
      <p>{JSON.stringify(formData)}</p>
      <p>{qs.stringify(formData)}</p>
    </div>
  );
}

export default App10_Ajax6;