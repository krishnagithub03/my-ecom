const jwt = require('jsonwebtoken');

const protect = (req,reqs,next) => {
    const authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        const token = authHeader.split(" ")[1];
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            next();
        } catch(err){
            res.status(401).json({message : "Unauthorized"});
        }
    } else{
    res.status(401).json({ message: "No Token" });
    }
};

module.exports = protect;