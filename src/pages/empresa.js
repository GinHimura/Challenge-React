import React from 'react'
import { FaBuilding, FaEnvelope, FaLock, FaPhoneSlash, FaDiscourse, FaSitemap, FaSafari, FaChrome } from 'react-icons/fa';

import { API } from '../uteis/api';


export default function Empresa() {
    const handleSubmit = callback => event => {
        event.preventDefault();
        callback();
    };
    const cadastrar = async (sub) => {

        const user = {
            "email": sub?.target?.emailEmp?.value,
            "nome": sub?.target?.nomeEmp?.value,
            "senha": sub?.target?.senhaEmp?.value,
            "telefone": sub?.target?.telEmp?.value,
            "webSite": sub?.target?.siteEmp.value,
            "descricao": sub?.target?.descEmp.value
        }

        await API.criarEmpresa(user).then((e) => {
            alert("Empresa criada com sucesso!");
            window.location.reload();
        }).catch((e) => {
            alert("Algo deu errado! \nTente novamente.");
        });
    }
    return (
        <body>
            <div className="containerMain">
                <div className="empresa">
                    <h2>INSCRIÇÃO DA EMPRESA</h2>
                    <form id="formEmpresa" onSubmit={(e) => { handleSubmit(cadastrar(e)); e.preventDefault() }}>
                        <div className="campos">
                            <label htmlFor="nomeEmp"><FaBuilding /></label>
                            <input type="text" name="nomeEmp" id="nomeEmp" placeholder="Nome da Empresa" />
                        </div>

                        <div className="campos">
                            <label htmlFor="emailEmp"><FaEnvelope /></label>
                            <input type="email" name="emailEmp" id="emailEmp" placeholder="Email da Empresa" />
                        </div>

                        <div className="campos">
                            <label htmlFor="senhaEmp"><FaLock /></label>
                            <input type="password" name="senhaEmp" id="senhaEmp" placeholder="Senha" />
                        </div>

                        <div className="campos">
                            <label htmlFor="telEmp"><FaPhoneSlash /></label>
                            <input type="tel" name="telEmp" id="telEmp" placeholder="Telefone" />
                        </div>

                        <div className="campos">
                            <label htmlFor="descEmp"><FaDiscourse /></label>
                            <textarea name="descEmp" id="descEmp" cols="75" rows="5" placeholder="Descrição da empresa"></textarea>
                        </div>

                        <div className="campos">
                            <label htmlFor="siteEmp"><FaChrome /></label>
                            <input name="siteEmp" id="siteEmp" cols="75" rows="10" placeholder="Site"></input>
                        </div>
                        <div className="btn-box">
                            <button type="submit">Cadastrar-se</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}