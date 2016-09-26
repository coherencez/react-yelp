import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'

import Header from 'components/Header/Header'


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
        <Map
          google={this.props.google}
          onReady={this.onReady.bind(this)}
          visible={false}>
          <Header />

          {this.state.places.map(place => {
            return (<div key={place.id}>{place.name}</div>)
          })}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
