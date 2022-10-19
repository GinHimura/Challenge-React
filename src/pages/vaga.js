import React from 'react'
import { FaSignature, FaComment, FaDollarSign } from 'react-icons/fa';
import {API} from '../uteis/api';



export default function Vagas() {

    const handleSubmit = callback => event => {
        event.preventDefault();
        callback();
    };

    const cadastrar = async (sub) => {

        const values = {
            "nome": sub?.target?.nome?.value,
            "criacao": null,
            "descricao": sub?.target?.descricao?.value,
            "presencial": true,
            "qualificacao": sub?.target?.qualificacao?.value,
            "salario": sub?.target?.salario?.value,
            "tipoVaga": sub?.target?.tipoVaga?.value
        }
       
        await API.criarVaga(values).then((e) => {
            alert("Vaga criada com sucesso.");
            window.location.reload();
        }).catch((e) => {
            alert("Algo deu errado! \nTente novamente");
        });
    }
    return (
        <body>
            <div className="containerMain">
                <div className="candidato">
                    <h2>CADASTRO DE VAGAS</h2>
                    <form id="formCandidato" onSubmit={(e) => {handleSubmit(cadastrar(e)); e.preventDefault()}}>
                        <div className="campos">
                            <label htmlFor="nome"><FaSignature /></label>
                            <input type="text" id="nome"  name="nome" placeholder="Nome" required />
                        </div>

                        <div className="campos">
                            <label htmlFor="descricao"><FaComment /></label>
                            <textarea type="text" id="descricao"  name="descricao" placeholder="Descrição" required />
                        </div>



                        <div className="campos">
                            <label htmlFor="qualificacao"><FaComment /></label>
                            <textarea type="text" id="qualificacao"  name="generoCand" placeholder="Qualificacões" max={2} />
                        </div>
                        <div className="campos">
                            <label htmlFor="salario"><FaDollarSign /></label>
                            <textarea type="number" id="salario"  name="salario" placeholder="Salario" max={2} />
                        </div>

                        <select id={"tipoVaga"}>
                            <option value={"PRESENCIAL"}>PRESENCIAL</option>
                            <option value={"HIBRIDO"}>HIBRIDO</option>
                            <option value={"REMOTA"}>REMOTA</option>
                        </select>

                        <div className="btn-box">
                            <button type="submit">Cadastrar-se</button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}