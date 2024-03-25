import React from "react";
import Lamode from "../images/lamodeviends.png"
import Maquetacion from "../images/img-maquetacion-sena.png"
import Zozor from "../images/sena-zozor.png"

const Portafolio = () => {
    return (
        <section id="portafolio" className="container-fluid degradado-portafolio wow animate-delay-2s animate__animated animate__zoomInDown">
            <div className="titulo-portafolio">
                <h1 className="text-ortafolio">Portafolio</h1>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 contenedor-principal">
                    <div className="portafolio">
                        <div className="contenedor-imagen-proyectos">
                            <a href="https://camilocsr.github.io/lamodeviends/"><img className="imagen-blanco-y-negro-portafolio" src={Lamode} alt="Pagina de ropa la cual sigue en curso, proyecto personal."/></a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 contenedor-principal">
                    <div className="portafolio">
                        <div className="contenedor-imagen-proyectos">
                            <a href="https://camilocsr.github.io/maquetacion_uno/"><img className="imagen-blanco-y-negro-portafolio" src={Maquetacion} alt="img del Proyecto de maquetacion el cual me pidio la institucion educativa del sena"/></a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 contenedor-principal">
                    <div className="portafolio">
                        <div className="contenedor-imagen-proyectos">
                            <a href="https://camilocsr.github.io/proyecto-sena-zozor/"><img className="imagen-blanco-y-negro-portafolio" src={Zozor} alt="proyecto llamado zozor el cual fue realizado por mi a peticion de un profesor del sena"/></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portafolio;