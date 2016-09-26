import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'


export class Container extends React.Component {
  onReady(mapProps, map) {
    // when map is ready and mounted
    const {google} = this.props
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        // we got some result and a pagination obj
      })
      .catch((status, result) => {
        // there was an error
      })
  }
  render() {
    return (
      <div>
        Hello from the container
        <Map
          onReady={this.onReady.bind(this)}
          google={this.props.google}
        />
      </div>
    )
  }
}

console.log(process)
export default GoogleApiWrapper({
  apiKey: process.env.__GAPI_KEY__
})(Container)
