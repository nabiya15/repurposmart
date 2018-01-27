const mongoose = require("mongoose");
const {Schema} = mongoose; 
// Destructured version for  
	// -->var Schema = mongoose.Schema; 
	//curly braces here indicate that mongoose here has a property called Schema. Assign that property to a variable called Schema.

const productSchema = new Schema({
	id : {
		type: Number,
		autoIncrement :true
	},
	title : {
		type: String,
		required :true
	},
	images: [{
		url : String
	}],
	price: {
		type :Number,
		required :true
	},
	seller : String,
	category: String,
	description : String
	date : {
		type: Date,
		default: Date.now
	}
});

// Creating a model class and tell mongoose to create this collection
const Product = mongoose.model("Product", productSchema);
//Here Users is the name of our collection in the db and User is the name of our schema above.
module.exports = Product;