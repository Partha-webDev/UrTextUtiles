import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{props.home}<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            <div className="switch">
                <button  className="changemode btn px-1 py-1 btn-primary" onClick={props.toggleMode}>
                    Enable {props.mode === "light" ? "Dark" : "Light"} mode 
                </button>
            </div>
    
            </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    home: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    home: "Its Home Page",
    about: "About"
}
