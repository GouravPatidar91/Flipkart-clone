const app=require("./index");
require('dotenv').config()
const port=process.env.PORT 

const connect=require("./configs/db");

app.listen(port,async()=>{
    try {
        await connect();
        console.log("listening on port 4700")
    } catch (error) {
        console.log({message:error.message})
    }
})