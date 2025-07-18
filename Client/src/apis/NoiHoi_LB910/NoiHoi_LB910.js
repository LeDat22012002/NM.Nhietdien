import axios from '../axois';

export const apigetData_NoiHoi_LB9 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/NoiHoi_LB9/getData_NoiHoi_LB9',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_NoiHoi_LB9 = (begind, endd, turbineIndex) =>
  axios({
    url: '/NoiHoi_LB9/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
