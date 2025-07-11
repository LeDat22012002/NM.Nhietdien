import { useEffect, useState } from 'react';
import { apigetAllUser } from '../../../apis';
import icons from '../../../ultils/icons';

const { ImBin, FaRegEdit } = icons;
const Alluser = () => {
  const [users, setUsers] = useState(null);
  //   const [editUser, setEdituser] = useState(null);
  const fetchapiUsers = async () => {
    const response = await apigetAllUser();
    // console.log('Allusuer', response);
    if (response?.status) {
      setUsers(response?.data);
    }
  };

  useEffect(() => {
    fetchapiUsers();
  }, []);

  return (
    <div className="w-full">
      <table className="w-full overflow-hidden text-left border-collapse rounded-lg shadow-md">
        <thead className="text-sm text-white uppercase bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-center">STT</th>
            <th className="px-4 py-2 ">Mã nhân viên</th>
            <th className="px-4 py-2 ">Họ và tên</th>
            <th className="px-4 py-2 ">Tên đăng nhập</th>
            <th className="px-4 py-2 ">Phòng ban</th>
            <th className="px-4 py-2 ">Quyền đăng nhập</th>
            <th className="px-4 py-2 text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {users?.map((el, index) => (
            <tr key={index} className="transition hover:bg-gray-100">
              <td className="px-4 py-3 text-center ">{index + 1}</td>
              <td className="px-4 py-3 w-[200px]">
                <span>{el?.maNV}</span>
              </td>
              <td className="px-4 py-3 w-[200px]">
                <span>{el?.hoTen}</span>
              </td>
              <td className="px-4 py-3 w-[200px]">
                <span>{el?.tenDangNhap}</span>
              </td>
              <td className="px-4 py-3 w-[300px]">
                <span>{el?.tenPB}</span>
              </td>
              <td className="px-4 py-3 w-[200px]">
                <span>{el?.tenQuyen}</span>
              </td>

              <td className="px-4 py-3 space-x-2 text-center ">
                <div className="flex items-center justify-center gap-2">
                  <span
                    // onClick={() => setEdituser(el)}
                    className="text-blue-500 cursor-pointer hover:underline hover:text-blue-900"
                  >
                    <FaRegEdit size={20} />
                  </span>

                  <span
                    // onClick={() =>
                    //     handleDeleteBrand(el?._id)
                    // }
                    className="text-red-500 cursor-pointer hover:underline hover:text-red-900 "
                  >
                    <ImBin size={20} />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
