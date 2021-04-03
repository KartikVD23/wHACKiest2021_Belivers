//const { response } = require("express");
var express=require("express");
var router=express.Router();
const user=require("../models/user");
//const MemberDashboard = require( "../member-dashboard.component.js");
router.post('/signup',(request,response)=>{
    const usr=new user({
        username:request.body.username,
        password:request.body.password,
        age:request.body.age

    });
    usr.save()
    .then(data=>{
        response.json(data);
    })
    .catch(error=>{
        response.json(error);
    });
});
router.get('/users',(request,response)=>{
        user.find(request.body.username),function(err,us){
            if(err){
                console.log(err);
            }
            else{
                if(request.body.password===us.password){
                    {
                        response.redirect("../member-dashboard.component");
                    }
                }
                else{
                    console.log(err);
                }
            }
}});

module.exports=router;