import React from 'react'
import { Link } from 'react-router'

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Yelp</h1></Link>
        <section>
          Swanntoo.com
        </section>
      </div>
    )
  }
}

export default Header
