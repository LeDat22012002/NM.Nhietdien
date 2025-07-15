import {
  apiExportExcel_TB2_BM3,
  apiExportExcelTB3,
  apigetData_TB2_BM3,
  apigetDataTB3,
} from '../../../apis';
import { BM3 } from '../../../components';
import { useParams } from 'react-router-dom';
const TB_BM3 = () => {
  const { id } = useParams();
  // console.log('dat', id);
  if (+id === 1) {
    return (
      <div>
        <BM3
          title={`NHẬT KÝ VẬN HÀNH TURBINE ${id} - 60MW - BIỂU MẪU 3`}
          apiGet={apigetDataTB3}
          apiExportExcel={apiExportExcelTB3}
          turbineIndex={id}
        />
      </div>
    );
  }
  if (+id === 2) {
    return (
      <div>
        <BM3
          title={`NHẬT KÝ VẬN HÀNH TURBINE ${id} - 60MW - BIỂU MẪU 3`}
          apiGet={apigetData_TB2_BM3}
          apiExportExcel={apiExportExcel_TB2_BM3}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default TB_BM3;
