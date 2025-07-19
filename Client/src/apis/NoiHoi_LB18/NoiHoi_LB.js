import axios from '../axois';

export const apigetData_NoiHoi_LB1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/NoiHoi_LB1/getData_NoiHoi_LB1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_NoiHoi_LB1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/NoiHoi_LB1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
