import { Poll } from "../Models/PollSchema.js"
import { errHandler, responseHandler } from "../helper/response.js"

const OnPoll = (req,res)=>{
    const body = req.body
    Poll.create(body).then((data)=>{
        responseHandler(res,data)
    }).catch((err)=>{
        errHandler(res,5,403)
    })
}

const GetPoll = (req,res)=>{
    const {id} = req.query
    let obj = {}
    if (id) {
        obj._id = id
    }
    Poll.find(obj).then((data)=>{
        responseHandler(res,data)
    }).catch((err)=>{
        errHandler(res,5,403)
    })
}

export {OnPoll,GetPoll}