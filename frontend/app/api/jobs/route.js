'use clinet'
import axios from "axios";

let BASE_URL = process.env.NEXT_PUBLIC_URL


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
export const addJobs = async (id, jobData) => {

  try {
    //console.log("add jobs route:", id);
    //console.log("add jobs route:", jobData);
    const response = await axios.post(`${BASE_URL}/company/${id}/addjob/`, jobData);

    if(response.status === 201){
      return response.data;
    }

  } catch (error) {
    throw error;
  }
};

//job id
export const deleteJobs = async (id) => {
  try {
      console.log("delete jobs route:", id);
    const response = await axios.delete(`${BASE_URL}/jobs/${id}/delete/`);
    console.log( response)
    return response.data;
  } catch (error) {
    throw error;
  }
};


//job id
export const editJob = async (id, jobData) => {

  try {
    console.log("edit jobs route:", id);
    console.log("edit jobs route:", jobData);
    const response = await axios.put(`${BASE_URL}/job/${id}/update/`, jobData);

    if(response.status === 201){
      return response.data;
    }

  } catch (error) {
    throw error;
  }
};
