import { useParams } from 'react-router-dom';
import { BM_NHND } from '../../../../components';
import {
  apiExportExcel_NoiHoi_ND1,
  apigetData_NoiHoi_ND1,
} from '../../../../apis';

const NHND = () => {
  const { id } = useParams();
  if (+id === 1) {
    return (
      <div>
        <BM_NHND
          title={`NHẬT KÝ VẬN HÀNH NỒI HƠI NHIỆT DƯ SỐ ${id}`}
          apiGet={apigetData_NoiHoi_ND1}
          apiExportExcel={apiExportExcel_NoiHoi_ND1}
          turbineIndex={id}
        />
      </div>
    );
  }
};

export default NHND;
