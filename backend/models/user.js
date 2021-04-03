var mongoose=require("mongoose");
var UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        Default:Date.now
    }
    
});


module.exports=mongoose.model("User",UserSchema);
