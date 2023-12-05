import axios from "axios";

console.log(import.meta.env.BASE_URL);

const client = axios.create({
  baseURL: import.meta.env.DEV ? "http://localhost:5173" : import.meta.env.BAS_URL,
});

export const get = async <T>(url: string) => {
  const res = await client.get(url);
  return res.data as Promise<T>;


};
