import { memo, useEffect, useState } from 'react';
import logo from '../../../assets/image/Logo.png';
import { ImFileExcel } from 'react-icons/im';
import FilterTime from '../../FilterTime/FilterTime';
import moment from 'moment';
import { toast } from 'react-toastify';
import clsx from 'clsx';

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
  { colSpan: 23, title: 'Turbine' },
  { colSpan: 10, title: 'Cửa trích và bộ gia nhiệt hạ áp' },

  { colSpan: 4, rowSpan: 2, title: 'Dầu EH' },
  { colSpan: 6, rowSpan: 2, title: 'Dầu bôi trơn' },
  { colSpan: 2, rowSpan: 2, title: 'Áp suất dầu' },

  //   { colSpan: 4, title: '' },
];

const row2 = [
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Công suất phát',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tốc độ quay',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Lưu lượng hơi chính ',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 2,
    title: '% van điều tiết',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'P hơi chính ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº hơi chính',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº bu lông hơi chính',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº thân van hơi chính ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº sau van hơi chính',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'P sau tầng cánh số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº sau tầng cánh số 1 ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº bình cân bằng áp',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'P bình cân bằng áp',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº bịt trục sau',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº phía trong thân trên turbine <br/> tầng cánh số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº phía trong thân dưới turbine <br/> tầng cánh số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº phía ngoài thân trên turbine <br/> tầng cánh số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº phía ngoài thân dưới turbine <br/> tầng cánh số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº phía trong thân trên turbine <br/> mặt bích tầng cánh số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº phía ngoài thân trên turbine <br/> mặt bích tầng cánh số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº bu lông thân turbine max',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Tº hơi thoát sau turbine',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    title: 'Chân không bình ngưng min',
    vertical: true,
  },

  {
    colSpan: 2,
    rowSpan: 1,
    title: 'Cửa trích hơi số 1',
    vertical: false,
  },
  {
    colSpan: 2,
    rowSpan: 1,
    title: 'Cửa trích hơi số 2',
    vertical: false,
  },
  {
    colSpan: 2,
    rowSpan: 1,
    title: 'Cửa trích hơi số 3',
    vertical: false,
  },
  {
    colSpan: 2,
    rowSpan: 1,
    title: 'Gia nhiệt hạ áp số 1',
    vertical: false,
  },
  {
    colSpan: 2,
    rowSpan: 1,
    title: 'Gia nhiệt hạ áp số 2',
    vertical: false,
  },
];

const row3 = [
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Áp suất ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Nhiệt độ',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº hơi nóng vào',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº nước ra',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº hơi nóng vào',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº nước ra',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'I bơm dầu EH 1  ',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'I bơm dầu EH 2',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'P dầu EH',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Mức dầu EH',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Mức dầu ',
    vertical: true,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    title: 'P dầu vào bộ làm mát dầu',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº dầu vào bộ làm mát số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº dầu ra bộ làm mát số 1',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº dầu vào bộ làm mát số 2',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'Tº dầu ra làm mát số 2',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'P dầu bôi trơn',
    vertical: true,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    title: 'P dầu an toàn ASP',
    vertical: true,
  },
];

const row4 = [
  { title: 'h', colSpan: 1 },
  { title: 'MW', colSpan: 1 },
  { title: 'V/P', colSpan: 1 },
  { title: 'T/H', colSpan: 1 },
  { title: '%', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'KPa', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'A', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'mm', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'ºC', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
  { title: 'MPa', colSpan: 1 },
];
const BM1 = ({ title, apiGet, turbineIndex, apiExportExcel }) => {
  const [data1, setData1] = useState(null);

  const [begind, setBegind] = useState('');
  const [endd, setEndd] = useState('');

  const fetchData_TB_BM1 = async () => {
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
    fetchData_TB_BM1(begindValue, enddValue);
  };
  const uniqueTagNames = Object.keys(data1?.[0] || {}).filter((key) =>
    key.startsWith('tag')
  );
  useEffect(() => {
    fetchData_TB_BM1();
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
              {Array.from({ length: 46 }).map((_, i) => (
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
                      'sticky top-[310px] z-[50] bg-white px-1 py-1 text-center align-middle h-[40px] min-w-[60px] border border-gray-700 text-[10px] font-semibold',
                      index === 0 && 'left-0 z-[60] bg-yellow-300'
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

export default memo(BM1);
