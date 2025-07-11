// import axios from "axios";

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_URI,
// });
// // Add a request interceptor
// instance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     // let localStorageData = window.localStorage.getItem("persist:shop/user");
//     // if (localStorageData && typeof localStorageData === "string") {
//     //   localStorageData = JSON.parse(localStorageData);
//     //   const accessToken = JSON.parse(localStorageData?.token);
//     //   config.headers = { Authorization: `Bearer ${accessToken}` };
//     //   return config;
//     // }
//     // Lấy trực tiếp
//     const accessToken = localStorage.getItem("accessToken");
//     // console.log("HHh", accessToken);

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//       return config;
//     } else {
//       return config;
//     }
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     return response.data;
//   },
//   function (error) {
//     return error.response.data;
//   }
// );

// export default instance;

import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    const contentType = response.headers?.['content-type'];

    // Nếu là file blob (Excel, PDF...), giữ nguyên full response
    if (
      contentType?.includes('application/octet-stream') ||
      contentType?.includes('application/vnd.openxmlformats-officedocument')
    ) {
      return response;
    }

    // Còn lại thì trả về response.data như cũ
    return response.data;
  },
  function (error) {
    // Tránh lỗi không có response
    if (error.response?.data) {
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject({
        status: false,
        message: 'Lỗi kết nối đến server!',
      });
    }
  }
);

export default instance;
