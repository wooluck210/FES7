import React, { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async (email, password)=> {
    const baseUrl = "https://api.mandarin.weniv.co.kr"
    const reqpath = "/user/login"
    const requrl = baseUrl+reqpath

    const loginData = {
      "user": {
        "email": email,
        "password": password
      }
    }

    try {
    // 로그인 해서 토큰 꺼내기
    const res = await fetch(requrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
    const json = await res.json()
    console.log(json)
    // 객체에 user가 없는 경우 === 로그인 실패했을 때때
    // if (!json.user) {
    //   return
    // }
    
    const token = json.user.token
    console.log(token)
    // localstorage에 토큰 저장하기
    localStorage.setItem("token", token)
  } catch (error){
    console.error
    console.log('에러가 나버렸다!')
  }
  }

  const inputEmail = (e) => {
    setEmail(e.target.value)
  }
  const inputPassword = (e) => {
    setPassword(e.target.value)
  }
  const submitLogin = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <>
      <h1>로그인</h1>
      <section>
        <h2>이메일, 비밀번호 입력</h2>
        <form onSubmit={submitLogin}>
          <input type='text' placeholder='이메일' value={email} onChange={inputEmail} />
          <input type='text' placeholder='비밀번호' value={password} onChange={inputPassword} />
          <button>로그인</button>
        </form>
      </section>
    </>
  )
}
