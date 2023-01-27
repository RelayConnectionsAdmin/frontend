import axios from 'axios'


const API = axios.create({ baseURL: 'https://backend-4g2lexwz2-relayconnectionsadmin.vercel.app/' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);
