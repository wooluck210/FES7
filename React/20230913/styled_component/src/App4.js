import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
    margin: 40px;
`;

// 이렇게도 할 수 있음
// const callbackFnc = (props) => (props.name === 'hello'? 'red' : 'black')
// const ContentH2 = styled.h2`
//     color: ${callbackFnc};
//     width: 200px;
//     margin: 0 auto;
//     text-align: center;
// `;

const ContentH2 = styled.h2`
    color: ${(props) => (props.name === 'hello'? 'red' : 'black')};
    // 실행되면 color : 'red' 이렇게 됨
    /* black으로 바꾸기 위해서는 name의 값을 바꾸거나, 삼항연산자를 false로 바꾼다. */
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;


const App4 = () => {
    return (
        <ContentDiv>
            <ContentH2 name="hello">Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
        </ContentDiv>
    );
};

export default App4;