import React from "react";
import Sobremi from "../images/sobremi.jpg"

const SobreMi = ()=>{
    return (
        <section id="sobremi" className="container-fluid separacion">
    <div className="row">
      <div className="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
      <div className="col-12 col-sm-5 col-md-5 col-lg-15 col-xl-5 col-xxl-5">
        <img className="contenedor-img wow animate__animated animate__fadeInTopLeft animate__delay-1s" src={Sobremi} alt="Camilo Solano Rodriguez."/>
      </div>
      <div className="col-12 col-sm-5 col-md-5 col-lg-15 col-xl-5 col-xxl-5 wow animate__animated animate__fadeInTopLeft cnm">
        <h1 className="sobremih1">Sobre mi</h1>
        <h2 className="nombre-sobre">Hola soy <span className="nombre-color">Camilo Solano.</span></h2>
        <p className="parrafo-desarrollador">Desarrollador Web</p>
        <p className="parrafo-descrpcion-pequena">Soy un joven altamente responsable.</p>
        <p className="parrafo-descrpcion-pequena">Honesto, creativo, cumplido, y tengo una muy buena facilidad para trabajar en equipo.</p>
        <hr/>
        <div className="btn-subir"><a className="btn-return" href="#servicios">Servicios.</a></div>
      </div>
      <div className="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
    </div>
  </section>
    )
}

export default SobreMi;