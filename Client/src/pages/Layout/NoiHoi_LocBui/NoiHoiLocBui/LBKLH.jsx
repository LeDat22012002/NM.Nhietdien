import { useParams } from 'react-router-dom';
import { BM2_LBKLH, BM_LBKLH } from '../../../../components';
import {
  apiExportExcel_NoiHoi_LB9,
  apigetData_NoiHoi_LB9,
} from '../../../../apis';

const LBKLH = () => {
  const { id } = useParams();
  if (
    +id === 1 ||
    +id === 2 ||
    +id === 3 ||
    +id === 4 ||
    +id === 5 ||
    +id === 6 ||
    +id === 7 ||
    +id === 8
  ) {
    return (
      <div>
        <BM2_LBKLH
          title={`NHẬT KÍ THEO DÕI VẬN HÀNH LỌC BỤI KHỬ LƯU HUỲNH- NỒI HƠI SỐ ${id}`}
          // apiGet={apigetData_NoiHoi_LB9}
          // apiExportExcel={apiExportExcel_NoiHoi_LB9}
          // turbineIndex={id}
        />
      </div>
    );
  }

  if (+id === 9) {
    return (
      <div>
        <BM_LBKLH
          title={`NHẬT KÍ THEO DÕI VẬN HÀNH LỌC BỤI KHỬ LƯU HUỲNH- NỒI HƠI SỐ ${id}`}
          apiGet={apigetData_NoiHoi_LB9}
          apiExportExcel={apiExportExcel_NoiHoi_LB9}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default LBKLH;
