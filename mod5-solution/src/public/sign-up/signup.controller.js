(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService']
function SignUpController(MyInfoService) {
  var reg = this;
  reg.submit = function ()
   {
    var res = MyInfoService.storeInfo(reg.userInfo.fname,reg.userInfo.lname,reg.userInfo.email,reg.userInfo.phone,reg.userInfo.favmenu);
    if(res == 1){
      reg.completed = true;
    }
  };
}

})();
