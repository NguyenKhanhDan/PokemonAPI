var app = angular.module("myApp", ["ngRoute"]);
app.run(function ($rootScope, $http) {
    // $rootScope.listPokemons = [];
    // $rootScope.indexImg = 0;
    var indexImg =0;
    $rootScope.indexType = 0;
    $rootScope.elem = [];
    $rootScope.type = [];

    $http({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon",
    }).then(
        function successCallback(response) {
            $rootScope.listPokemons = response.data.results;

            //Hiển thị ảnh ra list

            $rootScope.listPokemons.forEach((arr) => {
                $http({
                    method: "GET",
                    url: "https://pokeapi.co/api/v2/pokemon/" + arr.name,
                }).then(function successCallback(response) {
                    var item_img = response.data.sprites.other.home.front_default;
                    $rootScope.elem[indexImg] = item_img;
                    indexImg++;
                    //Hiển thị thuộc tính
                    if (response.data.types.length >= 2) {
                        var item_type = 
                        response.data.types[0].type.name
                       +" | "+ response.data.types[1].type.name;
                       $rootScope.type[$rootScope.indexType] = item_type;
                       $rootScope.indexType++;
                    } else {
                        var item_type = response.data.types[0].type.name;
                        $rootScope.type[$rootScope.indexType] = item_type;
                        $rootScope.indexType++;
                    }
                   
                });
            
            });
        },
        function errorCallback(response) {
            console.log("Error");
        });

    
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/CardPokemon", {
            templateUrl: "html/CardPokemon.html",
            controller: "CardPokemonCtrl",
        })
        .when("/detailPokemon", {
            templateUrl: "html/DetailPokemon.html",
            controller: "detailPokemonCtrl",
        })
        .otherwise({
            redirectTo: "/CardPokemon",
        });
});
