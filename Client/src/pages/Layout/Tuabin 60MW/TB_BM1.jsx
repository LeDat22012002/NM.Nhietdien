// import { apiExportExcel_TB1_BM2, apigetData_TB1_BM2 } from '../../../apis';
import {
  apiExportExcel_TB1_BM1,
  apiExportExcel_TB2_BM1,
  apigetData_TB1_BM1,
  apigetData_TB2_BM1,
} from '../../../apis';
import { BM1 } from '../../../components';
import { useParams } from 'react-router-dom';
const TB_BM1 = () => {
  const { id } = useParams();
  // console.log('BM1', id);
  if (+id === 1) {
    return (
      <div>
        <BM1
          title={`NHẬT KÝ VẬN HÀNH TURBINE ${id} - 60MW - BIỂU MẪU 1`}
          apiGet={apigetData_TB1_BM1}
          apiExportExcel={apiExportExcel_TB1_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }
  if (+id === 2) {
    return (
      <div>
        <BM1
          title={`NHẬT KÝ VẬN HÀNH TURBINE ${id} - 60MW - BIỂU MẪU 1`}
          apiGet={apigetData_TB2_BM1}
          apiExportExcel={apiExportExcel_TB2_BM1}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default TB_BM1;
