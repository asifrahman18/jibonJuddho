import axios from "axios";

const BASE_URL = "https://rahman184.pythonanywhere.com/api";


//user id
export async function getCompany(id) {
  console.log('Inside route',id);
  try {
    console.log('Inside try catch',id);
    const response = await axios.get(`${BASE_URL}/company/${id}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}


//company id
export const getCompanyDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/company/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const createCompany = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/user/company/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
