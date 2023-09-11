// default 모듈이 React이기 때문이다. default가 아니면서 export하는 모듈은 {}를 사용해야 한다.
import React, {useState} from 'react';

function Resume(props) {
  // useState에 전달되는 인자는 첫번째 인덱스의 값으로 전달된다.
  let [like, setLike] = useState('');
  console.log(like)
  // let like = 0;
  function clickLike() {
    // like += 1;
    // setLike(like+1);
    // console.log(like);
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }
  // console.log(like);
  return (
    <>
      <div style={{border:"1px solid black"}}>
        <h1>{props.name}자기소개서</h1>
        <h2>{props.hello}</h2>
        <h3>취미 : {props.hobby}</h3>
        <h4>좋아하는 음식 : {props.food}</h4>
        <h5>좋아하는 색 : <span style={{color:"blue"}}>{props.color}</span></h5>
        <button onClick={clickLike}>like<span>{like}</span></button>
        <button onClick={clickLike}>like</button><span>{like}</span>
      </div>
    </>
  )
}

export default Resume