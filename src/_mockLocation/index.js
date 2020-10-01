import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001

const getLocation = (increment) => {
  return {
    timestamp: 1601066790278 + increment * 1000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude:
        0.5783583 + (Math.random() * 10 - 5) * increment * tenMetersWithDegrees,
      latitude:
        51.3750834 +
        (Math.random() * 10 - 5) * increment * tenMetersWithDegrees,
    },
  }
}

let counter = 0

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  })
  counter++
}, 1000)
