catalogueApp.service('CatalogueService', function($http, $q) {
  return {
    'getCards': function() {
      var defer = $q.defer();
      $http.get('/Card').success(function(res){
        defer.resolve(res);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addCards': function(card) {
      var defer = $q.defer();
      $http.post('/Card/addCards', card).success(function(res){
        defer.resolve(res);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateCard': function(card) {
      var defer = $q.defer();
      $http.put('/Card/'+ card.id, card).success(function(res){
        defer.resolve(res);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },

    'removeCards': function(card) {
      var defer = $q.defer();
      $http.delete('/Card/' + card.id).success(function(res){
        defer.resolve(res);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});
