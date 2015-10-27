angular.module('angularfireSlackApp').factory('Auth',function(){
var ref = new Firebase(FireBaseUrl);
var auth = $firebaseAuth(ref);
return auth;
});
