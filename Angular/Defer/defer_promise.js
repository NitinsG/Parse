/* Defer actually means :

  1. A function has been performed , or a service for feching data has been done , so based upon output we can exceute set of instructions defined in:
     a) Resolve 
     b) Reject
     c) Notify
*/

var query = function (endpoint) {
  var deferred = $q.defer();
  $http.get(endpoint)
  .success(function (data) {
    deferred.resolve(data);
  })
  .error(function (data) {
    deferred.reject(data);
  });
  return deferred.promise;
};

// usage
  var someGet = query('/someEndpoint');

  someGet.then(function (data) {
       // success, do something with data
       // typically bind to a Controller `this` value
   }, function (reason) {
      // fail, do something with reason
  });

   someGet.then(function setps2(){
     // Get executed on success
   }, function failure2(reason){
     // Get exceuted on failure
   });


/*

  Can also be chained like following:
 
  someGet.then(function (data) {
       // success, do something with data
       // typically bind to a Controller `this` value
   }, function (reason) {
      // fail, do something with reason
  }).then(function success2() {}, function failure2() {}).then(function success3() {}, function failure3() {});

*/


// Example

/* ES5, using Bluebird */
var isDadHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isDadHappy) {
            var phone = {
                brand: 'IPhone',
                color: 'black'
            };
            resolve(phone);
        } else {
            var reason = new Error('dad is not happy');
            reject(reason);
        }

    }
);

var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    //return Promise.resolve(message);                     //both return and Promise.resolve work
      return message;
};

// call our promise
var askDad = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            console.log(fulfilled);
            // return Promise.resolve(fulfilled);          //both return and Promise.resolve will work
            return fulfilled;
        })
        .then(showOff)
        .then(function (message) { console.log (message);})  //last method not retruing anything back , so chain ends here
        .catch(function (error) {
            // ops, dad don't buy it
            console.log(error.message);                    //Just change the value to false for catch
        });
}

askDad();


