import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express() // this will create express object 

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit: '16kb'
}));
// configuring app to use urlencoded middleware.
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));
// configuring app to use static middleware.
// serve static files from the 'public' directory.

app.use(express.static('public'));


// configuring app to use cookie-parser middleware.
// cookie-parser is used to parse cookies attached to the client request object.

app.use(cookieParser());


export default app