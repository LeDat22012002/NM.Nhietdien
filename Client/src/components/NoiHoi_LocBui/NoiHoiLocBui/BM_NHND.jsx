import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import FilterTime from '../../FilterTime/FilterTime';
import { ImFileExcel } from 'react-icons/im';
import logo from '../../../assets/image/Logo.png';
import moment from 'moment';
import { toast } from 'react-toastify';

const row1 = [
  { colSpan: 1, title: 'Hạng mục' },
  { colSpan: 3, title: 'Hơi  quá nhiệt' },
  { colSpan: 7, title: 'Thông số bao hơi' },
  { colSpan: 5, title: 'Nước cấp nồi hơi' },
  { colSpan: 3, title: 'Bộ giảm nhiệt' },
  { colSpan: 3, title: 'Khí nóng Sau van TKT NH' },
  { colSpan: 2, title: 'Khí nóng trước BQN nhiệt độ cao' },
  { colSpan: 2, title: 'Khí nóng trước BQN nhiệt độ thấp' },
  { colSpan: 2, title: 'Khí nóng trước bộ SH ống trơn' },
  { colSpan: 2, title: 'Khí nóng trước bộ SH ống xoắn' },
  { colSpan: 2, title: 'Khí nóng trước TKT số 3' },
  { colSpan: 2, title: 'Khí nóng trước TKT số 2' },
  { colSpan: 2, title: 'Khí nóng trước TKT số 1' },
  { colSpan: 2, title: 'Khí nóng sau bộ TKT' },
  { colSpan: 2, title: 'P khí nóng sau bộ TKT' },
];

const row2 = [
  { colSpan: 1, title: 'Trị số ' },
  { colSpan: 1, vertical: true, title: 'P' },
  { colSpan: 1, vertical: true, title: 'T' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
  { colSpan: 1, vertical: true, title: 'P trái' },
  { colSpan: 1, vertical: true, title: 'P phải' },
  { colSpan: 1, vertical: true, title: 'T0 max trên ' },
  { colSpan: 1, vertical: true, title: 'T0 max dưới ' },
  { colSpan: 1, vertical: true, title: 'Mức nước (A)' },
  { colSpan: 1, vertical: true, title: 'Mức nước (B)' },
  { colSpan: 1, vertical: true, title: 'Mức nước (C)' },
  { colSpan: 1, vertical: true, title: 'P trước TKT' },
  { colSpan: 1, vertical: true, title: 'T0 trước TKT' },
  { colSpan: 1, vertical: true, title: 'P sau TKT' },
  { colSpan: 1, vertical: true, title: 'T0 sau TKT' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
  { colSpan: 1, vertical: true, title: 'T0 hơi vào' },
  { colSpan: 1, vertical: true, title: 'T0 hơi ra' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'P ' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'T0 A' },
  { colSpan: 1, vertical: true, title: 'T0 B' },
  { colSpan: 1, vertical: true, title: 'P' },
  { colSpan: 1, vertical: true, title: 'Lưu lượng' },
];

const row3 = [
  { colSpan: 1, title: 'h ' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'MPa' },
  { colSpan: 1, title: 'MPa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 'MPa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'MPa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Pa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Pa' },
  { colSpan: 1, title: 'Km3/h' },
];

const BM_NHND = ({ title, apiGet, apiExportExcel, turbineIndex }) => {
  const [data1, setData1] = useState(null);

  const [begind, setBegind] = useState('');
  const [endd, setEndd] = useState('');

  // gọi API
  const fetchData_NoiHoi_ND = async () => {
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

  const uniqueTagNames = Object.keys(data1?.[0] || {}).filter((key) =>
    key.startsWith('tag')
  );
  const handleTG = (begindValue, enddValue) => {
    setBegind(begindValue);
    setEndd(enddValue);
    fetchData_NoiHoi_ND(begindValue, enddValue);
  };

  useEffect(() => {
    fetchData_NoiHoi_ND();
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
          <table
            className="table-fixed w-full text-[10px]"
            style={{
              borderCollapse: 'separate',
              borderSpacing: 0,
            }}
          >
            <colgroup>
              {Array.from({ length: 40 }).map((_, i) => (
                <col key={i} style={{ width: '60px' }} />
              ))}
            </colgroup>
            <thead className="text-sm text-gray-700">
              <tr>
                {row1?.map((group, index) => (
                  <th
                    key={index}
                    colSpan={group.colSpan}
                    // rowSpan={group.rowSpan}
                    className={clsx(
                      'sticky top-0 z-[80] bg-white px-1 py-1 text-center align-middle h-[40px] min-w-[60px] border border-gray-700',
                      index === 0 && 'left-0 z-[90] bg-yellow-300'
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
                      'sticky top-[70px] z-[70] bg-white px-1 text-center align-middle h-[100px] min-w-[60px] border border-gray-700',
                      item.vertical
                        ? '[writing-mode:vertical-rl] px-6 rotate-180 text-[10px] font-semibold leading-none break-words overflow-visible whitespace-normal'
                        : 'text-[14px] font-bold',
                      index === 0 && 'left-0 z-[80] bg-yellow-300'
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
                      'sticky top-[170px] py-1 text-[10px] h-[40px] font-semibold text-center bg-white',
                      'border border-gray-700 shadow-[inset_0_1px_0_#4b5563]',
                      index === 0 && 'left-0 z-[100] bg-yellow-400 w-[50px]'
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
                      'sticky left-0 z-[40] bg-yellow-400 text-center text-[10px] font-bold h-[40px] min-w-[60px] border border-gray-700'
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

export default memo(BM_NHND);
