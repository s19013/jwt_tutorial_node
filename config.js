module.exports = {
    jwt:{
        secret:"SECRET-KKY", //本来なら長いランダムな文字列を使う
        options:{
            algorithm:"HS256",
            expiresIn:"1d", //トークンの有効期限
        }
    }
}