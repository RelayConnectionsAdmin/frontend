import axios from 'axios'


const API = axios.create({ baseURL: 'https://backend-4g2lexwz2-relayconnectionsadmin.vercel.app/' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
