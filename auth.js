const jwt = require('jsonwebtoken');
const config = require('./config');

function auth(req,res,next) {
    try {
        const token = req.headers.token
        const decoded = jwt.verify(token,config.jwt.secret,config.jwt.secret)

        // next()はgetの第3引数を指すと思えば良い｡
        next()
    } catch (error) {
        return res.send(401).json({
            msg:"認証できない"
        })
    }
}
module.exports = auth;