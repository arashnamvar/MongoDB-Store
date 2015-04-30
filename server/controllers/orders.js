var mongoose = require("mongoose");
var Order = mongoose.model('orders');
var Product = mongoose.model('products');
module.exports = (function(){
	return {
		neworder: function(req,res) {
			quantity_bought = req.body.quantity;
			var query = Product.where({product_name : req.body.product });
			query.findOne(function(err,result){
				if(err)
				{
					console.log('1',err);
				}
				else
				{
					if(quantity_bought > result.int_quantity)
					{
						if(result.int_quantity === 0)
						{
							message_1 = {message_err: "Sold Out"};
						}
						else
						{
							message_1 = {message_err: "There's only " + result.int_quantity + " of this product left"};
						}
						res.json(message_1);
					}
					else
					{
						var new_num = result.int_quantity - quantity_bought;
						var query = { '_id' : result._id };
						var update = {int_quantity : new_num };
						Product.findOneAndUpdate(query, update, function(err,person) {
							if(err)
							{
								console.log("3", err);
							}
							else
							{
								var order = new Order({customer_name : req.body.customer_name, product: req.body.product, quantity: req.body.quantity, created_date: req.body.created_date, created_date_mil : req.body.created_date_mil});
								order.save(function(err,results){
									if(err)
									{
										console.log(err);
									}
									else
									{
										res.json(results);
									}
								});
							}
						});
					}
				}
			});
		}, 
		show: function(req,res) {
			Order.find({}, function(err,results) {
						if(err)
						{
							console.log(err);
						}
						else
						{
							res.json(results);
						}
					});
				},
		three: function(req,res) {
			Order.find({}).sort({'created_date': -1}).limit(3).exec(function(err, results)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(results);
				}

			});
		}
	};
})();