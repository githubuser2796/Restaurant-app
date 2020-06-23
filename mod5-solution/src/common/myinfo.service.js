(function () {
    "use strict";

    angular.module('common')
    .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;
        var user;

         //Only handling one user, but this should be an add method
         service.setUser = function(newUser) {
           console.log("Setting user...");
           user = {
             fname: newUser.fname,
             lname: newUser.lname,
             email: newUser.email,
             phone: newUser.phone,
             favmenu: newUser.favmenu,
             favoriteMenuItem: newUser.favoriteMenuItem
           };
           console.log("Set user!");
         };

         //Only handling one user, but this should be an get method
         // with index as argument
         service.getUser = function() {
           return user;
         };
  }
})();
