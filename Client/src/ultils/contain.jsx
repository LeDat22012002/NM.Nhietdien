import icons from './icons';
import path from './path';
const {
  FaUser,
  RiProductHuntLine,
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
  TbHexagonNumber4,
  TbHexagonNumber5,
  TbHexagonNumber6,
  TbHexagonNumber7,
  TbHexagonNumber8,
  TbHexagonNumber9,
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
  TbCircleDashedNumber4,
  TbCircleDashedNumber5,
  TbCircleDashedNumber6,
  TbCircleDashedNumber7,
  TbCircleDashedNumber8,
  TbCircleDashedNumber9,
  IoRadioButtonOn,
} = icons;

// console.log('ddtdtd', current);
// console.log(typeof current?.role);
export const HomeSidebar = (current) => [
  // {
  //   id: 1,
  //   type: 'SINGLE',
  //   text: 'Thống kê',
  //   path: `/${path.LAYOUT}/${path.THONGKE}`,
  //   icon: <TbCircleNumber1Filled size={20} />,
  // },

  {
    id: 2,
    type: 'PARENT',
    text: 'TỔNG QUAN',
    icon: <TbCircleNumber1Filled size={20} />,
    submenu: [
      {
        text: 'Thống kê',
        icon: <TbHexagonNumber1 size={20} />,
        path: `/${path.LAYOUT}/${path.BM_10_QT_05_08}`,
      },
    ],
  },
  ...(current?.role === 4
    ? [
        {
          id: 3,
          type: 'PARENT',
          text: 'QUẢN TRỊ VIÊN',
          icon: <TbCircleNumber2Filled size={20} />,
          submenu: [
            {
              text: 'Tạo tài khoản',
              path: `/${path.LAYOUT}/${path.REGISTER}`,
              icon: <TbHexagonNumber1 size={20} />,
            },
            {
              text: 'Tài khoản đăng nhập',
              path: `/${path.LAYOUT}/${path.ALL_USERS}`,
              icon: <TbHexagonNumber2 size={20} />,
            },
            {
              text: 'Quyền đăng nhập',
              icon: <TbHexagonNumber3 size={20} />,
              path: `hehee`,
            },
          ],
        },
      ]
    : []),

  // ...(current?.role === 'Admin'
  //   ? [
  //       {
  //         id: 3,
  //         type: 'PARENT',
  //         text: 'QUẢN TRỊ VIÊN',
  //         icon: <TbCircleNumber3Filled size={20} />,
  //         submenu: [
  //           {
  //             text: 'Tạo tài khoản',
  //             path: `/${path.LAYOUT}/${path.REGISTER}`,
  //             icon: <TbHexagonNumber1 size={20} />,
  //           },
  //           {
  //             text: 'Quyền đăng nhập',
  //             icon: <TbHexagonNumber2 size={20} />,
  //             path: `hehee`,
  //           },
  //         ],
  //       },
  //     ]
  //   : []),
];

export const navigation = [
  {
    id: 1,
    value: 'Home',
    path: `/${path.LAYOUT}`,
  },
  {
    id: 2,
    value: 'Trạm 110kV HPDQ1',
    path: `/${path.LAYOUT}`,
  },
  {
    id: 3,
    value: 'Trạm nén khí Nhiệt độ',
    path: `/${path.LAYOUT}`,
  },
  {
    id: 4,
    value: 'Trạm xử lí nước',
    path: `/${path.LAYOUT}`,
  },
  {
    id: 5,
    value: 'Xưởng nồi hơi lọc bụi',
    path: `/${path.LAYOUT}`,
  },
  {
    id: 6,
    value: 'Xưởng Tuabin,máy phát',
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
    type: 'PARENT',
    text: 'DỮ LIỆU VẬN HÀNH',
    icon: <TbCircleNumber1Filled size={20} />,
    submenu: [
      {
        text: 'Nồi hơi,lọc bụi ',
        icon: <TbHexagonNumber1 size={20} />,
        children: [
          {
            text: 'Nồi hơi lọc bụi 1',
            icon: <TbCircleNumber1Filled size={20} />,
            path: '/Mayphat/BM',
          },
          {
            text: 'Nồi hơi lọc bụi 2',
            icon: <TbCircleNumber2Filled size={20} />,
            path: '/Mayphat/BM',
          },
        ],
      },
      {
        text: 'Nồi hơi CDQ',
        icon: <TbHexagonNumber2 size={20} />,
        children: [
          {
            text: 'Nồi hơi CDQ 1',
            icon: <TbCircleNumber1Filled size={20} />,
            path: '/lo-cao-2/cam-bien',
          },
          {
            text: 'Nồi hơi CDQ 2',
            icon: <TbCircleNumber2Filled size={20} />,
            path: `hhehe`,
          },
          {
            text: 'Nồi hơi CDQ 3',
            icon: <TbCircleNumber3Filled size={20} />,
            path: `hhehe`,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'PARENT',
    text: 'NHẬT KÍ VẬN HÀNH',
    icon: <TbCircleNumber2Filled size={20} />,
    submenu: [
      {
        text: 'Nồi hơi,lọc bụi 1 ',
        icon: <TbHexagonNumber1 size={20} />,
        children: [
          {
            text: 'Nồi hơi nhiệt dư 1',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.14-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Lọc bụi khu lưu huỳnh 1',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.15-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Quạt hút nồi hơi nhiệt dư 1',
            icon: <TbCircleDashedNumber3 size={20} />,
            children: [
              {
                text: 'BM.16-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Nồi hơi lọc bụi 2',
        icon: <TbHexagonNumber2 size={20} />,
        children: [
          {
            text: 'Nồi hơi nhiệt dư 2',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.14-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Lọc bụi khu lưu huỳnh 2',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.15-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Quạt hút nồi hơi nhiệt dư 2',
            icon: <TbCircleDashedNumber3 size={20} />,
            children: [
              {
                text: 'BM.16-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Nồi hơi lọc bụi 3',
        icon: <TbHexagonNumber3 size={20} />,
        children: [
          {
            text: 'Nồi hơi nhiệt dư 3',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.14-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Lọc bụi khu lưu huỳnh 3',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.15-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Quạt hút nồi hơi nhiệt dư 3',
            icon: <TbCircleDashedNumber3 size={20} />,
            children: [
              {
                text: 'BM.16-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Nồi hơi lọc bụi 4',
        icon: <TbHexagonNumber4 size={20} />,
        children: [
          {
            text: 'Nồi hơi nhiệt dư 4',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.14-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Lọc bụi khu lưu huỳnh 4',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.15-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Quạt hút nồi hơi nhiệt dư 4',
            icon: <TbCircleDashedNumber3 size={20} />,
            children: [
              {
                text: 'BM.16-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Nồi hơi lọc bụi 5',
        icon: <TbHexagonNumber5 size={20} />,
        children: [
          {
            text: 'Nồi hơi nhiệt dư 5',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.14-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Lọc bụi khu lưu huỳnh 5',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.15-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Quạt hút nồi hơi nhiệt dư 5',
            icon: <TbCircleDashedNumber3 size={20} />,
            children: [
              {
                text: 'BM.16-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Nồi hơi lọc bụi 6',
        icon: <TbHexagonNumber6 size={20} />,
        children: [
          {
            text: 'Nồi hơi nhiệt dư 6',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.14-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Lọc bụi khu lưu huỳnh 6',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.15-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Quạt hút nồi hơi nhiệt dư 6',
            icon: <TbCircleDashedNumber3 size={20} />,
            children: [
              {
                text: 'BM.16-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
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
    type: 'PARENT',
    text: 'DỮ LIỆU VẬN HÀNH',
    icon: <TbCircleNumber1Filled size={20} />,
    submenu: [
      {
        text: 'Tuabin, máy phát',
        icon: <TbHexagonNumber1 size={20} />,
        children: [
          {
            text: 'Tuabin, máy phát 1',
            icon: <TbCircleNumber1Filled size={20} />,
            path: '/Mayphat/BM',
          },
          {
            text: 'Tuabin, máy phát 2',
            icon: <TbCircleNumber2Filled size={20} />,
            path: '/Mayphat/BM',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'PARENT',
    text: 'NHẬT KÍ VẬN HÀNH',
    icon: <TbCircleNumber2Filled size={20} />,
    submenu: [
      {
        text: 'Tuabin, máy phát 1 ',
        icon: <TbHexagonNumber1 size={20} />,
        children: [
          {
            text: 'Turbine 1',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.09-QT.05.08',
                path: '/Mayphat/BM/log1',
                icon: <IoRadioButtonOn size={16} />,
              },
              {
                text: 'BM.10-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={16} />,
              },
              {
                text: 'BM.11-QT.05.08',
                path: `/${path.LAYOUT}/${path.BM_11_QT_05_08}`,
                icon: <IoRadioButtonOn size={16} />,
              },
            ],
          },
          {
            text: 'Máy phát 1',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.12-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={16} />,
              },
              {
                text: 'BM.13-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={16} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Tuabin,máy phát 2',
        icon: <TbHexagonNumber2 size={20} />,
        children: [
          {
            text: 'Turbine 2',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.09-QT.05.08',
                path: '/Mayphat/BM/log1',
                icon: <IoRadioButtonOn size={16} />,
              },
              {
                text: 'BM.10-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={16} />,
              },
              {
                text: 'BM.11-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={16} />,
              },
            ],
          },
          {
            text: 'Máy phát 2',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.12-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
              {
                text: 'BM.13-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Tuabin,máy phát 3',
        icon: <TbHexagonNumber3 size={20} />,
        children: [
          {
            text: 'Turbine 3',
            icon: <TbCircleDashedNumber1 size={20} />,
            children: [
              {
                text: 'BM.09-QT.05.08',
                path: '/Mayphat/BM/log1',
                icon: <IoRadioButtonOn size={20} />,
              },
              {
                text: 'BM.10-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
              {
                text: 'BM.11-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
          {
            text: 'Máy phát 3',
            icon: <TbCircleDashedNumber2 size={20} />,
            children: [
              {
                text: 'BM.12-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
              {
                text: 'BM.13-QT.05.08',
                path: '/Mayphat/BM/log2',
                icon: <IoRadioButtonOn size={20} />,
              },
            ],
          },
        ],
      },
      {
        text: 'Tuabin,máy phát 4',
        icon: <TbHexagonNumber4 size={20} />,
        children: [
          {
            text: 'Turbine 4',
            icon: <TbCircleDashedNumber1 size={20} />,
            path: '/Mayphat/BM',
          },
          {
            text: 'Máy phát 4',
            icon: <TbCircleDashedNumber2 size={20} />,
            path: '/Mayphat/BM',
          },
        ],
      },
      {
        text: 'Tuabin,máy phát 5',
        icon: <TbHexagonNumber5 size={20} />,
        children: [
          {
            text: 'Turbine 5',
            icon: <TbCircleDashedNumber1 size={20} />,
            path: '/Mayphat/BM',
          },
          {
            text: 'Máy phát 5',
            icon: <TbCircleDashedNumber2 size={20} />,
            path: '/Mayphat/BM',
          },
        ],
      },
    ],
  },
];
