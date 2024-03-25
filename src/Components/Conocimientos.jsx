import React from "react";
import VisualFoto from "../images/vscode.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faUnity, faNodeJs, faPhp, faJava, faSass, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const Conocimientos = () => {
    return (
        <section id="conocimientos" className="container-fluid contenedor-color-abilidades wow animate__animated animate__bounceInDown animate__delay-2s">
            <h1 className="habilidadesh1">Conocimientos</h1>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faHtml5} />Html</span></p>
                    <span className="numero">90%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje1"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faCss3} />Css</span></p>
                    <span className="numero">90%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje5"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faJs} />JavaScript</span></p>
                    <span className="numero">75%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje2"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faUnity} /> Unity</span></p>
                    <span className="numero">81%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-unity"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faNodeJs} /> Node.js</span></p>
                    <span className="numero">90%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-Node"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faReact} /> React</span></p>
                    <span className="numero">58%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-React"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faPhp} /> Php</span></p>
                    <span className="numero">15%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-Php"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faJava} /> Java</span></p>
                    <span className="numero">50%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-Java"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faSass} />SASS</span></p>
                    <span className="numero">55%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje3"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><img className="viscodeimg" src={VisualFoto} alt="visual studio code" width="30" /> Vscode</span></p>
                    <span className="numero">78%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-visual"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faGithub} />Git</span></p>
                    <span className="numero">85%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-git"></div>
                </div>
            </div>

            <div className="inf">
                <div className="informacion">
                    <p><span className="listado"><FontAwesomeIcon className="fa-brands famm" icon={faBootstrap} />Bootstrap</span></p>
                    <span className="numero">92%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-boostrap"></div>
                </div>
            </div>



            {/* Otros divs de conocimientos */}

            <h1 id="habilidades-blandas" className="habilidadesh1">Habilidades blandas</h1>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Creatividad</span></p>
                    <span className="numero">90%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje6"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Sociabilidad</span></p>
                    <span className="numero">68%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje7"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Asertivo</span></p>
                    <span className="numero">82%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje8"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Paciente</span></p>
                    <span className="numero">70%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje9"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Comunicación</span></p>
                    <span className="numero">82%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje10"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Servicio al cliente</span></p>
                    <span className="numero">86%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje11"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Inteligencia emocional</span></p>
                    <span className="numero">88%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje12"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Productividad</span></p>
                    <span className="numero">92%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje13"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Fluidez verval</span></p>
                    <span className="numero">79%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje14"></div>
                </div>
            </div>
            <div className="inf">
                <div className="informacion">
                    <p><span className="listado">Gestion del cambio</span></p>
                    <span className="numero">86%</span>
                </div>
                <div className="barra-porsentaje">
                    <div id="css" className="barra-porsentaje15"></div>
                </div>
            </div>
        </section>
    );
}

export default Conocimientos;
