import axios from '../axois';

export const apigetData_NoiHoi_ND1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/NoiHoi_ND1/getData_NoiHoi_ND1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_NoiHoi_ND1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/NoiHoi_ND1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
