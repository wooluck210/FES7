import React from 'react'
import styled from 'styled-components'
import styles from './Header.module.css'
import { Fonts } from './GlobalStyle'

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px;
`

const Title = styled.div`
  width: 100%;
  margin-left: auto;
  position: relative;
`

const Logo = styled.img`
  /* object-fit 없이 마진 오토가 없으면 왜 화면에 꽉 차는지 궁금 */
  display: block;
  margin: auto;
  max-width: 100%;
  object-fit: contain;
  /* padding: 100px; */
  padding-bottom: 50px;
`

const Time = styled(Logo)`
  max-width: 40%;
  position: absolute;
  inset: 0;
`

const Better = styled.div`
  ${Fonts.FontEnjoy}
  text-align: center;
  margin: 60px auto;
  color: #F5DF4D;
`

const Rule = styled.div`
  text-align: center;
  line-height: 170%;
`

const RuleStrong = styled.strong`
  font-weight: 700;
  font-size: 1.5em;
`

export default function Header() {
  return (
    <HeaderStyle>
      <h1 className={styles.title}>1만 시간의 법칙</h1>
      <Title>
        <Logo src='Imgs/로고.png' alt='로고 이미지' />
        <Time src='Imgs/시계.png' alt='시계 배경' />
      </Title>
      <Better>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</Better>
      <Rule>
        <RuleStrong>1만 시간의 법칙</RuleStrong>은<br />
        어떤 분야의 전문가가 되기 위해서는<br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </Rule>
    </HeaderStyle>
  )
}
