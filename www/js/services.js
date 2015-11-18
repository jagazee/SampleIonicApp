angular.module('starter.services', [])
  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })


  .factory('hotelService', function ($http) {
    // Might use a resource here that returns a JSON array
    // Some fake hotel data
    var hotels = [];
    var items = [];


    return {
      all: function () {
          return $http.get('../hotel.json').then(function(result){
            hotels = result.data;
            return result.data;
        });
      },

      get: function (hotelId) {
        for (var i = 0; i < hotels.length; i++) {
          if (hotels[i].id === parseInt(hotelId)) {
            return hotels[i];
          }
        }
        return null;
      },
      push:function(selectedItems){
        items = selectedItems;
      },
      getItems:function(){
        return items;
      }
    };
  })


  .factory('menuService', function () {
    //Test data for Menu

    var menu = [{
      id: 0,
      name: 'Veg Pizza -small',
      price: 12.99
    }, {
      id: 1,
      name: 'Veg Pizza -large',
      price: 16.99
    }, {
      id: 2,
      name: 'lunch specials',
      price: 13.00
    }, {
      id: 3,
      name: 'Salads',
      price: 8.00
    }, {
      id: 4,
      name: 'Entrees',
      price: 15.00
    }];

    return {
      getMenu: getMenu
    };
    function getMenu() {
      return menu;
    }
  })

  .factory('orderService',function(){
    var items = [];
    return {
      createBill: createBill
    };
    function createBill(selectedItems) {
      console.log('Bill created!!');
      items = selectedItems;
        var total = 0;
        for(var i = 0; i < items.length; i++){
          var item = items[i];
          total += (item.price);
        }
        return total;
      }
  });


