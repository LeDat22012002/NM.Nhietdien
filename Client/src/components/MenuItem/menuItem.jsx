import  { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import icons from '../../ultils/icons';
const { FaSortDown, FaCaretRight } = icons;

const MenuItem = ({ item, level = 0, isMini, onExpand }) => {
  const [open, setOpen] = useState(false);
  // hỗ trợ cả hai key
  const childItems = item.children ?? item.submenu;
  const hasChildren = Array.isArray(childItems) && childItems.length > 0;

  // indent = base + level * step
  const indent = isMini ? 0 : 12 + level * 16;

  const handleClick = e => {
    e.stopPropagation();
    if (isMini && hasChildren) {
      onExpand();
    } else if (hasChildren) {
      setOpen(x => !x);
    }
  };

  return (
    <div>
      {/* nếu có con thì render header + icon */}
      {hasChildren ? (
        <div
          className={clsx(
            'flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100',
            isMini ? 'justify-center px-0' : 'px-4'
          )}
          style={{ paddingLeft: `${indent}px` }}
          onClick={handleClick}
        >
          <div className="flex items-center gap-2">
            <span className="text-[20px]">{item.icon}</span>
            {!isMini && <span className="text-sm">{item.text}</span>}
          </div>
          {!isMini && (open ? <FaCaretRight size={16} /> : <FaSortDown size={16} />)}
        </div>
      ) : (
        /* item lá */
        <NavLink
          to={item.path}
          onClick={() => isMini && onExpand()}
          className={({ isActive }) =>
            clsx(
              'flex items-center py-2 no-underline',
              isMini ? 'justify-center px-0' : 'gap-2',
              !isMini && { paddingLeft: `${indent}px` },
              isActive ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-100 text-gray-800'
            )
          }
        >
          <span className="text-[20px]">{item.icon}</span>
          {!isMini && <span className="text-sm">{item.text}</span>}
        </NavLink>
      )}

      {/* render đệ quy nếu open */}
      {hasChildren && open && (
        <div className="flex flex-col w-full">
          {childItems.map(child => (
            <MenuItem
              key={child.id ?? child.text}
              item={child}
              level={level + 1}
              isMini={isMini}
              onExpand={onExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(MenuItem);
