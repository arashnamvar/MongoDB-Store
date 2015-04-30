var mongoose = require("mongoose");
var validate = require("mongoose-validator");

// ADD VALIDATIONS IN A BIT

var ProductSchema = new mongoose.Schema({
	product_name: {type: String}, 
	image: {type:String}, 
	description: {type: String},
	int_quantity : {type: Number}, 
	created_date: {type: String},
	created_date_mil : {type: Number}
});

ProductSchema.path('product_name').required(true, "Name is necessary");
// ProductSchema.path('image').required(true, "Pick a product url");
// ProductSchema.path('description').required(true, "Pick a description, qt");
// ProductSchema.path('int_quantity').required(true, "Pick a description, qt");
// ProductSchema.path('created_date').required(true, "If you get this error, email customer service and tell them it's a date error");

mongoose.model('products', ProductSchema);