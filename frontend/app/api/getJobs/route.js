import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export async function getJobs() {
  try {
    const response = await axios.get(`${BASE_URL}/job/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getJobDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/job/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


//company id
export const addJobs = async (id) => {
  try {
    const response = await axios.post(`${BASE_URL}/company/${id}/add-job/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//job id
export const deleteJobs = async (id) => {
  try {
    const response = await axios.post(`${BASE_URL}/jobs/${id}/delete/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
