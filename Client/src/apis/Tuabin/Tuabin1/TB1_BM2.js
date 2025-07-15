import axios from '../../axois';

export const apigetData_TB1_BM2 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/TB1_BM2/getData_TB1_BM2',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_TB1_BM2 = (begind, endd, turbineIndex) =>
  axios({
    url: '/TB1_BM2/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
