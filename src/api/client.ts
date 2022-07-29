import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.AKY_API_URL,
});

export const doHealthCheck = async () => {
  try {
    const result = await client.get('/HealthCheck');
    
    console.log('result', result);
  } catch (err) {
    console.error(err);
  }
};