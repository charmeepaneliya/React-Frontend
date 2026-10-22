import axios from "axios";

const BASURL = import.meta.env.VITE_BASE_URL;

export const getAllStudents = async () => {
  try {
    const res = await axios(`${BASURL}/getAllStudents`);

    if (res.status !== 200) {
      throw new Error("failed to fetch student data");
    }

    return res.data.students;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const addStudent = async (stdData) => {
  try {
    const res = await axios.post(`${BASURL}/add`, stdData);

    if (res.status !== 201) {
      throw new Error("failed to fetch student data");
    }
    return res.data.students;
  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Backend error:", error.response?.data);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await axios.delete(`${BASURL}/${id}`);

    if (res.status !== 200) {
      throw new Error("failed to delete std data");
    }
    return res.data.students;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const updateStudent = async (id, stdData) => {
  try {
    const res = await axios.patch(`${BASURL}/${id}`, stdData);

    if (res.status !== 200) {
      throw new Error("failed to update std data");
    }
    return res.data.studentUpdate;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getStdById = async (id) => {
  try {
    const res = await axios(`${BASURL}/${id}`);
    if (res.status !== 200) {
      throw new Error("failed to getStdById std data");
    }

    console.log("std update response", res.data.student )
    return res.data.student;
    
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
