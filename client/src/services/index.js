import axios from "axios";

export const callRegisterUserApi = async (formData) => {
  const res = await axios.post(
    "http://localhost:5000/api/user/register",
    formData,
    { withCredentials: true }
  );
  return res?.data;
};

export const callLoginUserApi = async (formData) => {
  const res = await axios.post(
    "http://localhost:5000/api/user/login",
    formData,
    { withCredentials: true }
  );
  return res?.data;
};

export const callUserAuthApi = async () => {
  const res = await axios.post(
    "http://localhost:5000/api/user/auth",
    {},
    { withCredentials: true }
  );

  // console.log(res);
  return res?.data;
};

// eslint-disable-next-line no-unused-vars
export const callLogoutUser = async (req, res) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/logout",
    {},
    { withCredentials: true }
  );
  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/task/add-new-task",
    formData
  );
  return response?.data;
};

export const getAllTaskApi = async (getUserId) => {
  const res = await axios.get(
    `http://localhost:5000/api/task/get-all-task/${getUserId}`
  );
  return res?.data;
};

export const updateTaskApi = async (formData) => {
  const res = await axios.put(
    `http://localhost:5000/api/task/update-task/`,
    formData
  );
  return res?.data;
};

export const deleteTaskApi = async (getTaskId) => {
  const res = await axios.delete(
    `http://localhost:5000/api/task/delete-task/${getTaskId}`
  );
  return res?.data;
};
