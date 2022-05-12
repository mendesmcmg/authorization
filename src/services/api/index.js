export const baseURL =
  "http://ec2-18-231-30-2.sa-east-1.compute.amazonaws.com/";

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

export function apiGet(url) {
  return api.get(url);
}

export function apiPost(url, data) {
  return api.post(url, data);
}

export function apiPut(url, data) {
  return api.put(url, data);
}

export function apiDelete(url) {
  return api.delete(url);
}