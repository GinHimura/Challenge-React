import axios from 'axios';

const baseUrl = "http://localhost:8080";

const headers = {
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
};

const getVagas = async () => {
    return await axios.get(`${baseUrl}/Candidate/rest/vagas`);
}

const criarVaga = async (values) => {
    return await axios.post(`${baseUrl}/Candidate/rest/vagas`, values, headers);
}

const criarCandidato = async (values) => {
    return await axios.post(`${baseUrl}/Candidate/rest/candidatos`, values, headers);
}

const criarEmpresa = async (values) => {
    return await axios.post(`${baseUrl}/Candidate/rest/empresas`, values, headers);
}


const login = async (user) => {

    return await axios.post(`${baseUrl}/Candidate/rest/login`, user, headers);

}


export const API = {
    getVagas,
    criarVaga,
    criarCandidato,
    criarEmpresa,
    login
}