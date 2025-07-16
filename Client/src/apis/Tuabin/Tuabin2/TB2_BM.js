import axios from '../../axois';

// BM1
export const apigetData_TB2_BM2 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/TB2_BM2/getData_TB2_BM2',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_TB2_BM2 = (begind, endd, turbineIndex) =>
  axios({
    url: '/TB2_BM2/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
// BM2

export const apigetData_TB2_BM1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/TB2_BM1/getData_TB2_BM1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_TB2_BM1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/TB2_BM1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });

// BM3
export const apigetData_TB2_BM3 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/TB2_BM3/getDataTB2_BM3',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_TB2_BM3 = (begind, endd, turbineIndex) =>
  axios({
    url: '/TB2_BM3/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
