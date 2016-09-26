export const searchNearby = (google, map, request) => {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map)

    service.nearbySearch(request, (results, status, pagination) => {
      if(status === google.maps.places.PlacesServiceStatus.OK) {
        return resolve(results, pagination)
      } else {
        return reject(results, status)
      }
    })
  })
}

export const getDetails = (google, map, placeId) => {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map)
    console.log('HELLO FROM HELPERS:', placeId);
    const request = {placeId}

    service.getDetails(request, (place, status) => {
      if(status !== google.maps.places.PlacesServiceStatus.OK) {
        return reject(status)
      } else {
        return resolve(place)
      }
    })
  })
}
