// http 모듈 불러오기
const http = require("http");
const fs = require("fs")

const port = number(processenv.port) || 3000;
const server = http.createServer((req,res)=>{
    console.log("요청 발생");
    console.log(req.method);
    res.setHeader("Contetn-type","text/plain")
const readstream = fs.createReadStream(_dirname=-+"/indec.html", "utf8");
readstream.pipe(res);
});

server.listen(port, ()=>{
    console.log(`${port}번 포트로 서버 실행`);
});