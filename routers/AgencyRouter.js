const express=require("express");
const AgencyService=require("../services/AgencyService");

const AgencyRouter=express.Router();

AgencyRouter.post("/agency-register",async(req,res)=>{
    var agency=req.body;
    res.json(await AgencyService.register(agency));
});

AgencyRouter.get("/agency-login",async(req,res)=>{
    var agency=req.body;
    res.json(await AgencyService.login(agency.agency_id,agency.agency_password));
});

AgencyRouter.get("/agency/:id",async(req,res)=>{
    var {id}=req.params;
    res.json(await AgencyService.search_by_expertise(id));
});

AgencyRouter.get("/agency-location/:id",async(req,res)=>{
    var {id}=req.params;
    res.json(await AgencyService.search_by_location(id));
});

module.exports=AgencyRouter;