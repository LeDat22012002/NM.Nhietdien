import axios from './axois';

export const apiRegister = (data) =>
  axios({
    url: '/user/register',
    method: 'post',
    data,
  });

export const apiLogin = (data) =>
  axios({
    url: '/user/login',
    method: 'post',
    data,
  });

export const apiLogout = (refreshToken) =>
  axios({
    url: '/user/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { refreshToken },
  });

export const apigetAllUser = () =>
  axios({
    url: '/user/allusers',
    method: 'get',
  });
