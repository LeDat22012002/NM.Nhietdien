import icons from "../../ultils/icons";
import avatar from "../../assets/image/account.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiLogout } from "../../apis/user";
import { toast } from "react-toastify";
import path from "../../ultils/path";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
const { IoMdMenu } = icons;
const Header = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const [isShowOption, setIsShowOption] = useState(false);
  const curentUser = JSON.parse(localStorage.getItem("userInfo"));
  const refreshToken = localStorage.getItem("refreshToken");

  const handleLogout = async () => {
    const rs = await apiLogout(refreshToken);
    if (rs?.status) {
      toast.success(rs?.message);
      localStorage.clear();
      navigate(`${path.LOGIN}`);
    } else {
      toast.error("Đã có lỗi xảy ra!");
    }
  };

  return (
    <div className="w-full bg-cyan-600 h-[50px] flex justify-between items-center ">
      <div className="ml-2 cursor-pointer" onClick={onToggleSidebar}>
        <IoMdMenu size={25}></IoMdMenu>
      </div>
      <div className="flex gap-4 mr-10 ">
        <div className="flex items-center gap-7 ">
          <span>
            <FaMessage color="white" />
          </span>
          <span>
            <FaBell color="white" />
          </span>
          <span>
            <IoIosSunny size={25} color="white" />
          </span>
        </div>
        <div className="flex items-center gap-1 ">
          <div
            id="profile"
            onClick={() => {
              setIsShowOption((prev) => !prev);
            }}
            className="relative items-center justify-center  gap-2 px-3 cursor-pointer flex  w-auto h-[50px] rounded-sm shadow-amber-50 "
          >
            <img
              src={avatar}
              alt="avatar"
              className="w-[30px] h-[30px] rounded-full object-cover"
            />

            <span className="hidden text-[14px] sm:block">
              {curentUser?.userName || curentUser?.maNv}
            </span>

            {isShowOption && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute z-50 w-[160px] top-12 bg-white border border-gray-200 shadow-lg  right-1 rounded-sm text-sm"
              >
                <Link
                  // to={`/${path.MEMBER}/${path.PERSONAL}`}
                  className="block px-4 py-2 text-gray-700 no-underline hover:bg-sky-100"
                >
                  Personal
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
