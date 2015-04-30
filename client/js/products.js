customers_orders.controller('productsController', function($scope, productFactory){
	$scope.quantity = 16;

	$scope.showMore = function()
	{
		$scope.quantity += (Math.floor(window.innerHeight / 245)+1) *4;
	};

	productFactory.getProducts(function(data){
					$scope.products = data;
				});
	$scope.addProduct = function()
	{
		$scope.newProduct.created_date = new Date();
		// DO VALIDATION
		$scope.newProduct.created_date_mil = $scope.newProduct.created_date.getTime();
		productFactory.addProduct($scope.newProduct, function(){
			productFactory.getProducts(function(data){
				$scope.products = data;
			});
		});
		$scope.newProduct = {};
	};
});


customers_orders.factory('productFactory', function($http) {
	factory = {};

	factory.getProducts = function(callback){
		$http.get('/products').success(function(output){
			callback(output);
		});
	};

	factory.addProduct = function(info, callback){
		$http.post('/newProduct', info).success(function(output){
			callback(output);
		});
	};

		return factory;
	});