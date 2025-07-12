import { memo, useEffect, useState } from 'react';
import moment from 'moment';
// import { apiExportExcelTB3, apigetDataTB3 } from '../../../apis';
import logo from '../../../assets/image/Logo.png';
import { FilterTime } from '../../../components';
import { toast } from 'react-toastify';

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
            className="px-4 py-2 text-sm font-semibold text-white transition bg-green-600 rounded hover:bg-green-700"
            onClick={handleExportExcel}
          >
            Xuất Excel
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
        <div className="w-[1000px] h-[600px]">
          <table className="border border-collapse border-gray-400 ">
            <colgroup>
              {Array.from({ length: 55 }).map((_, i) => (
                <col key={i} style={{ width: '20px' }} />
              ))}
            </colgroup>
            <thead className="text-sm text-gray-700 border border-gray-700">
              <tr>
                <th
                  colSpan={4}
                  rowSpan={3}
                  className="px-1 py-2 text-center align-middle border border-gray-700 "
                >
                  <div className="flex flex-col items-center font-bold justify-between h-[200px] text-[14px]">
                    <span>Hạng mục</span>
                    <span>Trị số</span>
                  </div>
                </th>
                <th
                  colSpan={24}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm cấp nước
                </th>
                <th
                  colSpan={3}
                  rowSpan={2}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bình tách oxy
                </th>
                <th
                  colSpan={12}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm nước tuần hoàn
                </th>
                <th
                  colSpan={12}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Tháp làm mát
                </th>
              </tr>
              <tr>
                <th
                  colSpan={12}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm cấp nước số...
                </th>
                <th
                  colSpan={12}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm cấp nước số...
                </th>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm tuần hoàn số...
                </th>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm tuần hoàn số...
                </th>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm tuần hoàn số...
                </th>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Quạt số
                </th>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Quạt số
                </th>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Quạt số
                </th>
              </tr>
              <tr className="text-black">
                <th
                  colSpan={1}
                  className="py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  I động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối trước động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối sau động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối trước bơm
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối sau bơm
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº dầu làm mát gối trục
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  P dầu làm mát gối trục
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Độ rung ổ trục trước max
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Độ rung ổ trục sau max
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº cuộn dây max 1
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº cuộn dây max 2
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Mức dầu
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  I động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối trước động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối sau động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối trước bơm
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº gối sau bơm
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tº dầu làm mát gối trục
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  P dầu làm mát gối trục
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Độ rung ổ trục trước max
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Độ rung ổ trục sau max
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº cuộn dây max 1
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº cuộn dây max2
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Mức dầu
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Nhiệt độ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Mức nước
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Áp suất
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  I động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº gối động cơ trước
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº gối động cơ sau
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº cuộn dây max
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  I động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº gối động cơ trước
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº gối động cơ sau
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº cuộn dây max
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  I động cơ
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº gối động cơ trước
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº gối động cơ sau
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº cuộn dây max
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Dòng điện
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Độ rung
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº dầu hộp giảm tốc
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  L dầu hộp giảm tốc
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Dòng điện
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Độ rung
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº dầu hộp giảm tốc
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  L dầu hộp giảm tốc
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Dòng điện
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Độ rung
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tº dầu hộp giảm tốc
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  L dầu hộp giảm tốc
                </th>
              </tr>
              <tr>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[10px] text-center border border-gray-700 "
                >
                  h
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  MPa
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm/s
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm/s
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  MPa
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm/s
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm/s
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  MPa
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm/s
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm
                </th>

                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm/s
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm
                </th>

                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  A
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm/s
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  ºC
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  mm
                </th>
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
            <tbody className="text-sm text-gray-700 border border-gray-700">
              {data1?.map((row, index) => (
                <tr key={index}>
                  <td
                    colSpan={4}
                    className="border text-[10px] text-center font-bold border-gray-700"
                  >
                    {moment(row?.thoiGian).format('HH:mm')}
                  </td>
                  {uniqueTagNames?.map((tagname) => (
                    <td
                      key={tagname}
                      className="border text-black px-4 text-[10px] text-center border-gray-700"
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
