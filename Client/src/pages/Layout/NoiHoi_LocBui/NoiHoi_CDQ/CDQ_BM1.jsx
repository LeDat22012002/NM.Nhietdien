import { useParams } from 'react-router-dom';
import { BM1_CDQ } from '../../../../components';
import {
  apiExportExcel_CDQ1_BM1,
  apiExportExcel_CDQ2_BM1,
  apiExportExcel_CDQ3_BM1,
  apigetData_CDQ1_BM1,
  apigetData_CDQ2_BM1,
  apigetData_CDQ3_BM1,
} from '../../../../apis';

const CDQ_BM1 = () => {
  const { id } = useParams();
  if (+id === 1) {
    return (
      <div>
        <BM1_CDQ
          title={`  NHẬT KÝ VẬN HÀNH NỒI HƠI CDQ SỐ ${id}-  BIỂU MẪU 1`}
          apiGet={apigetData_CDQ1_BM1}
          apiExportExcel={apiExportExcel_CDQ1_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }

  if (+id === 2) {
    return (
      <div>
        <BM1_CDQ
          title={`  NHẬT KÝ VẬN HÀNH NỒI HƠI CDQ SỐ ${id}-  BIỂU MẪU 1`}
          apiGet={apigetData_CDQ2_BM1}
          apiExportExcel={apiExportExcel_CDQ2_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }

  if (+id === 3) {
    return (
      <div>
        <BM1_CDQ
          title={`  NHẬT KÝ VẬN HÀNH NỒI HƠI CDQ SỐ ${id}-  BIỂU MẪU 1`}
          apiGet={apigetData_CDQ3_BM1}
          apiExportExcel={apiExportExcel_CDQ3_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default CDQ_BM1;
