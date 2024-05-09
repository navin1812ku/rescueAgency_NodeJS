const express=require("express");
const DonateService=require("../services/DonateService");
const DonateRouter=express.Router();

DonateRouter.post("/donate-request",async(req,res)=>{
    var request_details=req.body;
    res.json(await DonateService.add_request(request_details));
})

DonateRouter.delete("/donate-request-delete/:id",async(req,res)=>{
    var {id}=req.params;
    res.json(await DonateService.delete_request(id));
})

module.exports=DonateRouter;