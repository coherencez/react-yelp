import React, {PropTypes as T} from 'react'
import {getDetails} from 'utils/googleApiHelpers'
import styles from './styles.module.css'

export class Detail extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: true,
      place: {},
      location: {}
    }
  }
  componentDidMount() {
    if(this.props.map) {
      this.getDetailsInfo(this.props.map)
    }
  }
  componentDidUpdate(prevProps) {
    if(this.props.map &&
      (prevProps.map !== this.props.map ||
      prevProps.params.placeId !== this.props.params.placeId)) {
        this.getDetailsInfo(this.props.map)
      }
  }
  getDetailsInfo(map) {
    // the placeId comes from the URL, pssed into
    // this compoent through params
    const {google, params} = this.props
    const {placeId} = params
    console.log('DETAILS STATE:', this.state)

    // set the loading state
    this.setState({loading: true}, () => {
      getDetails(google, map, placeId)
        .then(place => {
          const {location} = place.geometry
          const loc = {
            lat: location.lat(),
            lng: location.lng()
          }

          this.setState({
            place, location: loc, loading: false
          })
        })
    })
  }
  renderPhotos() {
    
  }
  render() {
    if (this.state.loading) {
     return (<div className={styles.wrapper}>
               Loading...
             </div>)
     }
     // We're no longer loading when we get here
     const {place} = this.state;
     return (
       <div className={styles.wrapper}>
         <div className={styles.header}>
           <h2>{place.name}</h2>
         </div>
         <div className={styles.details}>
          {this.renderPhotos(place)}
         </div>
       </div>
     )
   }
}

export default Detail
