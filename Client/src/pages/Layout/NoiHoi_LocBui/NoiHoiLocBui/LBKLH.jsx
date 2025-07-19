import { useParams } from 'react-router-dom';
import { BM2_LBKLH, BM_LBKLH } from '../../../../components';
import {
  apiExportExcel_NoiHoi_LB1,
  apiExportExcel_NoiHoi_LB9,
  apigetData_NoiHoi_LB1,
  apigetData_NoiHoi_LB9,
} from '../../../../apis';

const LBKLH = () => {
  const { id } = useParams();
  if (+id === 1) {
    return (
      <div>
        <BM2_LBKLH
          title={`NHẬT KÍ THEO DÕI VẬN HÀNH LỌC BỤI KHỬ LƯU HUỲNH- NỒI HƠI SỐ ${id}`}
          apiGet={apigetData_NoiHoi_LB1}
          apiExportExcel={apiExportExcel_NoiHoi_LB1}
          turbineIndex={id}
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
