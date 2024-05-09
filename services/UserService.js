const mongoose=require("mongoose");
const UserModel=require("../models/UserModel");

mongoose.connect("mongodb://127.0.0.1:27017/rescue_agencies");

const UserService={
    login:async(e_mail,password)=>{
        var user=await UserModel.findOne({e_mail:e_mail});
        if(user!=null){
            if(user.password!=password){
                return {message:"Password is incorrect"};
            }
            return user;
        }
        else{
            return {message:"This E-mail not having an account"};
        }
    },
    register:async(userData)=>{
        var user=await UserModel.findOne({e_mail:userData.e_mail});
        if(user==null){
            var new_user=await UserModel.create(userData);
            return new_user;
        }
        else{
            return {message:"Already you had an account Kindly go to login"};
        }
    }
}

module.exports=UserService;