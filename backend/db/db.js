import mongoose from "mongoose";
import { Db_name } from "../constant.js";

const Db_uri=process.env.MONGO_URI
const PORT= process.env.PORT


const connect_Db= async ()=>{



    try {

       const DatabaseInstance = await mongoose.connect(`${Db_uri}${Db_name}`)

       console.log("Db connected to ",
        DatabaseInstance.connection.name
       );
    
       
       console.log("Db connected successfuly!!", );
       
        
    } catch (error) {
        console.log(Db_uri);
        console.log(PORT);


        console.log('DB_connect error:',error)
        process.exit(1)
        
    }

}

export{ connect_Db}