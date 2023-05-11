app.controller("CardPokemonCtrl", function ($scope, $rootScope, $http) {
    $scope.list = $rootScope.listPokemons;
    // $rootScope.indexFilterType = 0;
    // Tìm kiếm
    $scope.Search = function () {
        $rootScope.begin = 0;
        if ($scope.search == null) {
            $scope.list = $rootScope.listPokemons;
        } else {
            $scope.SubjectTemp = [];
            var dem = 0;
            for (var i = 0; i < $rootScope.listPokemons.length; i++) {
                if ((($rootScope.listPokemons[i].name).toLowerCase()).includes(($scope.search).toLowerCase())) {
                    $scope.SubjectTemp[dem] = $rootScope.listPokemons[i];
                    dem++;
                }

            }
            $scope.list = $scope.SubjectTemp;
        }
    }
    
    //Lọc
    // $scope.FilterByType = function (type) {
    //     $scope.pokesByType = [];
    //     var dem1 = 0;
    //     if ($scope.FilterByType == null) {
    //         $scope.list = $rootScope.listPokemons;
    //     } else {
    //         $rootScope.listPokemons.forEach((arr1) => {
    //             $http({
    //                 method: "GET",
    //                 url: "https://pokeapi.co/api/v2/pokemon/" + arr1.name,
    //             }).then(function successCallback(response) {
    //                 console.log(' hello');
    //                 if(response.data.types[0].type.name == type){
    //                     console.log(' Hi');
    //                     $scope.pokesByType[dem1] = arr1[$rootScope.indexFilterType];
    //                     $rootScope.indexFilterType++;
    //                     dem1++;
    //                     console.log(' 1');
    //                 }else if (response.data.types[1].type.name == type) {
    //                     $scope.pokesByType[dem1] = arr1[$rootScope.indexFilterType];
    //                     dem1++;
    //                     $rootScope.indexFilterType++;
    //                     console.log(' 2');
    //                 }else {
    //                     if (response.data.types[0].type.name == type) {
    //                         $scope.pokesByType[dem1] = arr1[$rootScope.indexFilterType];
    //                         dem1++;
    //                         $rootScope.indexFilterType++;
    //                       console.log(' 3')
    //                     }
    //                   }
    //             });
    //             $scope.list = $scope.pokesByType;
    //         });
    //   }}
});