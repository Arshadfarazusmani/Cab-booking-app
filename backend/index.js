import dotenv from "dotenv";
dotenv.config(
    {
        path:".env"
    }
);

import app from "./app.js";

import { connect_Db } from "./db/db.js";

connect_Db().then(
    ()=>{
        app.listen(process.env.PORT,()=>{
            console.log("server is running on PORT :", process.env.PORT);
            
        })
    }
).catch((err)=>{
    console.log("server error", err);
    

})