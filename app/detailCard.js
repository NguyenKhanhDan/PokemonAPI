app.controller("detailPokemonCtrl", function($scope, $rootScope, $http) {
    $scope.detailCard = function (name){
        window.location.href = "#detailPokemon";
        $rootScope.pokemon_name = name;
        $http({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/' + name
        }).then(function successCallback(response) {
            $rootScope.id = response.data.index;
            $rootScope.height = response.data.height;
            $rootScope.weight = response.data.weight;
            $rootScope.hp = response.data.stats[0].base_stat;
            $rootScope.attack = response.data.stats[1].base_stat;
            $rootScope.defense = response.data.stats[2].base_stat;
            $rootScope.atq = response.data.stats[3].base_stat;
            $rootScope.def = response.data.stats[4].base_stat;
            $rootScope.speed = response.data.stats[5].base_stat;
            $rootScope.pokemon_image = response.data.sprites.other.home.front_default;
        
            if (response.data.types.length >= 2) {
                $rootScope.cardType = 
                response.data.types[0].type.name
               +" | "+ response.data.types[1].type.name
               console.log($rootScope.cardType);
            } else {
                $rootScope.cardType = response.data.types[0].type.name
            }
        
        }, function errorCallback(response) {
            console.log("Error");
        }); 
        
    }
});