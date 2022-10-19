import React, { useState } from 'react'
import { FaPersonBooth, FaEnvelope, FaLock, FaUserLock, FaPhoneSlash, BsPeople, FaPeopleArrows } from 'react-icons/fa';

import { API } from '../uteis/api';
export default function Candidato() {

    const handleSubmit = callback => event => {
        event.preventDefault();
        callback();
    };

    const cadastrar = async (sub) => {
        const user = {
            "email": sub?.target?.emailCand?.value,
            "nome": sub?.target?.nomeCand?.value,
            "senha": sub?.target?.senhaCand?.value,
            "nrTelefone": sub?.target?.telefoneCand?.value,
            "stEstudante": false,
            "dataNascimento": "2010-08-25",
            "genero": sub?.target?.generoCand?.value
        }

        await API.criarCandidato(user).then((e) => {
            alert("Candidato criado com sucesso.");
            window.location.reload();
        }).catch((e) => {
            alert("Algo deu errado! \nTente novamente");
        });
    }
    return (
        <body>
            <div className="containerMain">
                <div className="candidato">
                    <h2>CADASTRO DE CANDIDATO</h2>
                    <form id="formCandidato" onSubmit={(e) => { handleSubmit(cadastrar(e)); e.preventDefault() }}>
                        <div className="campos">
                            <label htmlFor="nomeCand"><FaPersonBooth /></label>
                            <input type="text" id="nomeCand" name="nomeCand" placeholder="Nome Candidato" required />
                        </div>

                        <div className="campos">
                            <label htmlFor="emailCand"><FaEnvelope /></label>
                            <input type="text" id="emailCand" name="emailCand" placeholder="E-mail Candidato" required />
                        </div>


                        <div className="campos">
                            <label htmlFor="senhaCand"><FaLock /></label>
                            <input type="password" id="senhaCand" name="senhaCand" placeholder="Senha" required />
                        </div>

                        <div className="campos">
                            <label htmlFor="senhaCandConfirm"><FaUserLock /></label>
                            <input type="password" id="senhaCandConfirm" name="senhaCandConfirm" placeholder="Confirmar Senha" required />
                        </div>

                        <div className="campos">
                            <label htmlFor="telefoneCand"><FaPhoneSlash /></label>
                            <input type="tel" id="telefoneCand" name="telefoneCand" placeholder="Telefone" />
                        </div>

                        <div className="campos">
                            <label htmlFor="generoCand"><FaPeopleArrows /></label>
                            <input type="text" id="generoCand" name="generoCand" placeholder="Genero" max={2} />
                        </div>
                        <div className="aux">

                            <div id="campoEstudante">
                                <p>Você é um estudante?</p>

                                <div className="campoYES">
                                    <label htmlFor="studentYES">SIM</label>
                                    <input type="radio" id="studentYES" name="student" value="YES" required />
                                </div>
                                <div className="campoNO">
                                    <label htmlFor="studentNO">NÃO</label>
                                    <input type="radio" id="studentNO" name="student" value="NO" />
                                </div>
                            </div>

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