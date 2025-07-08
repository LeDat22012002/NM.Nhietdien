import { Fragment, memo, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { adminSidebar, NHLBSidebar , TBMPSidebar } from "../../ultils/contain";
import clsx from "clsx";
import icons from "../../ultils/icons";
import logo from "../../assets/image/Logo.png";
const { FaSortDown, FaCaretRight } = icons;

const Sidebar = ({ isMini, onExpand, currentNav }) => {
  const current = JSON.parse(localStorage.getItem("userInfo"));

  
  const sidebarItems = useMemo(() => {
    if (currentNav === "X.nồi hơi lọc bụi") return NHLBSidebar();
    if (currentNav === "X.Tuabin,máy phát") return TBMPSidebar();
    return adminSidebar(current);
  }, [currentNav]);

  const [actived, setActived] = useState([]);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleShowTabs = (tabID) => {
    setActived((prev) =>
      prev.includes(tabID) ? prev.filter((el) => el !== tabID) : [...prev, tabID]
    );
  };

  const ActiveStyle = "bg-gray-200 text-blue-600 no-underline";
  const NotActiveStyle = "hover:bg-gray-100 text-gray-800 no-underline";

  return (
    <div className="flex flex-col h-screen overflow-y-auto bg-white border-r border-gray-200">
      {/* Logo */}
      <div className={clsx("flex items-center justify-center", "h-[100px]")}>
        {!isMini && (
          <img src={logo} alt="logo" className="w-[180px] object-contain pb-[50px]" />
        )}
      </div>

      {/* Menu */}
      <div className="flex flex-col flex-1 space-y-1">
        {sidebarItems.map((el) => (
          <Fragment key={el.id}>
            {/* SINGLE */}
            {el.type === "SINGLE" && (
              <NavLink
                to={el.path}
                onClick={() => isMini && onExpand()}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center py-3 transition-all no-underline",
                    isMini ? "justify-center px-0" : "gap-2 px-4",
                    isActive ? ActiveStyle : NotActiveStyle
                  )
                }
              >
                <span className="text-[20px]">{el.icon}</span>
                {!isMini && <span className="text-sm">{el.text}</span>}
              </NavLink>
            )}

            {/* PARENT */}
            {el.type === "PARENT" && (
              <div
                onClick={() => {
                  if (isMini) onExpand();
                  else handleShowTabs(+el.id);
                }}
                className="transition-all cursor-pointer"
              >
                <div
                  className={clsx(
                    "flex items-center py-3 hover:bg-gray-100",
                    isMini ? "justify-center px-0" : "justify-between px-4"
                  )}
                >
                  <div
                    className={clsx(
                      "flex items-center",
                      isMini ? "justify-center" : "gap-2"
                    )}
                  >
                    <span className="text-[20px]">{el.icon}</span>
                    {!isMini && <span className="text-sm">{el.text}</span>}
                  </div>
                  {!isMini &&
                    (actived.includes(el.id) ? (
                      <FaCaretRight size={16} />
                    ) : (
                      <FaSortDown size={16} />
                    ))}
                </div>

                {!isMini && actived.includes(el.id) && (
                  <div className="flex flex-col">
                    {el.submenu.map((item, idx) => (
                      <div key={idx}>
                        {"children" in item ? (
                          <>
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubmenu((prev) =>
                                  prev === idx ? null : idx
                                );
                              }}
                              className="flex items-center justify-between py-2 text-sm text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-gray-100"
                            >
                              <div className="flex gap-1 pl-6">
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                              </div>
                              <span className="mr-[15px]">
                                {activeSubmenu === idx ? (
                                  <FaCaretRight size={16} />
                                ) : (
                                  <FaSortDown size={16} />
                                )}
                              </span>
                            </div>

                            {activeSubmenu === idx && (
                              <div className="flex flex-col">
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.text}
                                    to={child.path}
                                    onClick={(e) => e.stopPropagation()}
                                    className={({ isActive }) =>
                                      clsx(
                                        "py-2 text-sm no-underline",
                                        isActive
                                          ? "text-blue-600 font-medium bg-gray-200"
                                          : "hover:bg-gray-100 hover:text-blue-500"
                                      )
                                    }
                                  >
                                    <div className="flex gap-1 pl-7">
                                      <span>{child?.icon}</span>
                                      <span>{child.text}</span>
                                    </div>
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <NavLink
                            to={item.path}
                            onClick={(e) => e.stopPropagation()}
                            className={({ isActive }) =>
                              clsx(
                                "py-2 text-sm no-underline flex flex-col",
                                isActive
                                  ? "text-blue-600 font-medium bg-gray-200"
                                  : "text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                              )
                            }
                          >
                            <span className="pl-6">{item.text}</span>
                          </NavLink>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(Sidebar);
