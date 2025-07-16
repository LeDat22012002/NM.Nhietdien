import { memo, useEffect, useState } from 'react';
import moment from 'moment';
import logo from '../../../assets/image/Logo.png';
import { FilterTime } from '../../../components';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { ImFileExcel } from 'react-icons/im';

const row1 = [
  {
    colSpan: 1,
    rowSpan: 3,
    title: (
      <div className="flex flex-col items-center font-bold justify-between h-[200px] text-[14px]">
        <span>Hạng mục</span>
        <span>Trị số</span>
      </div>
    ),
  },
  { colSpan: 24, title: 'Bơm cấp nước' },
  { colSpan: 3, rowSpan: 2, title: 'Bình tách oxy' },
  { colSpan: 12, title: 'Bơm nước tuần hoàn' },
  { colSpan: 12, title: 'Tháp làm mát' },
];

const row2 = [
  { colSpan: 12, title: 'Bơm cấp nước số...' },
  { colSpan: 12, title: 'Bơm cấp nước số...' },
  { colSpan: 4, title: 'Bơm tuần hoàn số...' },
  { colSpan: 4, title: 'Bơm tuần hoàn số...' },
  { colSpan: 4, title: 'Bơm tuần hoàn số...' },
  { colSpan: 4, title: 'Quạt số' },
  { colSpan: 4, title: 'Quạt số' },
  { colSpan: 4, title: 'Quạt số' },
];

const row3 = [
  { title: 'I động cơ', colSpan: 1 },
  { title: 'Tº gối trước động cơ', colSpan: 1 },
  { title: 'Tº gối sau động cơ', colSpan: 1 },
  { title: 'Tº gối trước bơm', colSpan: 1 },
  { title: 'Tº gối sau bơm', colSpan: 1 },
  { title: 'Tº dầu làm mát gối trục', colSpan: 1 },
  { title: 'P dầu làm mát gối trục', colSpan: 1 },
  { title: 'Độ rung ổ trục trước max', colSpan: 1 },
  { title: 'Độ rung ổ trục sau max', colSpan: 1 },
  { title: 'Tº cuộn dây max 1', colSpan: 1 },
  { title: 'Tº cuộn dây max 2', colSpan: 1 },
  { title: 'Mức dầu', colSpan: 1 },
  { title: 'I động cơ', colSpan: 1 },
  { title: 'Tº gối trước động cơ', colSpan: 1 },
  { title: 'Tº gối sau động cơ', colSpan: 1 },
  { title: 'Tº gối trước bơm', colSpan: 1 },
  { title: 'Tº gối sau bơm', colSpan: 1 },
  { title: 'Tº dầu làm mát gối trục', colSpan: 1 },
  { title: 'P dầu làm mát gối trục', colSpan: 1 },
  { title: 'Độ rung ổ trục trước max', colSpan: 1 },
  { title: 'Độ rung ổ trục sau max', colSpan: 1 },
  { title: 'Tº cuộn dây max 1', colSpan: 1 },
  { title: 'Tº cuộn dây max2', colSpan: 1 },
  { title: 'Mức dầu', colSpan: 1 },
  { title: 'Nhiệt độ', colSpan: 1 },
  { title: 'Mức nước', colSpan: 1 },
  { title: 'Áp suất', colSpan: 1 },
  { title: 'I động cơ', colSpan: 1 },
  { title: 'Tº gối động cơ trước', colSpan: 1 },
  { title: 'Tº gối động cơ sau', colSpan: 1 },
  { title: 'Tº cuộn dây max', colSpan: 1 },
  { title: 'I động cơ', colSpan: 1 },
  { title: 'Tº gối động cơ trước', colSpan: 1 },
  { title: 'Tº gối động cơ sau', colSpan: 1 },
  { title: 'Tº cuộn dây max', colSpan: 1 },
  { title: 'I động cơ', colSpan: 1 },
  { title: 'Tº gối động cơ trước', colSpan: 1 },
  { title: 'Tº gối động cơ sau', colSpan: 1 },
  { title: 'Tº cuộn dây max', colSpan: 1 },
  { title: 'Dòng điện', colSpan: 1 },
  { title: 'Độ rung', colSpan: 1 },
  { title: 'Tº dầu hộp giảm tốc', colSpan: 1 },
  { title: 'L dầu hộp giảm tốc', colSpan: 1 },
  { title: 'Dòng điện', colSpan: 1 },
  { title: 'Độ rung', colSpan: 1 },
  { title: 'Tº dầu hộp giảm tốc', colSpan: 1 },
  { title: 'L dầu hộp giảm tốc', colSpan: 1 },
  { title: 'Dòng điện', colSpan: 1 },
  { title: 'Độ rung', colSpan: 1 },
  { title: 'Tº dầu hộp giảm tốc', colSpan: 1 },
  { title: 'L dầu hộp giảm tốc', colSpan: 1 },
];
const row4 = [
  { title: 'h', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'mm	', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'TºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
];

const BM_11_QT_05_08 = ({ apiGet, apiExportExcel, title, turbineIndex }) => {
  const [data1, setData1] = useState(null);

  const [begind, setBegind] = useState('');
  const [endd, setEndd] = useState('');
  const fetchDataBM3 = async () => {
    const reponse = await apiGet(begind, endd, 'asc');
    // console.log('đtststs', reponse);
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
  // lấy ra các Tagname là duy nhất
  const uniqueTagNames = Object.keys(data1?.[0] || {}).filter((key) =>
    key.startsWith('tag')
  );
  useEffect(() => {
    fetchDataBM3();
  }, []);

  const handleTG = (begindValue, enddValue) => {
    setBegind(begindValue);
    setEndd(enddValue);
    fetchDataBM3(begindValue, enddValue);
  };

  const handleExportExcel = async () => {
    if (!begind || !endd) {
      toast.warning('Thiếu thời gian!');
      return;
    }

    try {
      const response = await apiExportExcel(begind, endd, turbineIndex);

      if (!response || !response.data) {
        throw new Error('Không nhận được dữ liệu từ server.');
      }

      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      //  Kiểm tra header tồn tại trước khi đọc
      let fileName = 'BM3_Export.xlsx';
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

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-[200px] object-cover"></img>
          <div className="flex flex-col text-sm font-semibold">
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
      <div>
        <FilterTime callBackHandle={handleTG} />
      </div>
      <div className="text-center">
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
              {Array.from({ length: 52 }).map((_, i) => (
                <col key={i} style={{ width: '60px' }} />
              ))}
            </colgroup>
            <thead className="text-sm text-gray-700 border border-gray-700">
              <tr>
                {row1.map((item, index) => (
                  <th
                    key={index}
                    colSpan={item.colSpan}
                    rowSpan={item.rowSpan}
                    className={clsx(
                      'sticky top-0 z-[80] bg-white px-1 py-1 text-center align-middle h-[50px] min-w-[60px] border border-gray-700',
                      index === 0 && 'left-0 z-[90] bg-yellow-300'
                    )}
                  >
                    {item.title}
                  </th>
                ))}
              </tr>

              <tr>
                {row2.map((item, index) => (
                  <th
                    key={index}
                    colSpan={item.colSpan}
                    className={clsx(
                      'sticky top-[50px] z-10 bg-white h-[50px] min-w-[50px] max-w-[50px] px-1 py-1 text-center align-middle',
                      'border border-gray-700'
                    )}
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
              <tr>
                {row3.map((col, index) => (
                  <th
                    key={index}
                    colSpan={col.colSpan}
                    className={clsx(
                      'sticky top-[100px] z-20 bg-white',
                      'min-w-[60px] max-w-[60px] px-1 py-1 text-[10px] text-center align-middle',
                      '[writing-mode:vertical-rl] rotate-180 truncate',
                      'shadow-[inset_0_-1px_0_#4b5563] border border-gray-700'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
              <tr>
                {row4.map((col, index) => (
                  <th
                    key={index}
                    colSpan={col.colSpan}
                    className={clsx(
                      'sticky top-[237px] z-[50] bg-white px-1 py-1 text-center align-middle h-[30px] min-w-[60px] border border-gray-700 text-[10px] font-semibold',
                      index === 0 && 'left-0 z-[60] bg-yellow-300'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>

              <tr className="hidden">
                <th
                  colSpan={4}
                  className="py-2 px-2 text-[10px] text-center border border-gray-700"
                >
                  h
                </th>
                {uniqueTagNames?.map((item, index) => (
                  <th
                    key={index}
                    colSpan={1}
                    className="py-2 px-2 text-[10px] text-center border border-gray-700"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[10px] text-gray-700 border border-gray-700">
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

export default memo(BM_11_QT_05_08);
