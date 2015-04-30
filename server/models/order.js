var mongoose = require("mongoose");
var validate = require("mongoose-validator");

// ADD VALIDATIONS IN A BIT

var OrderSchema = new mongoose.Schema({
	customer_name: {type: String}, 
	product: {type: String}, 
	quantity: {type: Number},
	created_date: {type: String},
	created_date_mil : {type: Number}
});

OrderSchema.path('customer_name').required(true, "Name is necessary");
OrderSchema.path('product').required(true, "Pick a product, qt");
OrderSchema.path('quantity').required(true, "Pick a quantity, qt");
OrderSchema.path('created_date').required(true, "If you get this error, email customer service and tell them it's a date error");

mongoose.model('orders', OrderSchema);