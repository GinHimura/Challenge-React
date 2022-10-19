import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer(){    
    return(
        <body>
            <div className="footer">
                <div className="container">
                    <div className="share">
                        <h4>CANDIDATE HIRING SYSTEMK</h4>
                        <p>Não há custo nenhum para anunciar suas vagas e você ainda tem a vantagem de apresentar suas oportunidades para candidatos qualificados em todo o Brasil.</p>

                        <button className="social prime"><FaFacebookF/></button>
                        <button className="social"><FaInstagram/></button>
                        <button className="social"><FaLinkedinIn/></button>
                    </div>

                    <div className="linksNav">
                        <div className="navFooter">
                            <ul>
                                <li>
                                    <h3>Nossos links</h3>
                                </li>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/">VAGAS PRA VOCÊ</Link></li>
                                <li><Link to="/">SOBRE NÓS</Link></li>
                            </ul>

                            <ul>
                                <li>
                                    <h3>Para candidato</h3>
                                </li>
                                <li><Link to="/candidato">FAÇA SUA INSCRIÇÃO</Link></li>
                                <li><Link to="/infovagas">INFORMAÇÃO DAS VAGAS</Link></li>
                            </ul>

                            <ul>
                                <li>
                                    <h3>Para empresas</h3>
                                </li>
                                <li><Link to="/empresa">CADASTRE SUA EMPRESA</Link></li>
                                <li><Link to="/vagas">CADASTRE SUAS VAGAS</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="back">
                    <p><Link to="#">IBM</Link></p>
                </div>

            </div>
        </body>
    );  
}