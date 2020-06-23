(function () {
    "use strict";

    angular.module('common')
    .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;
        var users_info;
    service.getInfo = function()
    {
      return users_info;
    };

    service.storeInfo = function(fname,lname,email,phone,favmenu)
    {
      var temp={
        FirstName:fname,
        LastName:lname,
        MailId:email,
        Phone:phone,
        FavoriteDish:favmenu
      };
      users_info = temp;
      return(1);
    };
  }
})();
