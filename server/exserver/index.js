// express 모듈 불러오기
const express = require("express");
const app= express();
const PORT = Number(process.env.PORT) || 3000;
app.get("/",(req,res)=>{
    res.status(200);
    res.send('hello,node');
});
app.get("/users",(req,res)=>{
    res.status(200);
    res.send('get all users');
});
app.post("/",(req,res)=>{
    res.status(200);
    res.send('crate new user');
});
app.get("/user/:id", (req,res)=>{
    const userID = req.params.id;
    res.status(200);
    res.send('${userID}')
    console.timeLog(req.body);
    console.timeLog(req.params);
    console.timeLog(req.query);
}
app.listen(PORT, ()=>{
    console.log('${PORT}');
})