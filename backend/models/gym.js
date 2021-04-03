var mongoose=require("mongoose");
var GymSchema=new mongoose.Schema({
	username:string,
	age:int,
	time_slot:int
});

module.exports=mongoose.model("Gym",GymSchema);
