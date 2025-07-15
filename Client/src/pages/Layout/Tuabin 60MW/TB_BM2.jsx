import { apiExportExcel_TB1_BM2, apigetData_TB1_BM2 } from '../../../apis';
import { BM2 } from '../../../components';
import { useParams } from 'react-router-dom';
const TB_BM2 = () => {
  const { id } = useParams();
  console.log('BM2', id);
  if (+id === 1) {
    return (
      <div>
        <BM2
          title={`NHẬT KÝ VẬN HÀNH TURBINE ${id} - 60MW - BIỂU MẪU 2`}
          apiGet={apigetData_TB1_BM2}
          apiExportExcel={apiExportExcel_TB1_BM2}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default TB_BM2;
