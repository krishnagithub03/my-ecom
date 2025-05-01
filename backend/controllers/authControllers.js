const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


const registerUser = async (req,res) => {
    try{

        const {name,email, password, role} = req.body;
        
        const existingUser = await User.findOne({email : email});
        if(existingUser){
            res.status(400).json({message : "User Already Exists"})
        } else{
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = User.create({
                name : name,
                email : email,
                password : hashedPassword,
                role : role 
            });

            res.status(201).json({message : "User Created Successfully!"})
        }
    } catch(err){
        res.status(500).json({message : err.message});
    }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(user.password, password);

    if(!isMatch){
        res.status(400).json({message : "Invalid Password"});
    }

    const token = jwt.sign({userId : user._id , role: user.role}, process.env.JWT_SECRET, {expiresIn : '7d'});

    res.status(200).json({ token , user : {id : user._id, name : user.name, email : user.email, role : user.role}, message: "User Logged in Successfully!"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    registerUser,
    loginUser
}
