import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'


export class Container extends React.Component {
  onReady() {
    // when map is ready and mounted
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
