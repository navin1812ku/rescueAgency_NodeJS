const express=require("express");
const RequestService=require("../services/RequestService");

const RequestRouter=express.Router();

RequestRouter.post("/request-add",async(req,res)=>{
    var request_data=req.body;
    res.json(await RequestService.add_request(request_data));
});

RequestRouter.put("/request-add-reply",async(req,res)=>{
    var request_data=req.body;
    res.json(await RequestService.add_reply(request_data));
});

RequestRouter.get("/request-search/:id",async(req,res)=>{
    var {id}=req.params;
    res.json(await RequestService.search_request(id));
});

module.exports=RequestRouter;