import React from 'react'
import imgHeader from "../img/imgHEADER.png";
import { FaCheck } from 'react-icons/fa';

export default function index() {
    return (
        <body>
            <div className="nav">
                <div id="containerHeader">

                    <div id="cardMSG">
                        <h2>CONHEÇA NOSSAS OPORTUNIDADES DE TRABALHO</h2>

                        <p>Uma plataforma de fácil manipulação e intuitiva, facilitando o dia a dia do recrutador que trabalha para preencher vagas com rapidez e qualidade.</p>

                        <div className="listHeader">
                            <ul>
                                <li><FaCheck/> Grátis!</li>
                                <li><FaCheck/> Agilidade e Facilidade</li>
                                <li><FaCheck/> Anuncio de Vagas</li>
                            </ul>

                            <ul>
                                <li><FaCheck/> Recursos para Empresas</li>
                                <li><FaCheck/> Pré-Entrevista via Chatbot</li>
                                <li><FaCheck/> Feedback para Candidatos</li>
                            </ul>
                        </div>

                        <button id="btnBegin">ME CANDIDATAR</button>
                    </div>

                    <img id="imgHeader" src={imgHeader} alt="Trabalhando"/>
                </div>
            </div>

            <div className="containerMainIndex">
                <h3>
                    Sobre nós:
                    Somos a Candidate Hiring System e estamos aqui para te ajudar tanto a cadastrar vagas de uma empresa quanto se inscrever nelas para ter a chance do tão sonhado trabalho que deseja. Existimos desde 2022, após a solicitação de um projeto acadêmico da FIAP em parceria com a IBM. Somos gratos as duas grandemente. Esse projeto ainda está em construção, queremos agradecer a todos os professores e colegas que nos ajudaram nessa peripécia, o apoio deles foi de suma importância. Não foi possível fazer tudo o que queiramos. O objetivo era ter uma foto aqui do grupo, já que não foi possível, quero deixar meu amor e carinho eternizando o nome de: Ana Ira Sollero, Enzo Perazolo, Mariana Morgan, Vitor Pupo e Bianca Teixeira, vocês me deram uma força sem igual durante o ano e nesse projeto desafiador, saibam que estão em meu coração. De: Gerson de Melo. 
                </h3>
            </div>
        </body>
    );
}