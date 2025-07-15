import axios from '../../axois';

export const apigetData_CDQ1_BM1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/CDQ1_BM1/getData_CDQ1_BM1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_CDQ1_BM1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/CDQ1_BM1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
