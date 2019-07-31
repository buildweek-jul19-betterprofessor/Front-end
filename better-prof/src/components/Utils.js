import axios from 'axios';

export const BetterProfApiBase = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://betterprofessor.herokuapp.com/api'
  });
};
