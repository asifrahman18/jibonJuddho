import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export async function getJobs() {
  try {
    const response = await axios.get(`${BASE_URL}/job/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
