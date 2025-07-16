import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import FilterTime from '../../FilterTime/FilterTime';
import { ImFileExcel } from 'react-icons/im';
import logo from '../../../assets/image/Logo.png';
import moment from 'moment';
import { toast } from 'react-toastify';

const row1 = [
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Hạng mục',
  },
  { colSpan: 13, rowSpan: 1, title: 'Bộ giảm nhiệt giảm áp' },
  { colSpan: 12, rowSpan: 1, title: 'Bình tách Oxy' },

  { colSpan: 3, rowSpan: 1, title: 'Nước ngưng' },
  { colSpan: 3, rowSpan: 1, title: 'Bơm tách oxy' },
  { colSpan: 24, rowSpan: 1, title: 'Bơm cấp nước' },
];

const row2 = [
  {
    colSpan: 4,
    rowSpan: 1,
    title: 'Bộ A',
    vertical: false,
  },
  {
    colSpan: 4,
    rowSpan: 1,
    title: 'Bộ B',
    vertical: false,
  },

  {
    colSpan: 4,
    rowSpan: 1,
    title: 'Bộ C',
    vertical: false,
  },

  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Lưu lượng',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Áp suất hơi thấp áp',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Nhiệt độ hơi thấp áp',
    vertical: true,
  },
  {
    colSpan: 5,
    rowSpan: 1,
    title: 'Bình # 1',
    vertical: false,
  },
  {
    colSpan: 5,
    rowSpan: 1,
    title: 'Bình # 2 ',
    vertical: false,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Mức nước bể #1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Mức nước bể #2',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Lưu lượng',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Dòng điện bơm tách </br> oxy số 1 ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Dòng điện bơm tách </br> oxy số 2 ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Dòng điện bơm tách </br> oxy số 3',
    vertical: true,
  },
  {
    colSpan: 8,
    rowSpan: 1,
    title: 'Bơm cấp nước số …………',
    vertical: false,
  },
  {
    colSpan: 8,
    rowSpan: 1,
    title: 'Bơm cấp nước số …………',
    vertical: false,
  },
  {
    colSpan: 8,
    rowSpan: 1,
    title: 'Bơm cấp nước số …………',
    vertical: false,
  },
];

const row3 = [
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Trị số ',
    vertical: false,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất đầu vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ đầu vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất đầu ra',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ đầu ra',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất đầu vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ đầu vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất đầu ra',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ đầu ra',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất đầu vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ đầu vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất đầu ra',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ đầu ra',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Lưu lượng hơi thấp áp',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ nước vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ bên trong',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất bên trong',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Mức nước',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Lưu lượng hơi thấp áp',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ nước vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ bên trong',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất bên trong',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Mức nước',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Dòng điện động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục phía </br> trước động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục phía </br> sau động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục </br> phía trước Bơm',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục </br> phía sau bơm',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 2',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 3',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Dòng điện động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục phía </br> trước động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục phía </br> sau động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục </br> phía trước Bơm',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục </br> phía sau bơm',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 2',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 3',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Dòng điện động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục phía </br> trước động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục phía </br> sau động cơ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục </br> phía trước Bơm',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ ổ trục </br> phía sau bơm',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 2',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ cuộn dây 3',
    vertical: true,
  },
];
const row4 = [
  { colSpan: 1, title: 'h' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'Mpa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Kpa' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'Kpa' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 'mm' },
  { colSpan: 1, title: 't/h' },
  { colSpan: 1, title: 'A' },
  { colSpan: 1, title: 'A' },
  { colSpan: 1, title: 'A' },
  { colSpan: 1, title: 'A' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'A' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'A' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: 'ºC' },
];

const BM2_CDQ = ({ apiGet, title, apiExportExcel, turbineIndex }) => {
  const [data1, setData1] = useState(null);

  const [begind, setBegind] = useState('');
  const [endd, setEndd] = useState('');

  const fetchData_CDQ_BM2 = async () => {
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

  const handleTG = (begindValue, enddValue) => {
    setBegind(begindValue);
    setEndd(enddValue);
    fetchData_CDQ_BM2(begindValue, enddValue);
  };

  const uniqueTagNames = Object.keys(data1?.[0] || {}).filter((key) =>
    key.startsWith('tag')
  );

  useEffect(() => {
    fetchData_CDQ_BM2();
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
              {Array.from({ length: 56 }).map((_, i) => (
                <col key={i} style={{ width: '60px' }} />
              ))}
            </colgroup>

            <thead className="text-sm text-gray-700">
              {/* ROW 1 */}
              <tr>
                {row1?.map((group, index) => (
                  <th
                    key={index}
                    colSpan={group.colSpan}
                    rowSpan={group?.rowSpan}
                    className={clsx(
                      'sticky top-0 z-[80] bg-white px-1 py-2 text-center align-middle h-[40px] min-w-[60px] border border-gray-700',
                      index === 0 && 'left-0 z-[90] bg-yellow-300'
                    )}
                  >
                    {group.title}
                  </th>
                ))}
              </tr>

              {/* ROW 2 */}
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
                    <div
                      className="inline-block w-full h-full "
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </th>
                ))}
              </tr>

              {/* ROW 3 */}
              <tr>
                {row3.map((item, index) => (
                  <th
                    key={index}
                    colSpan={item.colSpan}
                    rowSpan={item.rowSpan}
                    className={clsx(
                      'sticky top-[80px] z-[60] bg-white px-6 text-center align-middle h-[100px] min-w-[60px] border border-gray-700 ',
                      item.vertical
                        ? '[writing-mode:vertical-rl] rotate-180 text-[10px] font-semibold leading-none break-words overflow-visible whitespace-normal'
                        : 'text-[14px] font-bold',
                      index === 0 && 'left-0 z-[70] bg-yellow-300'
                    )}
                  >
                    <div
                      className="inline-block w-full h-full text-center"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </th>
                ))}
              </tr>

              {/* ROW 4 */}
              <tr>
                {row4?.map((col, index) => (
                  <th
                    key={index}
                    colSpan={col?.colSpan}
                    className={clsx(
                      'sticky top-[180px] z-[50] bg-white px-1 py-1 text-center align-middle h-[40px] min-w-[60px] border border-gray-700 text-[10px] font-semibold',
                      index === 0 && 'left-0 z-[60] bg-yellow-300'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data1?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td
                    className={clsx(
                      'sticky left-0 z-[40] bg-yellow-100 text-center text-[10px] font-bold h-[40px] min-w-[60px] border border-gray-700'
                    )}
                  >
                    {moment(row?.thoiGian).format('HH:mm')}
                  </td>
                  {uniqueTagNames?.map((tagname, colIndex) => (
                    <td
                      key={colIndex}
                      className="h-[40px] min-w-[60px] max-w-[60px] px-1 py-1 truncate border border-gray-700 text-center text-black"
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

export default memo(BM2_CDQ);
