import { useParams } from 'react-router-dom';
import { NoiHoiKT3_BM1, NoiHoiKT_BM1 } from '../../../../components';
import {
  apiExportExcel_NoiHoiKT1_BM1,
  apiExportExcel_NoiHoiKT2_BM1,
  apiExportExcel_NoiHoiKT3_BM1,
  apigetData_NoiHoiKT1_BM1,
  apigetData_NoiHoiKT2_BM1,
  apigetData_NoiHoiKT3_BM1,
} from '../../../../apis';

const BM1_NHKT = () => {
  const { id } = useParams();
  if (+id === 1) {
    return (
      <div>
        <NoiHoiKT_BM1
          title={` NHẬT KÝ VẬN HÀNH NỒI HƠI KHÍ THAN SỐ ${id} - BIỂU MẪU 1`}
          apiGet={apigetData_NoiHoiKT1_BM1}
          apiExportExcel={apiExportExcel_NoiHoiKT1_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }

  if (+id === 2) {
    return (
      <div>
        <NoiHoiKT_BM1
          title={` NHẬT KÝ VẬN HÀNH NỒI HƠI KHÍ THAN SỐ ${id} - BIỂU MẪU 1`}
          apiGet={apigetData_NoiHoiKT2_BM1}
          apiExportExcel={apiExportExcel_NoiHoiKT2_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }

  if (+id === 3) {
    return (
      <div>
        <NoiHoiKT3_BM1
          title={` NHẬT KÝ VẬN HÀNH NỒI HƠI KHÍ THAN SỐ ${id} - BIỂU MẪU 1`}
          apiGet={apigetData_NoiHoiKT3_BM1}
          apiExportExcel={apiExportExcel_NoiHoiKT3_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default BM1_NHKT;
