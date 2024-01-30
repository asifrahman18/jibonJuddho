import axios from "axios";

const BASE_URL = "https://rahman184.pythonanywhere.com/api";
const BASE_URL2 = "http://127.0.0.1:8000/api";


//user id
export async function getCompany(id) {
  //console.log('Inside route',id);
  try {
    //console.log('Inside try catch',id);
    const response = await axios.get(`${BASE_URL2}/company/${id}/`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}


//company id
export const getCompanyDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL2}/user/company/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


//company id
export async function getCompanyJobs(id) {
  console.log('Inside route',id);
  try {
    console.log('Inside try catch',id);
    //const response = await axios.get(`${BASE_URL}/company/${id}/`);
    const response = await axios.get(`http://127.0.0.1:8000/api/company/job/${id}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}



//user id
export const createCompany = async (id, compData) => {
  console.log('Inside route',id);
  console.log('Inside route',compData);
  try {
    const response = await axios.post(`${BASE_URL2}/company/register/${id}/`, compData);

    console.log(response);
    if(response.status === 201)
      return response.data;
  } catch (error) {
    throw error;
  }
};
