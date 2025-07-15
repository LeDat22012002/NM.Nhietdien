import { memo, useEffect, useState } from 'react';
import FilterTime from '../../FilterTime/FilterTime';
import logo from '../../../assets/image/Logo.png';
import { ImFileExcel } from 'react-icons/im';
import clsx from 'clsx';
import moment from 'moment';
import { toast } from 'react-toastify';
const row1 = [
  { colSpan: 1, title: 'Hạng mục' },
  { colSpan: 6, title: 'Hơi chính bộ quá nhiệt' },
  { colSpan: 3, title: 'Bao hơi' },
  { colSpan: 2, title: 'Nước cấp chính' },
  { colSpan: 4, title: 'Nước cấp vào nồi hơi' },
  { colSpan: 4, title: 'Nước giảm nhiệt' },
  { colSpan: 1, title: 'Xả liên tục bao hơi' },
  { colSpan: 2, title: 'Áp suất khí nóng' },
  { colSpan: 2, title: 'Nhiệt độ khí nóng' },
  { colSpan: 3, title: 'Bộ gia nhiệt nước cấp lần 1' },
];

const row2 = [
  { colSpan: 1, title: 'Trị số ' },
  { colSpan: 1, vertical: true, title: 'Áp suất đầu ra quá </br> nhiệt cao' },
  { colSpan: 1, vertical: true, title: 'Áp suất sau van </br> điều tiết' },
  { colSpan: 1, vertical: true, title: 'Áp suất về </br> tuabin' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng tổng' },
  { colSpan: 1, vertical: true, title: 'Áp suất' },
  { colSpan: 1, vertical: true, title: 'Mức nước BH </br> bên trái' },
  { colSpan: 1, vertical: true, title: 'Mức nước BH </br> bên phải' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng ' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng tổng' },
  { colSpan: 1, vertical: true, title: 'Áp suất' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng tổng' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ sau </br> bộ TKT' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng tổng' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ đầu </br> vào' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ đầu </br> ra' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
  { colSpan: 1, vertical: true, title: 'Áp suất đầu vào </br> nồi hơi' },
  { colSpan: 1, vertical: true, title: 'Áp suất đầu ra </br> nồi hơi' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ đầu vào </br> nồi hơi' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ đầu ra </br> nồi hơi' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ đầu vào' },
  { colSpan: 1, vertical: true, title: 'Áp suất đầu ra' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ đầu ra' },
];

const row3 = [
  { colSpan: 1, title: 'TS ' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'km3' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'kt' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'kt' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'kt' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'Pa' },
  { colSpan: 1, title: 'Pa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'MPa' },
  { colSpan: 1, title: 'ºC' },
];

const BM1_CDQ = ({ title, apiGet, apiExportExcel, turbineIndex }) => {
  const [data1, setData1] = useState(null);

  const [begind, setBegind] = useState('');
  const [endd, setEndd] = useState('');

  // gọi API
  const fetchData_CDQ_BM1 = async () => {
    const reponse = await apiGet(begind, endd, 'asc');
    if (reponse?.status) {
      const data1 = reponse?.data;

      const grouped = {};

      data1.forEach((item) => {
        const minuteKey = moment(item.time).format('YYYY-MM-DD HH:mm');

        // Gán bản ghi mới nếu chưa có giờ đó
        grouped[minuteKey] = item; // mỗi giờ sẽ giữ bản ghi cuối cùng (do đang duyệt theo asc)
      });

      // Chuyển object về mảng
      const result = Object.entries(grouped).map(([time, value]) => ({
        thoiGian: time,
        ...value,
      }));

      setData1(result);
    }
  };

  const handleExportExcel = async () => {
    if (!begind || !endd) {
      toast.warning('Thiếu thời gian!');
      return;
    }

    try {
      const response = await apiExportExcel(begind, endd, turbineIndex);

      //  Đảm bảo response và headers tồn tại
      if (!response || !response.data) {
        throw new Error('Không nhận được dữ liệu từ server.');
      }

      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      //  Kiểm tra header tồn tại trước khi đọc
      let fileName = 'BM1_Export.xlsx';
      if (response.headers && response.headers['content-disposition']) {
        const match =
          response.headers['content-disposition'].match(/filename="?(.+?)"?$/);
        if (match && match[1]) {
          fileName = decodeURIComponent(match[1]);
        }
      }

      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Lỗi Xuất Excel:', error);
      toast.error('Không xuất được file!');
    }
  };

  const handleTG = (begindValue, enddValue) => {
    setBegind(begindValue);
    setEndd(enddValue);
    fetchData_CDQ_BM1(begindValue, enddValue);
  };

  const uniqueTagNames = Object.keys(data1?.[0] || {}).filter((key) =>
    key.startsWith('tag')
  );
  useEffect(() => {
    fetchData_CDQ_BM1();
  }, []);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between w-full ">
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-[200px] object-cover"></img>
          <div className="flex flex-col font-semibold">
            <h6>CÔNG TY CỔ PHẦN THÉP</h6>
            <h6> HÒA PHÁT DUNG QUẤT</h6>
          </div>
        </div>
        <div>
          <button
            onClick={handleExportExcel}
            className="px-4 py-2 flex items-center gap-1 text-[14px] text-white font-semibold transition duration-200 bg-green-800 rounded hover:bg-green-900"
          >
            <ImFileExcel />
            <span> Xuất Excel</span>
          </button>
        </div>
      </div>
      <div className="mb-[50px]">
        <FilterTime callBackHandle={handleTG} />
      </div>
      <div className="text-center ">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="max-w-full overflow-x-auto overflow-y-auto border border-gray-300 rounded scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="w-[1000px] h-[610px]">
          <table className="table-fixed border border-collapse w-full text-[10px]">
            <colgroup>
              {Array.from({ length: 28 }).map((_, i) => (
                <col key={i} style={{ width: '60px' }} />
              ))}
            </colgroup>
            <thead className="text-sm text-gray-700 border border-gray-700">
              <tr>
                {row1?.map((group, index) => (
                  <th
                    key={index}
                    colSpan={group.colSpan}
                    // rowSpan={group.rowSpan}
                    className={clsx(
                      'sticky top-[0px] bg-white min-w-[50px] px-1 py-2 text-center align-middle h-[50px]',
                      'border-l border-gray-700 shadow-[inset_0_-1px_0_#4b5563]',
                      index === 0 &&
                        'left-0 z-[60] border-r border-gray-700 shadow-[inset_-1px_0_0_#4b5563]'
                    )}
                  >
                    {group.title}
                  </th>
                ))}
              </tr>
              <tr>
                {row2.map((item, index) => (
                  <th
                    key={index}
                    colSpan={item.colSpan}
                    rowSpan={item.rowSpan}
                    className={clsx(
                      'sticky top-[96px] z-10 bg-white min-w-[50px] max-w-[50px] px-1  text-center align-middle border border-gray-700',
                      index === 0 &&
                        'left-0 z-[60] shadow-[inset_-1px_0_0_#4b5563] ',
                      item.vertical
                        ? 'text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold leading-none whitespace-normal break-words overflow-visible '
                        : 'text-[14px] font-bold max-h-[30px]'
                    )}
                  >
                    <div
                      className="inline-block w-full h-full"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </th>
                ))}
              </tr>

              <tr>
                {row3.map((col, index) => (
                  <th
                    key={index}
                    colSpan={col.colSpan}
                    className={clsx(
                      'sticky top-[194px] py-1 text-[10px] font-semibold text-center bg-white',
                      'border border-gray-700 shadow-[inset_0_1px_0_#4b5563]',
                      index === 0 && 'left-0 z-[100] bg-white w-[50px]'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>

              {/* <tr>
                {row4?.map((col, index) => (
                  <th
                    key={index}
                    colSpan={col?.colSpan}
                    className={clsx(
                      'sticky top-[317px] py-1 text-[10px] font-semibold text-center bg-white',
                      'border border-gray-700 shadow-[inset_0_1px_0_#4b5563]',
                      index === 0 &&
                        'left-0 z-[60] shadow-[inset_-1px_0_0_#4b5563] border-r border-gray-700'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr> */}
            </thead>
            <tbody>
              {data1?.map((row, index) => (
                <tr key={index}>
                  <td
                    colSpan={1}
                    className={clsx(
                      'sticky left-0 z-[50] bg-yellow-400 text-[10px] text-center font-bold',
                      'border border-gray-700 shadow-[inset_-1px_0_0_#4b5563]'
                    )}
                  >
                    {moment(row?.thoiGian).format('HH:mm')}
                  </td>
                  {uniqueTagNames?.map((tagname) => (
                    <td
                      key={tagname}
                      className="border border-gray-700 text-black text-center px-1 py-1 truncate max-w-[60px] overflow-hidden"
                    >
                      {row[tagname]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default memo(BM1_CDQ);
