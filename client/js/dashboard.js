

customers_orders.controller("dashboardController", function($scope, dashboardFactory){
    var xyz = new Date();
    $scope.mil_now = xyz.getTime();

    dashboardFactory.getCustomers(function(data) {
        $scope.three_customers = data;
        console.log(data);
    });

        dashboardFactory.getOrders(function(data) {
        $scope.three_orders = data;
        console.log(data);
    });

    $scope.time_mil = function(milliseconds)
    {
    var temp = Math.floor(milliseconds / 1000);
    var years = Math.floor(temp / 31536000);
    if (years) {
        return years + ' years ago';
    }
    var days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
        return days + ' days ago';
    }
    var hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
        return hours + ' hours ago';
    }
    var minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
        return minutes + ' minutes ago';
    }
    var seconds = temp % 60;
    if (seconds) {
        return seconds + ' seconds ago';
    }
    return 'less than a second ago'; //'just now' //or other string you like;
    };

});

customers_orders.factory("dashboardFactory", function($http){
        var factory = {};

        factory.getCustomers = function(callback)
        {
            $http.get("/threecustomers").success(function(output) {
                callback(output);
            });
        };

        factory.getOrders = function(callback)
        {
            $http.get("/threeorders").success(function(output) {
                callback(output);
            });
        };

        return factory;

});