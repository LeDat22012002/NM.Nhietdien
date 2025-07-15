import axios from '../../axois';

export const apigetData_CDQ2_BM1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/CDQ2_BM1/getData_CDQ2_BM1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_CDQ2_BM1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/CDQ2_BM1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
