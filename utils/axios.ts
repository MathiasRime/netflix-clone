import axios, { AxiosInstance } from 'axios';

export default function getInstance(): AxiosInstance {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  });
}


export function getAPIKEY(){
 return '6b6333d06c7e55bc72752191f4daf065';
}