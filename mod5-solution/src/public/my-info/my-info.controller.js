(function() {
    'use strict';

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];
  function MyInfoController(user) {
    var $ctrl = this;

    $ctrl.signedUp = false;
      $ctrl.favoriteMenuItem;

      if(user) {
        $ctrl.signedUp = true;
        $ctrl.fname = user.fname;
        $ctrl.lname = user.lname;
        $ctrl.email = user.email;
        $ctrl.phone = user.phone;
        $ctrl.favmenu = user.favmenu;
        $ctrl.favoriteMenuItem = user.favoriteMenuItem;
      }
      else {
        $ctrl.signedUp = false;
      }
  }

})();
