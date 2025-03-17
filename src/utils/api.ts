
const BASE_URL = "https://smart-pump-be.onrender.com"

export const login = async (data: { email: string; password: string }) => {
  return fetch(`${BASE_URL}/v1/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data; // Return the response data
    })
    .catch((err) => console.error('Error:', err));
};

export const getUserProfile = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/v1/user/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json(); // Parse the JSON response
    return data; // Return the user data
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error; // Re-throw the error for further handling if needed
  }
};

export const updateUserApi = async (token: string, data: object) => {
  try {
    const response = await fetch(`${BASE_URL}/v1/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
      body: JSON.stringify(data), // Convert the data to JSON string
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`); // Handle errors
    }

    const updatedUser = await response.json(); // Parse the JSON response
    return updatedUser; // Return the updated user data
  } catch (error) {
    console.error('Error updating user details:', error);
    throw error; // Re-throw the error for further handling if needed
  }
};
