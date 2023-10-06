import { useState } from "react";
import JoinPage from "./components/JoinPage";
import LoginPage from "./components/LoginPage";

function App() {
  const [page, setPage] = useState(true)
  const [info, setInfo] = useState('')
  const handlePage = () => {
    setPage((prev)=>{
      return !prev
    })
  }

  const getMyinfo = async () => {
    const baseUrl = "https://api.mandarin.weniv.co.kr"
    const reqpath = "/user/myinfo"
    const reqUrl = baseUrl + reqpath

    const token = localStorage.getItem("token")
    console.log(token)
    const res = await fetch(
      reqUrl, {
        method: "GET",
        headers: {
          "Authorization" : `Bearer ${token}`
        },
        // body:
      }
    )
    const json = await res.json()
    console.log(json)
    setInfo(JSON.stringify(json))
  }

  // 로그인 기능!
  return (
    <div>
      <button type="button">내 정보 불러오기</button>
      {page ? <LoginPage handlePage={handlePage} /> : <JoinPage handlePage={handlePage} />}
    </div>
  );
}
export default App;
