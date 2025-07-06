import { useEffect, useState } from "react";
import moment from "moment";
import { apigetAllTuabin1 } from "../../../apis";
import logo from "../../../assets/image/Logo.png";

const BM_11_QT_05_08 = () => {
  const [data1, setData1] = useState(null);

  const fetchDataBM_1 = async () => {
    const reponse = await apigetAllTuabin1();

    if (reponse.status) {
      const data1 = reponse?.data;
      const grouped = {};
      data1.forEach((item) => {
        const hourKey = moment(item?.thoiGian).format("YYYY-MM-DD HH:00");
        if (!grouped[hourKey]) {
          grouped[hourKey] = { thoiGian: hourKey };
        }
        // Gán thêm key là tagname và value vào {} con của grouped
        grouped[hourKey][item?.tagName] = item?.value;
      });
      // chuyển sang thành mảng gồm các value
      const result = Object.values(grouped);
      setData1(result);
    }
  };
  // lấy ra các Tagname là duy nhất
  const uniqueTagNames = [
    ...new Set(
      data1?.flatMap((item) =>
        Object.keys(item).filter((key) => key !== "thoiGian")
      )
    ),
  ];
  useEffect(() => {
    fetchDataBM_1();
  }, []);
  return (
    <div className="space-y-4 ">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-[200px] object-cover"></img>
          <div className="flex flex-col text-sm font-semibold">
            <h6>CÔNG TY CỔ PHẦN THÉP</h6>
            <h6> HÒA PHÁT DUNG QUẤT</h6>
          </div>
        </div>
        <div>
          <button className="px-4 py-2 text-sm font-semibold text-white transition bg-green-600 rounded hover:bg-green-700">
            Xuất Excel
          </button>
        </div>
      </div>
      <div className="flex gap-4   h-[50px] items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <label className="text-sm font-medium text-gray-700">Từ</label>
            <div className="flex items-center space-x-2">
              {/* Chọn ngày */}
              <input
                type="date"
                className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none "
              />

              {/* Chọn giờ */}
              <input
                type="time"
                className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <label className="text-sm font-medium text-gray-700">Đến</label>
            <div className="flex items-center space-x-2">
              {/* Chọn ngày */}
              <input
                type="date"
                className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none "
              />

              {/* Chọn giờ */}
              <input
                type="time"
                className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="px-3 py-2 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold">
          NHẬT KÝ VẬN HÀNH TURBINE ... - 60MW - BIỂU MẪU 3
        </h2>
      </div>
      <div className="max-w-full overflow-x-auto overflow-y-auto border border-gray-300 rounded scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="w-[1000px] h-[400px]">
          <table className="border border-collapse border-gray-400 ">
            <colgroup>
              {Array.from({ length: 55 }).map((_, i) => (
                <col key={i} style={{ width: "20px" }} />
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
              <tr>
                <th
                  colSpan={1}
                  className="py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
              </tr>
              <tr>
                <th
                  colSpan={4}
                  className=" py-2 px-2 text-[10px] text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>

                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>

                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className=" py-2 px-2 text-[10px]  text-center border border-gray-700 "
                >
                  a
                </th>
              </tr>
              <tr>
                <th
                  colSpan={4}
                  className="py-2 px-2 text-[10px] text-center border border-gray-700"
                >
                  TT
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
                    {moment(row?.thoiGian).format("HH:mm")}
                  </td>
                  {uniqueTagNames?.map((tagname) => (
                    <td
                      key={tagname}
                      className="border text-[10px] text-center border-gray-700"
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

export default BM_11_QT_05_08;
