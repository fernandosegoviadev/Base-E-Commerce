import axios from 'axios';

// Create new user

const datos = { resp: null, error: null };
const url = `${process.env.MONGO_URL}/api/users`;
console.log(process.env.MONGO_URL);

export const register = async (data) => {
  const resp = await axios.post(
    'https://no-country-rest-server.herokuapp.com/api/users',
    data,
  );

  console.log(resp);
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};
