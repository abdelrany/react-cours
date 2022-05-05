import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const {home,aboutus,addcontact}=props;
  return (

        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{home}</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">{home}</Link>
                        <Link className="nav-link active" aria-current="page" to="/contact/add">{addcontact}</Link>
                        <Link className="nav-link active" aria-current="page" to="/about">{aboutus}</Link>
                        </div>
                    </div>
                </div>
        </nav>
  )
}
Navbar.defaultProps={
    home : "Home",
    aboutus: "About US",
    addcontact: 'Add Contact'
}

Navbar.propTypes={
// name:PropTypes.string.isRequired,
email:PropTypes.string
}

export default Navbar