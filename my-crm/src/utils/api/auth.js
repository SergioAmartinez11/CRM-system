import axios from 'axios';

const baseURL = 'http://localhost:3003';

export const login = (data) => {
  return axios
    .post(`${baseURL}/customer/sign-in`, {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      return response.data;
    });
};

export const registerUser = (data) => {
  return axios
    .post(`${baseURL}/customer/sign-up`, {
      ...data,
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      return response.data;
    });
};
