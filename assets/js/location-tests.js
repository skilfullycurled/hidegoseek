console.log('step one');

var geolocationOptions = {

    enableHighAccuracy: true,
    //timeout: 5000,
    maximumAge: 0

};

console.log('geolocationOptions');
console.log(geolocationOptions.enableHighAccuracy);
console.log(geolocationOptions.maximumAge);

// function checkReceivedLocation(positionData)
// {
//
//     currentLocation = positionData.coords;
//
//     var statusMessage= "";
//
//     //calculating distance with the circleDistance script.
//     var newDistance=circleDistance(currentLocation.longitude, currentLocation.latitude,
//                               chosenLocation.longitude, chosenLocation.latitude);
//
//     statusMessage = 'The distance between current and chosen location is: '+ newDistance.toFixed(5)+ ' km.';
//
//
//     if (newDistance <= minDistance )
//       {
//           statusMessage += '<br>Yes, you are close to that location!';
//
//           //if using the watchPosition, this tells the geolocation to stop searching.
//             navigator.geolocation.clearWatch(geolocationCall);
//
//           //Play the sound effect.
//           soundElement.play();
//       }
//
//       else
//           statusMessage += '<br>No, you are -not- close to that location.<br>';
//
//
//       //Displaying an error message.
//       var messageElement= document.getElementById("choiceMsg");
//       messageElement.innerHTML+=statusMessage;
//
// }
