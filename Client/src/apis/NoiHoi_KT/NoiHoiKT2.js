import axios from '../axois';

export const apigetData_NoiHoiKT2_BM1 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/NoiHoiKT2_BM1/getData_NoiHoiKT2_BM1',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcel_NoiHoiKT2_BM1 = (begind, endd, turbineIndex) =>
  axios({
    url: '/NoiHoiKT2_BM1/exportExcel',
    method: 'get',
    params: {
      begind,
      endd,
      turbineIndex,
    },
    responseType: 'blob',
  });
