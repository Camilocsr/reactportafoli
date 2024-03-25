import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram,  faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = ()=>{
    return (
      <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-navbar-backgraund bg-light">
          <div id="inicio" className="container-fluid">
            <a className="navbar-brand hoversas" href="index.html"><h1 className="logo-text">/csr/</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active hoversas" aria-current="page" href="index.html">INICIO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hoversas" href="#sobremi">Sobre mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hoversas" href="#servicios">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hoversas" href="#conocimientos">Conocimientos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hoversas" href="#habilidades-blandas">Habilidades blandas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hoversas" href="#portafolio">Portafolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hoversas" href="#estudios">Estudios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hoversas" href="#contacto">Contactar</a>
                </li>
              </ul>
              <div className="contenedor-redes-menu">
                <div className="btn-redes">
                  <a className="posicion-iconosredes hoversas" href="https://www.facebook.com/camilosolanorodriguez"><FontAwesomeIcon className="fa-brands" icon={faFacebook} /></a>
                </div>
                <div className="btn-redes">
                  <a className="posicion-iconosredes hoversas" href="https://www.instagram.com/camilosolanoro/"><FontAwesomeIcon className="fa-brands" icon={faInstagram} /></a>
                </div>
                <div className="btn-redes">
                  <a className="posicion-iconosredes hoversas" href="https://github.com/Camilocsr"><FontAwesomeIcon className="fa-brands" icon={faGithub} /></a>
                </div>
                <div className="btn-redes">
                  <a className="posicion-iconosredes hoversas wow animate__animated animate__swing" href="https://api.whatsapp.com/send?phone=573117022824&text=Buenos%20dias%20o%20buenas%20tardes%2C%20le%20hablo%20por%20el%20motivo%20de%3A"><FontAwesomeIcon className="fa-brands" icon={faWhatsapp} /></a>
                </div>
              </div>
            </div>
          </div>
      </nav>
    </header>
    )
}

export default Header;