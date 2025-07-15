import axios from '../../axois';

export const apigetData_CDQ12_BM2 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/CDQ12_BM2/getData_CDQ12_BM2',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_CDQ12_BM2 = (begind, endd, turbineIndex) =>
  axios({
    url: '/CDQ12_BM2/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
