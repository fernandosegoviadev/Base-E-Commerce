import axios from 'axios';

// Create new user

// const datos = { resp: null, error: null };
// const url = `${process.env.MONGO_URL}/api/users`;
// console.log(process.env.MONGO_URL);

// 'https://no-country-rest-server.herokuapp.com/api/users' // deploy del back


export const register = async (dataNewUser) => {
  try {
    const resp = await axios.post(
      '/api/users/create',
      dataNewUser,
    );
    // console.log(resp, 'la respuesta del back, en helpers');
    return resp.data;

  } catch (error) {
    return {msj:'Error, user not created', error: error};
  }
};
