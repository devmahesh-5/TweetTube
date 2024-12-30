// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({ path: '../.env' });





connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR: ", error);
        throw error ;
    })
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server running at Port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection Failed !!! ",err);
    process.exit(1)
})











/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/























/* import express from "express";

const app = express();

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{//database connected but express not listening
            console.log("Error:",error);
            throw error;
        });
        app.listen(process.env.PORT,()=>{
            console.log(`App listening at port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Database connection Error",error);
        throw error;
    }
})() */