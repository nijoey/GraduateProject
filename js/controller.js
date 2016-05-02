
var shoppersApp = angular.module('ShoppingStore', ['ngRoute']);
shoppersApp.controller('storeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.name = [];
    $scope.productname = [];
    $scope.list = function () {
        var url = '/api/getproducts';
        $("#cart").addClass("hide");
        $http.get(url).then(function (data) {
            
            console.log(data);
            data.data.forEach(function (item, i) {
                $scope.name.push(item.value);
            });
            console.log($scope.name);
        }, function (err) {
            console.log("error: ", err);
        });
    };
    
    $scope.customsFilter = function(list,item){
        var log=[];
        angular.forEach(list,function(key){
            if(key.type == item){
                log.push(key);
            }
        })
        return log;
    }
    $scope.list();
    $scope.goStore = function () {
        var user = getCookie("username");
        if (user) {
            $location.path('/store');
            $("#cart").removeClass("hide");
        }
        else {
            Materialize.toast('Please Login', 3000, 'rounded')
        }
    }
    
    $scope.signUp = function (){
        $("#errorAlert").addClass("hide");
        $("#userName").val("");
        $("#password").val("");
        $('#modal3').openModal();
    }
    
    $scope.signIn = function() {
    $("#signinSuccess").addClass("hide");
    $("#modalsigninerror").addClass("hide");
    $("#siuserName").val("");
    $("#sipassword").val("");
    $('#modalsignin').openModal();
}
    $scope.deleteCart = function(name,skills,type,id,total) {
       var data = ({'productname':name,'description':skills,'type':type,'id':id,'total':total});
       console.log(data);
       $http.post('/api/deletecart',data)
       .success(function(data,status,headers,config){
           if(data="Success"){
               location.reload();
           }
       }) 
       .error(function(data,status,headers,config){
           
       })
    }
    $scope.username = "";
    $scope.password = "";
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (1 * 1 * 1 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    $scope.addCart = function (name, skills, type, id,price,image) {
        console.log($scope.username);
        var user = getCookie("username");
        var data = ({'username':user,'productname':name,'description':skills,'type':type,'id':id,'price':price,'image':image});
        $http.post('/api/addtocart',data)
        .success(function(data, status, headers, config){
            $("#cart").removeClass("hide");
        })
        .error(function(data, status, headers, config){
            console.log(data); 
        })
    }
     
    $scope.checkOut = function(){
       $location.url('/cart');
    };
    $scope.total = 0;
    $scope.viewcart = [];
    $scope.itemcount = 0;
    $scope.checkCart = function(){
        var url = '/api/getcart';
        var user = getCookie("username");
        $http.get(url).then(function (data) {
            data.data.forEach(function (item, i) {
                if (item.key === user) {
                    $scope.productname.push(item.value);
                    $scope.viewcart.push(item.value.name);
                    $scope.itemcount++;
                    $scope.total = (parseFloat($scope.total)+parseFloat(item.value.price)).toFixed(2);
                }
            });
            console.log($scope.productname);
        }, function (err) {
            console.log("error: ", err);
        });
    }
    
    $scope.registerUser = function(userName,password){
        var data1 = ({'username':userName,'password':password});
        console.log(data1);
        $http.post('/api/registeruser',data1)
        .success(function(data, status, headers, config){
            $("#regSuccess").toggleClass("hide");
            if(data){
                setTimeout(function() {
                $('#modal3').closeModal();
                $("#regSuccess").toggleClass("show");
            }, 2000);
            }
        })
        .error(function(data, status, headers, config){
            console.log(data); 
        })
    }
    
       $scope.authenticateUser = function (lusername, lpassword){
       var data = ({'username':lusername,'password':lpassword});
       console.log(data);
       $http.post('/api/authenticateuser',data)
       .success(function(data, status, headers, config){
             $("#signinSuccess").toggleClass("hide");
                 if (data) {
                     data.forEach(function (item, i) {
                         if(item.value.username === lusername && item.value.password === lpassword){
                            $scope.username = item.value.username;
                            $scope.password = item.value.password;
                            setCookie("username", item.value.username,30);
                         }
                     });
                     console.log($scope.username);
                     console.log($scope.password);
                     setTimeout(function () {
                         $('#modalsignin').closeModal();
                         $("#modalsigninerror").toggleClass("hide");
                         $("#signinSuccess").toggleClass("show");
                         $("#cart").removeClass("hide");
                     }, 2000);
                 }
                 $("#signin").addClass("hide");
        })
        .error(function(data, status, headers, config){
            console.log(data); 
        })
    }
    
     
    $('.button-collapse').sideNav();
    $('.materialboxed').materialbox();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('ul.tabs').tabs();
         
}]);
shoppersApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/home.html',
            controller: "storeController"
        }).
        when('/store', {
            templateUrl: '/views/store.html',
              controller: "storeController"
        }).
        when('/cart', {
            templateUrl: '/views/cart.html',
            controller: "storeController"
        }).
        otherwise({
            redirectTo: '/'
        });
}]);