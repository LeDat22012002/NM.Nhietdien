import icons from '../../ultils/icons';
import avatar from '../../assets/image/account.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { apiLogout } from '../../apis/user';
import { toast } from 'react-toastify';
import path from '../../ultils/path';
import { FaMessage } from 'react-icons/fa6';
import { FaBell } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';
import { navigation } from '../../ultils/contain';
import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentNav } from '../../store/currentNav/navSlice';
import { logout } from '../../store/user/userSlice';
const { IoMdMenu } = icons;
const Header = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowOption, setIsShowOption] = useState(false);
  const { current } = useSelector((state) => state.user);
  // console.log('daaa', refreshToken);
  const { currentNav } = useSelector((state) => state.nav);
  const handleLogout = async () => {
    dispatch(logout());
    navigate(`${path.LOGIN}`);
    toast.success('Logout thành công !');
  };
  const handleActive = (value) => {
    dispatch(setCurrentNav(value));
  };

  return (
    <div className="w-full bg-white h-[50px] flex justify-between items-center ">
      <div className="ml-2 cursor-pointer" onClick={onToggleSidebar}>
        <IoMdMenu size={25}></IoMdMenu>
      </div>
      <div className="flex items-center gap-2 px-4 py-2">
        {navigation.map((el) => (
          <button
            key={el.id}
            onClick={() => handleActive(el?.value)}
            className={clsx(
              'flex items-center gap-1 px-3 py-1.5 text-sm border rounded border-blue-600 transition',
              currentNav === el.value
                ? 'bg-blue-600 text-white'
                : 'text-blue-600 hover:bg-blue-100'
            )}
          >
            {el.value}
          </button>
        ))}
      </div>

      <div className="flex gap-4 mr-10 ">
        <div className="flex items-center gap-7 ">
          <span>
            <FaMessage color="black" />
          </span>
          <span>
            <FaBell color="black" />
          </span>
          <span>
            <IoIosSunny size={25} color="black" />
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
              {current?.hoTen || current?.maNv}
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
