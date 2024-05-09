const express=require("express");
const UserService=require("../services/UserService");

const UserRouter=express.Router();

UserRouter.post("/user-register",async(req,res)=>{
    var user_data=req.body;
    console.log(user_data);
    var new_user=await UserService.register(user_data);
    res.json(new_user);
});

UserRouter.get("/user-login",async(req,res)=>{
    var user=req.body;
    var is_old_user=await UserService.login(user.e_mail,user.password);
    res.json(is_old_user);
});

module.exports=UserRouter;