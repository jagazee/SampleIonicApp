angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, hotelService) {

    $scope.hotels = [];

    hotelService.all().then(function(response){
      console.log("data="+ response);
      $scope.hotels =  response;



    });

    $scope.gotClicked = function () {
      console.log("gotClicked");
    };
  })

  .controller('HotelMenuCtrl', function ($scope, $stateParams, menuService, hotelService) {
    var hotelId = $stateParams.hotelId;
    console.log("In hotel Menu controller -" + hotelId);
    $scope.menu = menuService.getMenu();
    $scope.hotel = hotelService.get(hotelId);
    $scope.selection = [];

    $scope.toggleSelection = function (item) {
      console.log("in toggle selection");
      var index = $scope.selection.indexOf(item);
      //is currently selected
      if (index > -1) {
        $scope.selection.splice(index, 1);

      } else {
        //newly selected.
        $scope.selection.push(item);
      }
      hotelService.push($scope.selection);

    };

    /*$scope.createBill = function($state){
     $state.go('tab.orders');
     }*/

  })

  .controller('OrderCtrl', function ($scope, $state, $stateParams, hotelService, orderService) {

    console.log('OrderCtrl called -' + $stateParams.hotelId);

    $scope.hotel = hotelService.get($stateParams.hotelId);
    $scope.items = hotelService.getItems();

    $scope.createBill = function (items) {
      console.log('create bill called');
      return orderService.createBill(items);
    }
  })

  .controller('paymentCtrl', function ($scope, $stateParams, hotelService) {
    console.log('Payments');
    $scope.hotel = hotelService.get($stateParams.hotelId);
    console.log($scope.hotel.img);
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
