import axios from 'axios';

export default async function api(path){
  return axios.get(process.env.NEXT_PUBLIC_URL + path);
  //return axios.get('http://localhost:3000' + path);
}