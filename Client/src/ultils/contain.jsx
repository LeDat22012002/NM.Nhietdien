import icons from "./icons";
import path from "./path";
const { MdDashboardCustomize, RiProductHuntLine , TbCircleNumber1Filled ,TbCircleNumber2Filled ,TbCircleNumber3Filled} = icons;

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

export const navigation = [
    {
        id: 1,
        value: 'Home',
        path: `/${path.LAYOUT}`,
    },
    {
        id: 2,
        value: 'T.110kV',
        path: `/${path.LAYOUT}`,
    },
    {
        id: 3,
        value: 'T.nén khí Nhiệt độ',
        path: `/${path.LAYOUT}`,
    },
    {
        id: 4,
        value: 'T.xử lí nước',
        path: `/${path.LAYOUT}`,
    },
    {
        id: 5,
        value: 'X.nồi hơi lọc bụi',
        path: `/${path.LAYOUT}`,
    },
    {
        id: 6,
        value: 'X.Tuabin,máy phát',
        path: `/${path.LAYOUT}`,
    },
    // {
    //     id: 6,
    //     value: 'FAQs',
    //     path: `/${path.FAQ}`,
    // },
];


export const NHLBSidebar = () => [
  // {
  //   id: 1,
  //   type: "SINGLE",
  //   text: "Thống kê",
  //   path: `/${path.LAYOUT}/${path.THONGKE}`,
  //   icon: <MdDashboardCustomize size={20} />,
  // },

  {
    id: 2,
    type: "PARENT",
    text: "DỮ LIỆU VẬN HÀNH",
    icon: <TbCircleNumber1Filled size={20} />,
    submenu: [
      {
        text: "Nồi hơi,lọc bụi ",
        icon: <TbCircleNumber1Filled size={20} />,
        children: [
          {
            text: "Nồi hơi lọc bụi 1",
            icon: <TbCircleNumber1Filled size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Nồi hơi lọc bụi 2",
            icon: <TbCircleNumber2Filled size={20}/>,
            path: "/Mayphat/BM",
          },
        ],
      },
      {
        text: "Nồi hơi CDQ",
        icon:<TbCircleNumber2Filled size={20}/>,
        children: [
          {
            text: "Nồi hơi CDQ 1",
            icon: <TbCircleNumber1Filled size={20} />,
            path: "/lo-cao-2/cam-bien",
          },
          {
            text: "Nồi hơi CDQ 2",
            icon: <TbCircleNumber2Filled size={20}/>,
            path: `hhehe`,
          },
          {
            text: "Nồi hơi CDQ 3",
            icon: <TbCircleNumber3Filled size={20}/>,
            path: `hhehe`,
          },
        ],
      },
      
    ],
  },
  {
    id: 3,
    type: "PARENT",
    text: "NHẬT KÍ VẬN HÀNH",
    icon: <TbCircleNumber2Filled size={20} />,
    submenu: [
      {
        text: "Nồi hơi,lọc bụi 1 ",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Nồi hơi nhiệt dư 1",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Lọc bụi khu lưu huỳnh 1",
            path: "/Mayphat/BM",
          },
          {
            text: "Quạt hút nồi hơi nhiệt dư 1",
            path: "/Mayphat/BM",
          },
        ],
      },
      {
        text: "Nồi hơi lọc bụi 2",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Nồi hơi nhiệt dư 2",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Lọc bụi khu lưu huỳnh 2",
            path: "/Mayphat/BM",
          },
          {
            text: "Quạt hút nồi hơi nhiệt dư 2",
            path: "/Mayphat/BM",
          },
        ],
      },
      {
        text: "Nồi hơi lọc bụi 3",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Nồi hơi nhiệt dư 3",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Lọc bụi khu lưu huỳnh 3",
            path: "/Mayphat/BM",
          },
          {
            text: "Quạt hút nồi hơi nhiệt dư 3",
            path: "/Mayphat/BM",
          },
        ],
      },
      {
        text: "Nồi hơi lọc bụi 4",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Nồi hơi nhiệt dư 4",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Lọc bụi khu lưu huỳnh 4",
            path: "/Mayphat/BM",
          },
          {
            text: "Quạt hút nồi hơi nhiệt dư 4",
            path: "/Mayphat/BM",
          },
        ],
      },
      {
        text: "Nồi hơi lọc bụi 5",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Nồi hơi nhiệt dư 5",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Lọc bụi khu lưu huỳnh 5",
            path: "/Mayphat/BM",
          },
          {
            text: "Quạt hút nồi hơi nhiệt dư 5",
            path: "/Mayphat/BM",
          },
        ],
      },
    ],
  },

  
];
export const TBMPSidebar = () => [
  // {
  //   id: 1,
  //   type: "SINGLE",
  //   text: "Thống kê",
  //   path: `/${path.LAYOUT}/${path.THONGKE}`,
  //   icon: <MdDashboardCustomize size={20} />,
  // },

  {
    id: 2,
    type: "PARENT",
    text: "DỮ LIỆU VẬN HÀNH",
    icon: <TbCircleNumber1Filled size={20} />,
    submenu: [
      {
        text: "Tuabin, máy phát",
        icon: <TbCircleNumber1Filled size={20} />,
        children: [
          {
            text: "Tuabin, máy phát 1",
            icon: <TbCircleNumber1Filled size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Tuabin, máy phát 2",
            icon: <TbCircleNumber2Filled size={20}/>,
            path: "/Mayphat/BM",
          },
        ],
      },
      
      
    ],
  },
  {
    id: 3,
    type: "PARENT",
    text: "NHẬT KÍ VẬN HÀNH",
    icon: <TbCircleNumber2Filled size={20} />,
    submenu: [
      {
        text: "Tuabin, máy phát 1 ",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Turbine 1",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Máy phát 1",
             icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          
        ],
      },
      {
        text: "Tuabin,máy phát 2",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Turbine 2",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Máy phát 2",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          
        ],
      },
      {
        text: "Tuabin,máy phát 3",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Turbine 3",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Máy phát 3",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          
        ],
      },
      {
        text: "Tuabin,máy phát 4",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Turbine 4",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Máy phát 4",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
        ],
      },
      {
        text: "Tuabin,máy phát 5",
        icon: <MdDashboardCustomize size={20} />,
        children: [
          {
            text: "Turbine 5",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
          {
            text: "Máy phát 5",
            icon: <RiProductHuntLine size={20} />,
            path: "/Mayphat/BM",
          },
        ],
      },
    ],
  },

  
];

