import axios from "axios";
let basePath =
  process.env.NEXT_BASEURL || "http://115.186.185.229:5001";
  
const axiosInstance = axios.create({ baseURL: basePath });
const getRequest = async (endpoint) => {
  try {
    let response = await axiosInstance.get(`${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// post request
const postRequest = async (endpoint, body) => {
  try {
    let options = {
      method: "post",
      Headers: {
        "Content-Type": "application/json",
      },
      url: endpoint,
      data: body,
    };
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};

const postFormData = async (endpoint, body) => {
  try {
    return await axiosInstance({
      method: "post",
      url: endpoint,
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.error(error);
  }
};

export { getRequest, postRequest, postFormData, axiosInstance };
