import React, { useEffect, useState } from 'react';
import {API} from '../uteis/api';


export default function Candidato() {
    const [vagas, setVagas] = useState([]);

    const getVagas = async () => {
        await API.getVagas().then((e) => {
            setVagas(e.data);
        }).catch((e) => {

        })
    }


    useEffect(() => {
        getVagas();
    }, [])

    return (
        <div className="info_vagas">
            {
                vagas &&
                vagas.map((element) => {
                    return (
                        <>
                            <h1>NOME: {element.nome}</h1>
                            <h1>PRESENCIAL: {element.presencial ? "Sim" : "Não"}</h1>
                            <h1>DESCRIÇÃO: {element.descricao}</h1>
                            <>-----------------------------------------------------</>
                        </>
                    )
                })
            }
        </div>
    );
}