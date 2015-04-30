var mongoose = require("mongoose");
var validate = require("mongoose-validator");

// ADD VALIDATIONS IN A BIT

var CustomerSchema = new mongoose.Schema({
	name: {type: String}, 
	created_date: {type:String},
	created_date_mil : {type: Number}
});

CustomerSchema.path('name').required(true, "Name is necessary");
CustomerSchema.path('created_date').required(true, "If you get this error, email customer service and tell them it's a date error");

mongoose.model('Customer', CustomerSchema);