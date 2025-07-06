import icons from "./icons";
import path from "./path";
const { MdDashboardCustomize, RiProductHuntLine } = icons;

// const current = JSON.parse(localStorage.getItem("userInfo"));

export const adminSidebar = (current) => [
  {
    id: 1,
    type: "SINGLE",
    text: "Thống kê",
    path: `/${path.LAYOUT}/${path.THONGKE}`,
    icon: <MdDashboardCustomize size={20} />,
  },

  {
    id: 2,
    type: "PARENT",
    text: "NHẬT KÍ VẬN HÀNH",
    icon: <RiProductHuntLine size={20} />,
    submenu: [
      {
        text: "Máy phát",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "BM.12/QT.05.08",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "BM.13/QT.05.08",
            path: "/Mayphat/BM",
          },
        ],
      },
      {
        text: "Trạm nén khí NM.Nhiệt Điện",
        children: [
          {
            text: "BM.29/QT.05.08",
            path: "/lo-cao-2/cam-bien",
          },
          {
            text: "BM.30/QT.05.08",
            path: `hhehe`,
          },
        ],
      },
      {
        text: "Tuabin 60MW",
        children: [
          {
            text: "BM.09/QT.05.08",
            path: "/lo-cao-2/cam-bien",
          },
          {
            text: "BM.10/QT.05.08",
            path: `/${path.LAYOUT}/${path.BM_10_QT_05_08}`,
          },
          {
            text: "BM.11/QT.05.08",
            path: `/${path.LAYOUT}/${path.BM_11_QT_05_08}`,
          },
        ],
      },
    ],
  },

  ...(current?.role === "Admin"
    ? [
        {
          id: 3,
          type: "PARENT",
          text: "QUẢN TRỊ VIÊN",
          icon: <RiProductHuntLine size={20} />,
          submenu: [
            {
              text: "Tạo tài khoản",
              path: `/${path.LAYOUT}/${path.REGISTER}`,
            },
            {
              text: "Phân quyền tài khoản",
              path: `hehee`,
            },
          ],
        },
      ]
    : []),
];
