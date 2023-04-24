import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const createEmploye = (data) => {
  
  return axios
    .post(`${baseURL}/employee/sign-up`, {
      name: data.name,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      position: data.position
    })
    .then((response) => {
      return response.data;
    });
};

export const deleteEmployee = (params) => {
  
  return axios
    .post(`${baseURL}/employee/delete`, {
      name: params.name,


    })
    .then((response) => {
      return response.data;
    });
};


export const getAllemployees = () =>{
  return axios
    .get(`${baseURL}/employee`, {})
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}


