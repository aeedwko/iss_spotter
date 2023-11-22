const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("207.244.143.210", (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
  
//   console.log(coords);
// });

// fetchISSFlyOverTimes({ latitude: 49.2057179, longitude: -122.910956 }, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log(flyOverTimes);
// });

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  for (const flyOver of flyOverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(flyOver.risetime);
    const duration = flyOver.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});