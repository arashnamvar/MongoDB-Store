// ORDERS CONTROLLER 
customers_orders.controller('ordersController', function($scope, customerFactory, orderFactory, productFactory){
	
	customerFactory.getCustomers(function(data1) {
		$scope.customers = data1;
	});
	
	productFactory.getProducts(function(data2) {
		$scope.products = data2;
	});

	orderFactory.getOrders(function(data2) {
		$scope.orders = data2;
	});
	
	$scope.addOrder = function(){
		$scope.newOrder.created_date = new Date();
		$scope.newOrder.created_date_mil = $scope.newOrder.created_date.getTime();
		orderFactory.addOrder($scope.newOrder, function(output){
			if(output.message_err)
			{
				$scope.errors = output.message_err;
			}
			else
			{
			$scope.errors = '';
			orderFactory.getOrders(function(data3) {
				$scope.orders = data3;
			});
			$scope.newOrder = {};
			}
		});
	};
});

// ORDERS FACTORY
customers_orders.factory('orderFactory', function($http) {
	factory = {};

	factory.addOrder = function(info, callback){
		$http.post('/neworder', info).success(function(output){
			callback(output);
		});
	};

	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			callback(output);
		});
	};

	return factory;
});