// Async handler 
const async_handler=(fn)=>{
    return (req,res,next)=>{
        Promise.resolve(fn(req,res,next)).catch((err)=>{
            return next(err)
        })

    }
}

export {async_handler}