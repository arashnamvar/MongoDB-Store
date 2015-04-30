var customers_orders = angular.module('customers_orders', ['ngRoute']);
	customers_orders.config(function ($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl: 'partials/customers.html'
			})
			.when('/orders',{
				templateUrl: 'partials/orders.html'
			})
			.when('/products',{
				templateUrl: 'partials/products.html'
			})
			.when('/dashboard',{
				templateUrl: 'partials/dashboard.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
// CUSTOMER CONTROLLER
	customers_orders.controller("customersController", function($scope, customerFactory){
		customerFactory.getCustomers(function(data) {
			$scope.customers = data;
		});
		$scope.addCustomer = function()
		{
			customerFactory.checkCustomer($scope.newCustomer.name, function(data) {
				if(data.length > 0)
				{
					$scope.errors = "Name is already in database";
				}
				else
				{
					arash();
					$scope.errors = '';
				}
				return;
			});
			arash = function(){
			$scope.newCustomer.created_date = new Date();
			$scope.newCustomer.created_date_mil = $scope.newCustomer.created_date.getTime();
			customerFactory.addCustomer($scope.newCustomer, function(){
				customerFactory.getCustomers(function(data) {
					$scope.customers = data;
				});
			});
			$scope.newCustomer = {};
			};
		};

		$scope.removeCustomer = function(info)
		{
			customerFactory.removeCustomer(info, function(){
				customerFactory.getCustomers(function(data) {
					$scope.customers = data;
				});
			});
		};
	});
// CUSTOMER FACTORY
	customers_orders.factory("customerFactory", function($http){
		var factory = {};

		factory.checkCustomer = function(info, callback)
		{
			info_json = {name: info};
			$http.post("/customerNameCheck", info_json).success(function(output){
				callback(output);
			});
		};

		factory.getCustomers = function(callback)
		{
			$http.get("/customers").success(function(output) {
				callback(output);
			});
		};

		factory.addCustomer = function (info, callback) 
		{
			$http.post('/newcustomer', info).success(function(output) {
				callback(output);
			});
		};

		factory.removeCustomer = function (info, callback) 
		{
			json_id = {_id: info};
			$http.post('/destroycustomer', json_id).success(function(output) {
				callback(output);
			});
		};
		return factory;
	});