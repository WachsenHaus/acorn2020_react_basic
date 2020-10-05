import React, { useEffect } from 'react';
import './css/bootstrap.css';

const App10_Ajax4=()=>{

    const [cafeList, setList]=React.useState([]);

    //componentDidMount() 대신 사용하는 useEffect() 함수 
    //아래에 전달한 화살표 함수는 컴포넌트가 마운트된 직후에 호출된다.
    useEffect(()=>{
        fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const result=data.map((item)=>{
                return (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.title}</td>
                        <td>{item.writer}</td>
                    </tr>
                );
            });
            setList(result);
        })
        .catch(err=>{
            console.log(err);
        });        
    }, []);

    return(
        <div className="container">
            <h1>ajax 요청 테스트</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeList}
                </tbody>
            </table>
        </div>
    );
};

export default App10_Ajax4;