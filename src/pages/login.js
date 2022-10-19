import React, { useContext } from 'react'
import { FaSignature, FaComment, FaDollarSign, FaKey, FaMailBulk } from 'react-icons/fa';
import MyContext from '../context/auth';
import { API } from '../uteis/api';



export default function Login() {
    const {
        login,
        usuario
    } = useContext(MyContext);

    const handleSubmit = callback => event => {
        event.preventDefault();
        callback();
    };

    const loginUser = async (sub) => {
        const user = {
            "email": sub?.target?.email?.value,
            "senha": sub?.target?.password?.value,
            "isCandidate": sub?.target?.tipoUser?.value
        }
        await login(user);
    }

    return (
        <body>
            <div className="containerMain">
                <div className="candidato">
                    <h2>CADASTRO DE VAGAS</h2>
                    <form id="formCandidato" onSubmit={(e) => { handleSubmit(loginUser(e)); e.preventDefault() }}>
                        <div className="campos">
                            <label htmlFor="email"><FaMailBulk /></label>
                            <input type="text" id="email" name="email" placeholder="E-Mail" required />
                        </div>

                        <div className="campos">
                            <label htmlFor="password"><FaKey /></label>
                            <textarea type="password" id="password" name="password" placeholder="Password" required />
                        </div>
                        <select id={"tipoUser"}>
                            <option value={true}>CANDIDATO</option>
                            <option value={false}>EMPRESA</option>
                        </select>

                        <div className="btn-box">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}