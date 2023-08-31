// 서버를 구축할 수 있게 하는 http 패키지를 사용한다.
const http = require("http")

http.createServer((req, res) => {
  if(req.url === '/') {
    // 200: 응답을 보냈을 때 정상적으로 되어 있다는 것
    res.writeHead(200);
    res.end("main url");
  } else if (req.url === "/upload") {
    res.writeHead(200);
    res.end("upload url");
  } else if (req.url === "/delete") {
    res.writeHead(200);
    res.end("delete url");
  } else {
    res.writeHead(404)
    res.end("Not Found!!!!")
  }
}).listen(3000, () => { // 서버 실행하는 코드
  console.log("3000번 포트 서버 접속 완료")
});