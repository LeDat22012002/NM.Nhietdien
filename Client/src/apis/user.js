import axios from "../../axois";

export const apiRegister = (data) =>
  axios({
    url: "/auth/register",
    method: "post",
    data,
  });

export const apiLogin = (data) =>
  axios({
    url: "/auth/login",
    method: "post",
    data,
  });

export const apiLogout = (refreshToken) =>
  axios({
    url: "/auth/logout",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(refreshToken),
  });
