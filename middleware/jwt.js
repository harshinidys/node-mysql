const jwt = require('jsonwebtoken');
const jwtfile = require('../middleware/jwt');

const jwtSecretKey = "secret key";


function jwtVerify(req, res, next) {
    const token = req.headers.authorization;
    console.log("token : ", token);
    if (!token) {
        return res.status(400).json({ message: 'Token missing' });
    }
    const tokenBearer = token.replace('Bearer ', '');
    console.log(tokenBearer, "token bearer");
    const verified = jwt.verify(tokenBearer, jwtSecretKey, (err, decoded) => {
        console.log("1234567");
        if (err) {
            res.status(401).json({ message: 'Invalid token' });
        } else {
            // req.user = verified; // Store the verified user data in req.user
            // next();
            return decoded;
        }
    });
    console.log("verified : ", verified);
    req.user = verified; // Store the verified user data in req.user
    next();
}

console.log('end1');
module.exports = { jwtVerify };
console.log('end22');