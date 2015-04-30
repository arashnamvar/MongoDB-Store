var mongoose = require("mongoose");
var Product = mongoose.model('products');
module.exports = (function(){
	return {
		show: function(req,res) {
			Product.find({}, function(err,results) {
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
		newprod: function(req,res) {
			var prod = new Product({product_name: req.body.name, image: req.body.img_url, description: req.body.description, int_quantity: req.body.quantity, created_date : req.body.created_date, created_date_mil : req.body.created_date_mil});
			prod.save({}, function(err,results){
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