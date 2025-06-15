const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectToDatabase} = require('./config/db.js')
const authRoutes = require('./routes/authRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//connect to db
connectToDatabase(process.env.MONGO_URI);


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);


app.get("/",(req,res)=>{
    res.send("Hey, this is aura store");
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
