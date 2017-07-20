//https://wanasit.github.io/articles/real-time-location-sharing-with-socket-io.html

var s4 = function(){
  // return Math.floor( ( 1 + Math.random() ) ) * 0x10000).toString(16).substring(1);
  return Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString(16).substring(1);
}

var guid = function(){

  return s4() + s4() + '-' + s4() + s4();

}

// function initLocationSharing(locationCallback, errorCallback){
//   console.log('here we are!');
//
//
//
//   var userInfo = {id: guid(), name: 'Anonymous'}
//
//   var socket = io.connect('http://crld.in:8082');
//
//   socket.on('connect', function () {
//       socket.on('location', function(location){
//           if(location.id != userInfo.id) {
//               locationCallback(location);
//           }
//       })
//   });
//
//   if(!navigator.geolocation){
//     return userInfo;
//   }
//
//   function geoSuccess(position){
//
//     userInfo.latitude = position.coords.latitude;
//     userInfo.longitude = position.coords.longitude;
//
//     locationCallback(userInfo);
//     sendLocation();
//
//   }
//
//   function geoError(){
//     errorCallback();
//   }
//
//   var sendLocationTimeOut = null;
//
//   function sendLocation(){
//     socket.emit('location', userInfo);
//     clearTimeout(sendLocationTimeout);
//     sendLocationTimeout = setTimeout(sendLocation, 1000*5);
//   }
//
//   var geoOptions = {enableHighAccuracy: true};
//   navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
//   navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
//
//   return userInfo;
// }
