// import React from 'react'
// import { useState, useEffect, useLayoutEffect } from 'react';

// export default function LayoutEffect() {
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     // [num] : num이 바뀌니까 useEffect가 실행되는 무한 반복이 된다.
//     setNum((prev) => prev + 1); //사실은 엄청 오래걸리고 어려운 로직
//   },[]);

//   return (
//     <div>
//       <h1>{num}</h1>
//     </div>
//   )
// }
import { useState, useEffect, useLayoutEffect } from 'react'

function LayoutEffect() {
  const [value, setValue] = useState(100);
  
  useEffect(() => {
    // 레이아웃으로 바꾸면 번쩍이지 않는다.
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
        <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div>
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default LayoutEffect;