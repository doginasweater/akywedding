import axios from 'axios';
import { AdminRsvpViewModel, MealOption, Party, Rsvp } from '../types';

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


export const getMealOptions = async () => {
  try {
    const result = await client.get<MealOption[]>('/rsvp/meals');

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const findParty = async (search: string) => {
  try {
    const result = await client.post<Party>(`/rsvp/findParty?name=${search}`);
    return result;
  } catch (err) {
    console.error(err);
  }
};

//submit will be similar to findParty (first arg url second arg search)
//takes in an rsvp view model to send to the server 
export const submitParty = async (values: Rsvp) => {
  try {
    const result = await client.post('/rsvp/submit', values);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const getRsvps = async () => {
  const result = await client.get<AdminRsvpViewModel[]>('/admin/rsvps');

  if (result.status === 200 && result.data) {
    return result.data;
  }

  return null;
};

export const deleteRsvp = async (id: number) => {
  const result = await client.delete(`/admin/rsvp/${id}`);

  return result?.status === 201;
};