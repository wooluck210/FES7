import React from 'react'
import styled from 'styled-components'

const Weniv = styled.img`
  display: block;
  margin: 20px auto;
  width: 13%;
`

const FooterStyle = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyle>
      <Weniv src='Imgs/위니브.png'></Weniv>
      ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다. <br />
      수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
    </FooterStyle>
  )
}
