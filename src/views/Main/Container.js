import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'


export class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      places: [],
      pagination: null
    }
  }
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
        this.setState({
          places: results,
          pagination
        })
      })
      .catch((status, result) => {
        // there was an error
        console.error(status)
        console.error(result)
      })
  }
  render() {
    return (
      <div>
        Hello from the container
        <Map
          google={this.props.google}
          onReady={this.onReady.bind(this)}
          visible={false}>

          {this.state.places.map(place => {
            return (<div key={place.id}>{place.name}</div>)
          })}
        </Map>
      </div>
    )
  }
}

console.log(process)
export default GoogleApiWrapper({
  apiKey: process.env.__GAPI_KEY__
})(Container)
