var customers = require("./../server/controllers/customers.js");
var products = require("./../server/controllers/products.js");
var orders = require("./../server/controllers/orders.js");

module.exports = function(app) {
	app.get('/customers', function(req,res) {
		customers.show(req,res);
	});
	app.post('/newcustomer', function(req,res) {
		customers.newcust(req,res);
	});
	app.post('/customerNameCheck', function(req,res) {
		customers.checkName(req,res);
	});
	app.post('/destroycustomer', function(req,res) {
		customers.destroycutomers(req,res);
	});
	app.get('/products', function(req,res) {
		products.show(res,res);
	});
	app.post('/neworder', function(req,res) {
		orders.neworder(req,res);
	});
	app.get('/orders', function(req,res) {
		orders.show(req,res);
	});
	app.post('/newProduct', function(req,res){
		products.newprod(req,res);
	});
	app.get('/threecustomers', function(req,res) {
		customers.three(req,res);
	});
	app.get('/threeorders', function(req,res) {
		orders.three(req,res);
	});
};