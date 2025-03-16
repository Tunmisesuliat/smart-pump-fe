import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const login = (data: object) => API.post("/login", data);
export const getUser = (token: string) => API.get("/user", { headers: { Authorization: `Bearer ${token}` } });
export const updateUser = (token: string, data: object) =>
  API.put("/user", data, { headers: { Authorization: `Bearer ${token}` } });
