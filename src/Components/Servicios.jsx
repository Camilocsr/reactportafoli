import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons';

const Servicios = () => {
    return (
        <section id="servicios" className="container-fluid separacion1">
            <div className="row">
                <div className="titulo-portafolio">
                    <h1 className="text-ortafolio">Servicios los cuales manejo.</h1>
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="container-html-tecnologias">
                        <div className="html"><FontAwesomeIcon className="fa-brands" icon={faHtml5} /></div>
                        <h1 className="centrar-h1-html">Desarrollo Web</h1>
                        <hr className="hr4" />
                        <p><li className="desaparecer-punto">Apps Webs</li></p>
                        <p className="centrar-texto-html">Experto en maquetación web y desarrollo de aplicaciones web utilizando diversos frameworks como React. Capaz de diseñar y crear sitios web de cualquier tipo, adaptándome a las necesidades y especificaciones del cliente con precisión y eficiencia.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="container-html-tecnologias">
                        <div className="html"><FontAwesomeIcon className="fa-brands" icon={faCss3Alt} /></div>
                        <h1 className="centrar-h1-html">Video Juegos</h1>
                        <hr className="hr4" />
                        <p><li className="desaparecer-punto">Usando Unity y desarrollo en VR</li></p>
                        <p className="centrar-texto-html">Mi experiencia con Unity en la creación de videojuegos para el aprendizaje universitario me brinda la capacidad y confianza necesarias para abordar tu proyecto y cumplir con tus requisitos de manera efectiva y exitosa.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="container-html-tecnologias">
                        <div className="html"><FontAwesomeIcon className="fa-brands" icon={faJsSquare} /></div>
                        <h1 className="centrar-h1-html">API Rest, API Web Socket</h1>
                        <hr className="hr4" />
                        <p><li className="desaparecer-punto">Desarrollo Backend</li></p>
                        <p className="centrar-texto-html">Con amplia experiencia en el desarrollo de APIs REST y APIs WebSocket, puedo diseñar y crear soluciones personalizadas que se ajusten a las necesidades de cada cliente. Esta trayectoria me otorga lo necesario para afrontar tu proyecto.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicios;