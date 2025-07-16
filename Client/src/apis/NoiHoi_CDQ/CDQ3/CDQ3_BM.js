import axios from '../../axois';

export const apigetData_CDQ3_BM1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/CDQ3_BM1/getData_CDQ3_BM1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_CDQ3_BM1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/CDQ3_BM1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });

// BM2
export const apigetData_CDQ3_BM2 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/CDQ3_BM2/getData_CDQ3_BM2',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_CDQ3_BM2 = (begind, endd, turbineIndex) =>
  axios({
    url: '/CDQ3_BM2/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
