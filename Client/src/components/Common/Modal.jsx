import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../store/loading/loadingSlice';
const Modal = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() =>
        dispatch(showModal({ isShowModal: false, modalChildren: null }))
      }
      className="absolute h-full inset-0 z-[30] bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default memo(Modal);
