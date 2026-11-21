// http 모듈 불러오기
const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("요청 발생");
    console.log(req.method);
    res.setHeader("Contetn-type","text/plain")
res.write("hello, node!!");
res.end();
});

server.listen(3000, ()=>{
    console.log("3000번 포트로 서버 실행");
});