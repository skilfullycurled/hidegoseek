//var Argon = require('@argonjs/argon');

// console.log("step 1a");
// const app = Argon.init();
// app.context.setDefaultReferenceFrame(app.context.localOriginEastUpSouth);
// console.log("step 1b");

var Cesium = Argon.Cesium;
var Cartesian3 = Cesium.Cartesian3;
var ConstantPositionProperty = Cesium.ConstantPositionProperty;
var ReferenceFrame = Cesium.ReferenceFrame;
var ReferenceEntity = Cesium.ReferenceEntity;

var arScene = document.querySelector('ar-scene');
var app = arScene.arApp;


console.log("step 1c");


//var degToRad = THREE.Math.degToRad;

//app.context.setDefaultReferenceFrame(app.context.localOriginEastUpSouth);

// console.log(Cesium.Cartesian3.fromDegrees(-109.080842,45.002073, 0));
// // prints (-1476755.8693633159, -4269232.672797112, 4487511.306503918)
//
// var data = { lla : { x : -84.398881, y : 33.778463, z : 276 }};
//
//
//
//
// var gtref = Cartesian3.fromDegrees(data.lla.x, data.lla.y, data.lla.z);
// var options = { position: new ConstantPositionProperty(gtref, ReferenceFrame.FIXED),
//                 orientation:  Cesium.Quaternion.IDENTITY
//               };
//
// var gtrefEntity = new Cesium.Entity(options);
// //app.context.setDefaultReferenceFrame(gtrefEntity);
//
// console.log(gtrefEntity);
// var gtrefEntityPose = app.context.getEntityPose(gtrefEntity);
//
// console.log(gtrefEntityPose);



//MADISON AVE DATA
console.log("step 1d");

var madData = { lla : { x : -84.31170953, y : 33.75557504, z : 299 }};
console.log("step 1e");

var madRef = Cartesian3.fromDegrees(madData.lla.x, madData.lla.y, madData.lla.z);
console.log("step 1f");

var options = { position: new ConstantPositionProperty(madRef),
                orientation:  Cesium.Quaternion.IDENTITY
              };
console.log("step 1g");

var madEntity = new Cesium.Entity(options);
console.log("step 1h");

var madEntityPose = app.context.getEntityPose(madEntity);
console.log("step 1i");

console.log("step 1j");

console.log('madEntityPose:')
console.log(madEntityPose)
console.log("step 1k");

var madP1Data = { lla : { x : -84.31168271, y : 33.75553878, z : 297 }};
var madP1Ref = Cartesian3.fromDegrees(madP1Data.lla.x, madP1Data.lla.y, madP1Data.lla.z);
var options = { position: new ConstantPositionProperty(madP1Ref, madEntity),
                orientation:  Cesium.Quaternion.IDENTITY
              };
var madP1Entity = new Cesium.Entity(options);
var madP1EntityPose = app.context.getEntityPose(madP1Entity);

console.log('madP1EntityPose:')
console.log(madP1EntityPose)



// //MADISON AVE P1
// Lon: 33.75553878
// Lat: -84.31168271
// Alt: 297 m
//
// //MADISON AVE P2
// Lon: 33.75556558
// Lat: -84.31166662
// Alt: 297 m
