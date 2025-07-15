import axios from '../../axois';

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
