var mongoose = require("mongoose");
var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
		show: function(req,res) {
			Customer.find({}, function(err,results) {
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
		newcust: function(req,res) {
			var customer = new Customer({name: req.body.name, created_date: req.body.created_date, created_date_mil : req.body.created_date_mil});
			customer.save(function(err,results) {
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
		destroycutomers: function(req,res) {
			Customer.remove({ _id: req.body}, function(err,results) {
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
		checkName: function(req,res) {
			Customer.find({name : req.body.name}, function(err,results)
			{
				if(err)
				{
					res.json(err);
				}
				else
				{
					res.json(results);
				}
			});
		},
		three: function(req,res) {
			Customer.find({}).sort({'created_date': -1}).limit(3).exec(function(err, results)
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