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

export type MealOption = {
  id: number;
  name: string;
};

export const getMealOptions = async () => {
  try {
    const result = await client.get<MealOption[]>('/rsvp/meals');

    return result;
  } catch (err) {
    console.error(err);
  }
};