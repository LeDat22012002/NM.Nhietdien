import { apiExportExcelTB3, apigetDataTB3 } from '../../../apis';
import { BM3 } from '../../../components';

const BM_11_QT_05_08 = () => {
  return (
    <div>
      <BM3
        title="NHẬT KÝ VẬN HÀNH TURBINE 1 - 60MW - BIỂU MẪU 3"
        apiGet={apigetDataTB3}
        apiExportExcel={apiExportExcelTB3}
        turbineIndex="1"
      />
    </div>
  );
};

export default BM_11_QT_05_08;
