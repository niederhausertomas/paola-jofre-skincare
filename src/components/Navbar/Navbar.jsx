import React from 'react'

const Navbar = ({isInHeader}) => {
    console.log(isInHeader);
    if(isInHeader){ 
        return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar scroll</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px'}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
        }
        else{
            return ( 
                <nav>        
                        <div className='footer'>
                            <ul className="d-flex justify-content-evenly align-items-center">
                                <li>
                                    <a className="nav-link active" aria-current="page">Contact</a>
                                </li>
                                <li>
                                    <a className="nav-link" >Instagram</a>
                                </li>
                                <li>
                                    <a className="nav-link disabled">Facebook</a>
                                </li>
                                <li>
                                    <a className="nav-link disabled">Whatsapp</a>
                                </li>
                                <li>
                                    <img className='logoFooter' src='../logo.jpg' alt="Logo de Paola Jofre"/>
                                </li>
                            </ul>
                        </div>
                </nav>
            );
        };

};

export default Navbar;