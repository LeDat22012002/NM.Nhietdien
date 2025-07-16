import { memo, useEffect, useState } from 'react';
import logo from '../../../assets/image/Logo.png';
import { ImFileExcel } from 'react-icons/im';
import FilterTime from '../../FilterTime/FilterTime';
import moment from 'moment';
import { toast } from 'react-toastify';
import clsx from 'clsx';

// Dòng 1

const row1 = [
  {
    colSpan: 1,
    rowSpan: 3,
    title: (
      <div className="flex flex-col items-center font-bold justify-between h-[300px] text-[14px]">
        <span>Hạng mục</span>
        <span>Trị số</span>
      </div>
    ),
  },
  { colSpan: 29, title: 'Hệ thống thiết bị đo trong thân turbine' },
  { colSpan: 10, title: 'Hệ thống nước ngưng và bình ngưng' },
  { colSpan: 5, title: 'Hệ thống bơm chân không' },
  { colSpan: 4, title: '' },
];
// Row2

const row2 = [
  {
    colSpan: 2,
    rowSpan: 1,
    title: 'Dịch trục',
    vertical: false,
  },
  {
    colSpan: 3,
    rowSpan: 1,
    title: 'Giãn nở',
    vertical: false,
  },
  {
    colSpan: 9,
    rowSpan: 1,
    title: 'Độ rung',
    vertical: false,
  },
  {
    colSpan: 6,
    rowSpan: 1,
    title: 'Nhiệt độ dầu hồi',
    vertical: false,
  },
  {
    colSpan: 9,
    rowSpan: 1,
    title: 'Nhiệt độ bạc đỡ, bạc chặn',
    vertical: false,
  },
  {
    colSpan: 5,
    rowSpan: 1,
    title: 'Bơm nước ngưng',
    vertical: false,
  },
  {
    colSpan: 5,
    rowSpan: 1,
    title: 'Hệ thống bình ngưng',
    vertical: false,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'I bơm chân không...',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'I bơm chân không...',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'P nước đầu ra bơm chân không',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº nước bể chân không',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'L bể/bơm chân không vận hành',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'I động cơ nước khử khoáng số …',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'L bể khử khoáng ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'L tháp làm mát',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'I động cơ bơm công nghiệp/ tăng áp tuân hoàn …',
    vertical: true,
  },
];

// Row3
const row3 = [
  { title: 'Dịch trục A', colSpan: 1, vertical: true },
  { title: 'Dịch trục B', colSpan: 1, vertical: true },
  { title: 'Giãn nở rotor', colSpan: 1, vertical: true },
  { title: 'Giãn nở thành A', colSpan: 1, vertical: true },
  { title: 'Giãn nở thành B', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 1', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 1B', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 2', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 2B', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 3', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 3B', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 4', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 4B', colSpan: 1, vertical: true },
  { title: 'Độ rung gối 5', colSpan: 1, vertical: true },
  { title: 'Tº dầu  làm việc', colSpan: 1, vertical: true },
  { title: 'Tº dầu hồi gối 1 max', colSpan: 1, vertical: true },
  { title: 'Tº dầu hồi gối 2 max', colSpan: 1, vertical: true },
  { title: 'Tº dầu hồi gối 3 max', colSpan: 1, vertical: true },
  { title: 'Tº dầu hồi gối 4 max', colSpan: 1, vertical: true },
  { title: 'Tº dầu hồi gối 5', colSpan: 1, vertical: true },
  { title: 'Tº bạc chặn phía trước max', colSpan: 1, vertical: true },
  { title: 'Tº bạc chặn phía sau max1', colSpan: 1, vertical: true },
  { title: 'Tº bạc chặn phía sau max2', colSpan: 1, vertical: true },
  { title: 'Tº bạc chặn phía sau max3', colSpan: 1, vertical: true },
  { title: 'Tº bạc đỡ gối 1 max', colSpan: 1, vertical: true },
  { title: 'Tº bạc đỡ gối 2 max', colSpan: 1, vertical: true },
  { title: 'Tº bạc đỡ gối 3 max', colSpan: 1, vertical: true },
  { title: 'Tº bạc đỡ gối 4 max', colSpan: 1, vertical: true },
  { title: 'Tº bạc đỡ gối 5', colSpan: 1, vertical: true },
  { title: 'L bình ngưng', colSpan: 1, vertical: true },
  { title: 'Tº nước ngưng', colSpan: 1, vertical: true },
  { title: 'I bơm số... ', colSpan: 1, vertical: true },
  { title: 'I bơm số ...', colSpan: 1, vertical: true },
  { title: 'P đầu ra bơm ngưng', colSpan: 1, vertical: true },
  { title: 'P nước tuần hoàn đầu vào max', colSpan: 1, vertical: true },
  { title: 'Tº nước tuần hoàn đầu vào  trái', colSpan: 1, vertical: true },
  { title: 'Tº nước tuần hoàn đầu ra trái', colSpan: 1, vertical: true },
  { title: 'Tº nước tuần hoàn đầu vào phải', colSpan: 1, vertical: true },
  { title: 'Tº nước tuần hoàn đầu ra phải', colSpan: 1, vertical: true },
];
const row4 = [
  { title: 'h', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'μm', colSpan: 1 },
  { title: '', colSpan: 1 },
  { title: 'μm', colSpan: 1 },
  { title: '', colSpan: 1 },
  { title: 'μm', colSpan: 1 },
  { title: '', colSpan: 1 },
  { title: 'μm', colSpan: 1 },
  { title: '', colSpan: 1 },
  { title: 'mm/s', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: '', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'A', colSpan: 1 },
];
const TB_BM2 = ({ apiGet, title, apiExportExcel, turbineIndex }) => {
  const [data1, setData1] = useState(null);

  const [begind, setBegind] = useState('');
  const [endd, setEndd] = useState('');

  const fetchData_TB_BM2 = async () => {
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
  // lấy ra các Tagname là duy nhất
  const uniqueTagNames = Object.keys(data1?.[0] || {}).filter((key) =>
    key.startsWith('tag')
  );
  const handleTG = (begindValue, enddValue) => {
    setBegind(begindValue);
    setEndd(enddValue);
    fetchData_TB_BM2(begindValue, enddValue);
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
      let fileName = 'BM2_Export.xlsx';
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

  useEffect(() => {
    fetchData_TB_BM2();
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
              {Array.from({ length: 49 }).map((_, i) => (
                <col key={i} style={{ width: '60px' }} />
              ))}
            </colgroup>
            <thead className="text-sm text-gray-700">
              <tr>
                {row1?.map((group, index) => (
                  <th
                    key={index}
                    colSpan={group.colSpan}
                    rowSpan={group.rowSpan}
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
                      'sticky top-[40px] z-[70] bg-white px-1 text-center align-middle h-[40px] min-w-[60px] border border-gray-700',
                      item.vertical
                        ? '[writing-mode:vertical-rl] px-6 rotate-180 text-[10px] font-semibold leading-none break-words overflow-visible whitespace-normal'
                        : 'text-[14px] font-bold'
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
                      'sticky top-[160px] z-[60] bg-white px-6 text-center align-middle h-[150px] min-w-[60px] border border-gray-700 ',
                      col.vertical
                        ? '[writing-mode:vertical-rl] rotate-180 text-[10px] font-semibold leading-none break-words overflow-visible whitespace-normal'
                        : 'text-[14px] font-bold'
                      // index === 0 && 'left-0 z-[70] bg-yellow-300'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>

              <tr>
                {row4?.map((col, index) => (
                  <th
                    key={index}
                    colSpan={col?.colSpan}
                    className={clsx(
                      'sticky top-[310px] z-[50] bg-white px-1 py-1 text-center align-middle h-[30px] min-w-[60px] border border-gray-700 text-[10px] font-semibold',
                      index === 0 && 'left-0 z-[60] bg-yellow-300'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="mt-[3px]">
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

export default memo(TB_BM2);
