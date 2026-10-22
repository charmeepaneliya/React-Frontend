const BASURL = import.meta.env.VITE_BASE_URL;
export const getAllStudents = async () => {
  const res = await fetch(`${BASURL}/getAllStudents`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("failed to fetch student data");
  }

  console.log("data", data.students);

  return data.students;
};

export const addStudent = async (stdData) => {
  try {
    const res = await fetch(`${BASURL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stdData),
    });
    if (!res.ok) {
      throw new Error(data.message || "failed to add student data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await fetch(`${BASURL}/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "failed to delete student data");
    }
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const updateStudent = async (id, stdData) => {
  try {
    const res = await fetch(`${BASURL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stdData),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "failed to update student data");
    }
    return data.studentUpdate;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getStdById = async (id) => {
  try {
    const res = await fetch(`${BASURL}/${id}`);
    if (!res.ok) {
      throw new Error(data.message || "failed to getStdById student data");
    }
    const data = await res.json();
    return data.student;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
