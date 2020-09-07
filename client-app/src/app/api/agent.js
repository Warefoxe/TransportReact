import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44351/api/",
  "API-KEY": "45d4232f-3e4f-44b1-b25d-9f3a7e34f6af",
});

export const cargoesAPI = {
  getCargoes(currentPage = 1, pageSize = 10) {
    return instance
      .get(`cargo?PageNumber=${currentPage}&PageSize=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getCargo(id) {
    return instance.get(`cargo/${id}`);
  },
  createCargo(name, weight, description) {
    return instance.post(`cargo`, {
      name,
      weight,
      description,
    });
  },
};

export const authAPI = {
  currentUser() {
    return instance.get(`user`);
  },
  login(email, password) {
    return instance.post(`user/login`, { email, password });
  },
  register(displayName, userName, email, password) {
    return instance.post(`user/register`, {
      displayName,
      userName,
      email,
      password,
    });
  },
};
