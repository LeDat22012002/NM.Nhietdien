import { useParams } from 'react-router-dom';
import { NoiHoiKT3_BM2, NoiHoiKT_BM2 } from '../../../../components';
import {
  apiExportExcel_NoiHoiKT1_BM2,
  apiExportExcel_NoiHoiKT2_BM2,
  apiExportExcel_NoiHoiKT3_BM2,
  apigetData_NoiHoiKT1_BM2,
  apigetData_NoiHoiKT2_BM2,
  apigetData_NoiHoiKT3_BM2,
} from '../../../../apis';

const BM2_NHKT = () => {
  const { id } = useParams();
  if (+id === 1) {
    return (
      <div>
        <NoiHoiKT_BM2
          title={` NHẬT KÝ VẬN HÀNH NỒI HƠI KHÍ THAN SỐ ${id} - BIỂU MẪU 2`}
          apiGet={apigetData_NoiHoiKT1_BM2}
          apiExportExcel={apiExportExcel_NoiHoiKT1_BM2}
          turbineIndex={id}
        />
      </div>
    );
  }
  if (+id === 2) {
    return (
      <div>
        <NoiHoiKT_BM2
          title={` NHẬT KÝ VẬN HÀNH NỒI HƠI KHÍ THAN SỐ ${id} - BIỂU MẪU 2`}
          apiGet={apigetData_NoiHoiKT2_BM2}
          apiExportExcel={apiExportExcel_NoiHoiKT2_BM2}
          turbineIndex={id}
        />
      </div>
    );
  }

  if (+id === 3) {
    return (
      <div>
        <NoiHoiKT3_BM2
          title={` NHẬT KÝ VẬN HÀNH NỒI HƠI KHÍ THAN SỐ ${id} - BIỂU MẪU 2`}
          apiGet={apigetData_NoiHoiKT3_BM2}
          apiExportExcel={apiExportExcel_NoiHoiKT3_BM2}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default BM2_NHKT;
