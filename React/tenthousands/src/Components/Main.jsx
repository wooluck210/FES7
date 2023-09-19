import React,{useState} from 'react'
import styled, {css} from 'styled-components'
import { Fonts } from './GlobalStyle'

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  font-size: 24px;
`

const Goal = styled.div`
  line-height: 200%;
`

function Text(texts, users) {
  return `${texts[0]} ${users} ${texts[1]}`
}

const InputStyle = styled.input`
  ${Fonts.FontStyle}
  color: black;
  border-radius: 7px;
  background: #FFF;
  width: 228px;
  height: 57px;
  padding-left: 39px;
`

function Input(props) {
  return (
    <InputStyle placeholder={props.placeholder} type={props.text}/>
  )
}

const Btn = styled.button`
  color: #5B2386;
  font-size: 24px;
  font-weight: 700;
  background: #FCEE21;
  border-radius: 56px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
  padding: 10px 25px;
`

const ShareBtn = styled(Btn)`
  background: #FFF;
`

export default function Main() {
  const [] = useState()

  return (
    <MainStyle>
      <Goal>
        <div>{Text`나는 ${<Input placeholder={`예)프로그래밍`} type={`text`} />}전문가가 될 것이다.`}<br/>
        그래서 앞으로 매일 하루에 시간씩 훈련할 것이다.</div>
      </Goal>
      <Btn>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Btn>
      <div>당신은 전문가가 되기 위해서 <br/>
      대략 일 이상 훈련하셔야 합니다! :) </div>
      <div>
        <Btn>훈련하러 가기 GO!GO!</Btn>
        <ShareBtn>공유하기</ShareBtn>
      </div>
    </MainStyle>
  )
}
