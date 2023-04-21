import axios from 'axios';

const baseURL = 'http://localhost:3003';

export const createEmploye = (data) => {
  return axios
    .post(`${baseURL}/employe/sign-up`, {
      email: data.email,
      password: data.password,
      phone: data.phone,
      email: data.email,
      position: data.position
    })
    .then((response) => {
      return response.data;
    });
};

