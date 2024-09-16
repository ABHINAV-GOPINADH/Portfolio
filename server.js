const express = require('express');
const app = express();
require("dotenv").config(); // Add this at the very top of your entry file
const DBconfig=require('./config/dbConfig');
const portfolioRoute = require("./routes/portfolioRoute");
app.use(express.json());
app.use("/api/portfolio",portfolioRoute);


const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});