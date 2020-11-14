import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

// método post para que as info sejam passados como json
const headers = {
  'Content-Type': 'application/json',
};

const registerUserAPI = async (name, email, password, role) => {
  try {
    const result = await api.post(
      '/user',
      {
        name,
        email,
        password,
        role,
      },
      headers,
      );
    return result;
  } catch (err) {
    return err.response;
  }
};

const loginAPI = (email, password) => api.post('/login', { email, password });

const updateUserAPI = (name, email) => (api.put('/user/update', { name, email }));

export default {
  registerUserAPI,
  loginAPI,
  updateUserAPI,
};

