import { useParams } from 'react-router-dom';
import { BM2_CDQ } from '../../../../components';
import {
  apiExportExcel_CDQ12_BM2,
  apiExportExcel_CDQ3_BM2,
  apigetData_CDQ12_BM2,
  apigetData_CDQ3_BM2,
} from '../../../../apis';

const CDQ_BM2 = () => {
  const { id } = useParams();

  if (+id === 1 || +id === 2) {
    return (
      <div>
        <BM2_CDQ
          title={`  NHẬT KÝ VẬN HÀNH NỒI HƠI CDQ SỐ 1 & 2 -  BIỂU MẪU 2`}
          apiGet={apigetData_CDQ12_BM2}
          apiExportExcel={apiExportExcel_CDQ12_BM2}
          turbineIndex={id}
        />
      </div>
    );
  }

  if (+id === 3) {
    return (
      <div>
        <BM2_CDQ
          title={`NHẬT KÝ VẬN HÀNH NỒI HƠI CDQ SỐ ${id}-  BIỂU MẪU 2`}
          apiGet={apigetData_CDQ3_BM2}
          apiExportExcel={apiExportExcel_CDQ3_BM2}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default CDQ_BM2;
