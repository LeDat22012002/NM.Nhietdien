import axios from '../../axois';

export const apigetData_TB1_BM1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/TB1_BM1/getData_TB1_BM1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_TB1_BM1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/TB1_BM1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
