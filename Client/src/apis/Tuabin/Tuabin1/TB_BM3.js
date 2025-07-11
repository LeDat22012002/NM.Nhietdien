import axios from '../../../../axois';

export const apigetDataTB3 = (begind, endd, sortOrder = 'desc') =>
  axios({
    url: '/TB_BM3/allDataBM3',
    method: 'get',
    params: {
      begind,
      endd,
      sortOrder,
    },
  });

export const apiExportExcelTB3 = (begind, endd) =>
  axios({
    url: '/TB_BM3/export',
    method: 'get',
    params: {
      begind,
      endd,
    },
    responseType: 'blob',
  });
