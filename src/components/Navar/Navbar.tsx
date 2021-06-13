import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="light-green darken-4"> {/*en react la clase es className*/}
                <div className="container">
                    <a className="brand-logo" href="/">Sistema Consulta Tickets</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
