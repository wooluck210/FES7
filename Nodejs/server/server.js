// 서버를 구축할 수 있게 하는 http 패키지를 사용한다.
const http = require("http")

http.createServer((req, res) => {
  // 헤더값을 추가해서 보내준다.
  res.writeHead(200, {"Content-type": "text/html"});
  // 응답 보낼 코드
  res.end("<p>hello world~!!!</p>");
}).listen(3000, () => { // 서버 실행하는 코드
  console.log("3000번 포트 서버 접속 완료")
});