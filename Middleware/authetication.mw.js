var jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        jwt.verify(token, 'shhhhh', (err, decoded) => {
            if (decoded) {
                req.body.userId = decoded.userID
                next();
            }
            if (err) {
                res.status(404).json({ 'msg': 'Please login first!!!!!!!!!' })
            }
        });
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ "msg": "Some error occured" });
    }
}
module.exports = { authenticate }