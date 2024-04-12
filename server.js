// 必要なパッケージ用意
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./config');
const auth = require('./auth');

// サーバー準備
const app = express();
const  PORT = 3000;

// とりあえずjsonを使うのを宣言する必要があるので
app.use(express.json());

app.listen(PORT,console.log("server running"))

// 登録
app.post("/register",(req,res) => {
    // 登録情報
    const payload = {
        username:req.body.username,
        email:req.body.email
    }


    const token = jwt.sign(
        payload,
        config.jwt.secret,
        config.jwt.options
    )

    const body = {
        username:req.body.username,
        email:req.body.email,
        token:token
    }

    res.status(200).json(body)
})

app.get('/login',auth,(req,res) => {
    res.status(200).json({
        msg:"承認成功"
    })
})