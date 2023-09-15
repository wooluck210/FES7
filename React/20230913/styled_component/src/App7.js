import React from 'react'
import styled, {css} from 'styled-components'

// const Btn = styled.button`
//   background-color: skyblue;
//   color: white;
// `
// // Btn 스타일드컴포넌트를 확장! styled(확장하고 싶은 컴포넌트)
// const Btn2 = styled(Btn)`
//   color:black;
//   border-radius: 10px;
//   border: none;
// `

// const Btn3 = styled(Btn2)`
//   background-color: yellowgreen;
// `

// V2 : 지현님
// const BorderNone = css` border: none;`;
// const BorderRadius = css` border-radius: 8px;`;
// const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;

// const Btn = styled.button`
//     background-color: blue;
//     color: white;
// `
// // Btn 스타일드컴포넌트를 확장! styled(확장하고싶은컴포넌트)
// const Btn2 = styled(Btn)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     color: black;
// `
// const Btn3 = styled(Btn)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     background-color: green;
// `

// V3
const BorderNone = css` border: none;`;
const BorderRadius = css` border-radius: 8px;`;
const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;

const Btn = styled.button`
    background-color: blue;
    color: white;
`
// Btn 스타일드컴포넌트를 확장! styled(확장하고싶은컴포넌트)
const ExetendedBtn = styled(Btn)`
    ${BorderNone}
    ${BorderRadius}
    ${BoxShadow}
    color: ${(props)=>props.color};
    background-color: ${(props)=>props.bgColor};
`


export default function App7() {
  return (
    <>
      <Btn>버튼1</Btn>
      <ExetendedBtn color='black' bgColor='blue'>버튼2</ExetendedBtn>
      <ExetendedBtn color='white' bgColor='yellowgreen'>버튼3</ExetendedBtn>
    </>
  )
}
