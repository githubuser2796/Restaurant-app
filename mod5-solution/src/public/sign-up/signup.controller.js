(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService','MenuService']
function SignUpController(MyInfoService,MenuService) {
  var $ctrl = this;
    $ctrl.registrationSuccess = false;
    $ctrl.favoriteDishFound = false;
    // $ctrl.testValue = 42; //Displayed as a debug tool to show that controller working

    $ctrl.signUp = function(event) {
      console.log("Sign up started... ");
      event.preventDefault();
      var user = {
            fname: $ctrl.fname,
            lname: $ctrl.lname,
            email: $ctrl.email,
            phone: $ctrl.phone,
            favmenu: $ctrl.favmenu
      };

      MenuService.getMenuItem($ctrl.favmenu)
        .then(function(data) {
          console.log("Dish found:", data);
          user.favoriteMenuItem = data;

          //Set user (using service) - this should be "adding" instead of setting in "real world"
          MyInfoService.setUser(user);
          $ctrl.favoriteDishFound = true;
          $ctrl.registrationSuccess = true;
        }, function(err) {
          console.log("Dish not found...");
          MyInfoService.setUser(user);
          $ctrl.favoriteDishFound = false;
          $ctrl.registrationSuccess = true;
        });
    };

}

})();
