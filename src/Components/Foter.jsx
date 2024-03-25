import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faFacebookMessenger, faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoCamilo from "../images/csr-foo.png"

const Footer = () => {
  return (
    <footer className="container-fluid color-pie-pagina">
      <div className="row">
        <div className="contenedor-pie-de-pagina col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <img className="animate__animated wow animate__heartBeat animate-delay-2s" src={LogoCamilo} alt="logo de la pagina, camilo solano rodriguez" width="100" />
          <p>Este portafolio fue creado con las siguientes tecnologias:
          
          <span className="white-contacto">React</span>, <span className="white-contacto">Vite</span>, <span className="white-contacto">JavaScript</span>, <span className="white-contacto">Node.js</span>, <span className="white-contacto">Boostrap</span>, <span className="white-contacto">Font Awesome</span>, <span className="white-contacto">Sass</span>, <span className="white-contacto">Wow.js</span>.
          </p>
        </div>
        <div className="contenedor-pie-de-pagina col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <h3 className="ziz wow animate__animated animate__wobble animate__delay-1s">Información <br />de contacto</h3>
          <p className="wow animate__animated animate__jello animate__delay-1s">whatsapp: <span className="white-contacto">+57 313 636 8783</span><br />
            Celular: <span className="white-contacto">+57 313 636 8783</span><br />
            Correo: <span className="white-contacto">esmunred@gmail.com</span></p>
        </div>
        <div className="contenedor-pie-de-pagina wow animate__animated animate__bounceInUp animate-delay-4s col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <h3>Redes sociales</h3>
          <p>Me puedes encontrar en redes sociales como:<br/>
            Meta/Facebook: <span className="white-contacto">Camilo Solno Rodriguez</span><br/>
            Instagram/Threads: <span className="white-contacto">@camilosolanoro</span><br/>
            GitHub: <span className="white-contacto">Camilocsr</span><br/><br/>
            Puedes seleccionar en el icono de red social que prefieras.
          </p>
          <a href="https://api.whatsapp.com/send?phone=573136368783&text=Buenos%20dias%20o%20buenas%20tardes%2C%20le%20hablo%20por%20el%20motivo%20de%3A"><FontAwesomeIcon className="fa-brands" icon={faWhatsapp} /></a>
          <a href="https://www.facebook.com/camilosolanorodriguez"><FontAwesomeIcon className="fa-brands" icon={faFacebook} /></a>
          <a href="https://www.facebook.com/messages/t/100023768829242"><FontAwesomeIcon className="fa-brands" icon={faFacebookMessenger} /></a>
          <a href="https://github.com/Camilocsr"><FontAwesomeIcon className="fa-brands" icon={faGithub} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;