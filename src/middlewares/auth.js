const { auth } = require('../firebase/firebase');

// `Bearer ${auth_token}`
async function authMiddleware(req,res,next) {
    if (req.headers.authorization &&
        req.headers.authorization.startWith("Bearer "))
    {
        const bearerToken = req.headers.authorization.substr(7)
        try {
            const userClaims = await auth.verifyIdToken(bearerToken);
            const { email, uid } = userClaims
            req.user = {
                email: email,
                uid:uid,
            }
            next();
        } catch (err) {
            next(err)
        }
    } else {
        return res.status(401).send({
            data: null,
            error:"Not Athorized"
        })
    }
}

module.exports=authMiddleware