import clsx from 'clsx';
import FilterTime from '../../FilterTime/FilterTime';
import { useEffect, useState } from 'react';
import logo from '../../../assets/image/Logo.png';
import { ImFileExcel } from 'react-icons/im';
import moment from 'moment';
import { toast } from 'react-toastify';
const row1 = [
  { colSpan: 1, title: 'Hạng mục' },
  { colSpan: 1, title: '' },
  { colSpan: 4, title: 'Phễu A1' },
  { colSpan: 4, title: 'Phễu A2' },
  { colSpan: 4, title: 'Phễu A3' },
  { colSpan: 4, title: 'Phễu B1' },
  { colSpan: 4, title: 'Phễu B2' },
  { colSpan: 4, title: 'Phễu B3' },
];

const row2 = [
  { colSpan: 1, title: 'Trị số ' },
  { colSpan: 1, vertical: true, title: 'Áp suất khí nén bình tích khí rũ bụi' },
  {
    colSpan: 1,
    vertical: true,
    title: 'Độ mở van hồi liệu ',
  },
  {
    colSpan: 1,
    vertical: true,
    title: 'Áp suất phễu tro ',
  },
  {
    colSpan: 1,
    vertical: true,
    title: 'Áp suất phễu tro',
  },
  {
    colSpan: 1,
    vertical: true,
    title: 'Nhiệt độ phễu tro',
  },
  { colSpan: 1, vertical: true, title: 'Độ mở van hồi liệu' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro' },
  {
    colSpan: 1,
    vertical: true,
    title: 'Nhiệt độ phễu tro',
  },
  { colSpan: 1, vertical: true, title: 'Độ mở van hồi liệu' },

  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro ' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro' },
  {
    colSpan: 1,
    vertical: true,
    title: 'Nhiệt độ phễu tro',
  },

  { colSpan: 1, vertical: true, title: 'Độ mở van hồi liệu' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro ' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ phễu tro' },
  { colSpan: 1, vertical: true, title: 'Độ mở van hồi liệu' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro ' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ phễu tro' },
  { colSpan: 1, vertical: true, title: 'Độ mở van hồi liệu' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro ' },
  { colSpan: 1, vertical: true, title: 'Áp suất phễu tro ' },
  { colSpan: 1, vertical: true, title: 'Nhiệt độ phễu tro' },
  { colSpan: 1, vertical: true, title: 'Độ mở van hồi liệu' },
];

const row3 = [
  { colSpan: 1, title: 'h ' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: '%' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: '°C' },
  { colSpan: 1, title: '%' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: '°C' },
  { colSpan: 1, title: '%' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: '°C' },
  { colSpan: 1, title: '%' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: '°C' },
  { colSpan: 1, title: '%' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: 'ºC' },
  { colSpan: 1, title: '%' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: 'kPa' },
  { colSpan: 1, title: '°C' },
];

const BM2_LBKLH = ({ title, apiGet, apiExportExcel, turbineIndex }) => {
  const [data1, setData1] = useState(null);

  const [begind, setBegind] = useState('');
  const [endd, setEndd] = useState('');
  const fetchData_NoiHoi_LB_BM2 = async () => {
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
      let fileName = 'NoiHoi_LB9.xlsx';
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
    fetchData_NoiHoi_LB_BM2(begindValue, enddValue);
  };
  useEffect(() => {
    fetchData_NoiHoi_LB_BM2();
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
            className="table-fixed w-full text-[10px] "
            style={{
              borderCollapse: 'separate',
              borderSpacing: 0,
            }}
          >
            <colgroup>
              {Array.from({ length: 26 }).map((_, i) => (
                <col key={i} style={{ width: '71px' }} />
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
                      'sticky top-[50px] z-[70] bg-white px-2 text-center align-middle h-[100px] min-w-[60px] border border-gray-700',
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
                      'sticky top-[150px] py-1 text-[10px] h-[30px] font-semibold text-center bg-white',
                      'border border-gray-700 shadow-[inset_0_1px_0_#4b5563]',
                      index === 0 && 'left-0 z-[100] bg-yellow-400 w-[50px]'
                    )}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
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

export default BM2_LBKLH;
