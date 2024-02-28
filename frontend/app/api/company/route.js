import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL


//user id
export async function getCompany(id) {
  //console.log('Inside route',id);
  try {
    //console.log('Inside try catch',id);
    const response = await axios.get(`${URL}/company/${id}/`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}


//company id
export const getCompanyDetail = async (id) => {
  try {
    const response = await axios.get(`${URL}/user/company/${id}/`);
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
    //const response = await axios.get(`${URL}/company/${id}/`);
    const response = await axios.get(`${URL}/company/job/${id}/`);
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
    const response = await axios.post(`${URL}/company/register/${id}/`, compData);

    console.log(response);
    if(response.status === 201)
      return response.data;
  } catch (error) {
    throw error;
  }
};
