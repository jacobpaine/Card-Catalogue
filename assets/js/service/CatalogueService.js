catalogueApp.service('CatalogueService', function($http, $q) {
  return {
    'getCards': function() {
      var defer = $q.defer();
      $http.get('/Card/getCards').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addCards': function(card) {
      var defer = $q.defer();
      $http.post('/Card/addCards', card).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeCards': function(card) {
      var defer = $q.defer();
      $http.post('/cards/removeCards', card).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});
