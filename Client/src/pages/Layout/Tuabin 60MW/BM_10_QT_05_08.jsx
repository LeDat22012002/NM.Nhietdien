import logo from "../../../assets/image/Logo.png";
import { ImFileExcel } from "react-icons/im";
const BM_10_QT_05_08 = () => {
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
          <button className="px-4 py-2 flex items-center gap-1 text-[14px] text-white font-semibold transition duration-200 bg-green-800 rounded hover:bg-green-900">
            <ImFileExcel />
            <span> Xuất Excel</span>
          </button>
        </div>
      </div>
      <div className="text-center ">
        <h2 className="text-lg font-bold">
          NHẬT KÝ VẬN HÀNH TURBINE ... - 60MW - BIỂU MẪU 2
        </h2>
      </div>
      <div className="max-w-full overflow-x-auto border border-gray-300 rounded scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="w-[1000px]">
          <table className="border border-collapse border-gray-400">
            <colgroup>
              {Array.from({ length: 52 }).map((_, i) => (
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
                  colSpan={29}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Hệ thống thiết bị đo trong thân turbine
                </th>
                <th
                  colSpan={10}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Hệ thống nước ngưng và bình ngưng
                </th>
                <th
                  colSpan={5}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Hệ thống bơm chân không
                </th>
                <th
                  colSpan={4}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                ></th>
              </tr>
              <tr>
                <th
                  colSpan={2}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Dịch trục
                </th>
                <th
                  colSpan={3}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Giãn nở
                </th>
                <th
                  colSpan={9}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Độ rung
                </th>
                <th
                  colSpan={6}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Nhiệt độ dầu hồi
                </th>
                <th
                  colSpan={9}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Nhiệt độ bạc đỡ, bạc chặn
                </th>
                <th
                  colSpan={5}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Bơm nước ngưng
                </th>
                <th
                  colSpan={5}
                  className="px-2 py-2 text-[14px] font-bold text-center border border-gray-700"
                >
                  Hệ thống bình ngưng
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  rowSpan={2}
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
              </tr>
              <tr>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold  text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700"
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center border border-gray-700 "
                >
                  Tiêu đề lớn1 - chiếm 1 cột
                </th>
              </tr>
              <tr>
                <th
                  colSpan={4}
                  className=" py-2 text-[10px] font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>

                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>

                <th
                  colSpan={1}
                  className="px-2 py-2 text-[10px]  font-semibold text-center border border-gray-700 "
                >
                  a
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BM_10_QT_05_08;
