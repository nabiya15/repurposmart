const mongoose = require("mongoose");
const {Schema} = mongoose; 
// Destructured version for  
	// -->var Schema = mongoose.Schema; 
	//curly braces here indicate that mongoose here has a property called Schema. Assign that property to a variable called Schema.

const User = new Schema({
	userId:String, 
	firstName:String,
	lastName:String,
	email:String,
	image:String
});

// Creating a model class and tell mongoose to create this collection
mongoose.model("Users", User);
//Here Users is the name of our collection in the db and User is the name of our schema above.