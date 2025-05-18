// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com/api', // coloque a URL base da sua API
  timeout: 10000, // tempo máximo de resposta
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Interceptor de requisição (ex: adicionar token)
// api.interceptors.request.use(
//   async config => {
//     // Exemplo: adicionando token JWT
//     const token = 'SEU_TOKEN_AQUI'; // você pode buscar isso do async-storage ou context
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// // Interceptor de resposta (tratamento de erro)
// api.interceptors.response.use(
//   response => response,
//   error => {
//     // Aqui você pode capturar erros globais (ex: 401, 500 etc.)
//     if (error.response) {
//       console.error('Erro de resposta', error.response.data);
//     } else if (error.request) {
//       console.error('Erro de requisição', error.request);
//     } else {
//       console.error('Erro genérico', error.message);
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
