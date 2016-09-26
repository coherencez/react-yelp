import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'


class Container extends React.Component {
  render() {
    return (
      <div>
        Hello from the container
        <Map
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
