import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/auth";
import imglogo from "../img/LOGO.png";
import imglogo_big from "../img/LOGOALT.png";

export default function Header() {
    const usuario = JSON.parse(localStorage.getItem("user")) || null;
    debugger;
    return (
        <body>
            <div className="nav">
                <id id="header">
                    <Link to="/"><img id="logo" src={imglogo} alt="Logo" /></Link>
                    <Link to="/"><img id="logo_big" src={imglogo_big} alt="Logo" /></Link>
                    <nav className="hamburger-menu">
                        <input type="checkbox" id="menu_toggle"></input>
                        <label className="menu_btn" htmlFor="menu_toggle"><span></span></label>

                        <ul id="opNav">


                            {!usuario ?


                                <>
                                    <li><Link to="/" className="menu_item">HOME</Link></li>
                                    <li><Link to="/candidato" className="menu_item">INSCRIÇÃO CANDIDATO</Link></li>
                                    <li><Link to="/empresa" className="menu_item">INSCRIÇÃO EMPRESA</Link></li>
                                 
                                    <li><Link to="/login" className="menu_item">LOGIN</Link></li>
                                    <li><Link to="/infovagas" className="menu_item">VAGAS</Link></li>
                                </> :
                                <>
                                    <li><Link to="/" className="menu_item">HOME</Link></li>

                                    {!usuario?.candidato ? <li><Link to="/vagas" className="menu_item">INSCRIÇÃO VAGAS</Link></li> : null}

                                    <li><Link to="/infovagas" className="menu_item">VAGAS</Link></li>

                                </>
                            }

                            {usuario ? <><div style={{ marginLeft: "100%" }}>Olá {usuario?.nome}</div> <div onClick={() => {localStorage.clear(); window.location.reload()}}><a>Sair</a></div></> : null}
                            
                        </ul>

                    </nav>

                </id>

            </div>
        </body>
    );
}