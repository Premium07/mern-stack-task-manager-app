import axios from "axios";

export const callRegisterUserApi = async (formData) => {
  const res = await axios.post(
    "https://mern-stack-task-manager-application.vercel.app/api/user/register",
    formData,
    { withCredentials: true }
  );
  return res?.data;
};

export const callLoginUserApi = async (formData) => {
  const res = await axios.post(
    "https://mern-stack-task-manager-application.vercel.app/api/user/login",
    formData,
    { withCredentials: true }
  );
  return res?.data;
};

export const callUserAuthApi = async () => {
  const res = await axios.post(
    "https://mern-stack-task-manager-application.vercel.app/api/user/auth",
    {},
    { withCredentials: true }
  );

  // console.log(res);
  return res?.data;
};

// eslint-disable-next-line no-unused-vars
export const callLogoutUser = async (req, res) => {
  const response = await axios.post(
    "https://mern-stack-task-manager-application.vercel.app/api/user/logout",
    {},
    { withCredentials: true }
  );
  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "https://mern-stack-task-manager-application.vercel.app/api/task/add-new-task",
    formData
  );
  return response?.data;
};

export const getAllTaskApi = async (getUserId) => {
  const res = await axios.get(
    `https://mern-stack-task-manager-application.vercel.app/api/task/get-all-task/${getUserId}`
  );
  return res?.data;
};

export const updateTaskApi = async (formData) => {
  const res = await axios.put(
    `https://mern-stack-task-manager-application.vercel.app/api/task/update-task/`,
    formData
  );
  return res?.data;
};

export const deleteTaskApi = async (getTaskId) => {
  const res = await axios.delete(
    `https://mern-stack-task-manager-application.vercel.app/api/task/delete-task/${getTaskId}`
  );
  return res?.data;
};
