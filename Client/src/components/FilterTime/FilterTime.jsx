import { memo, useState } from 'react';
import { toast } from 'react-toastify';

const FilterTime = ({ callBackHandle }) => {
  const [begind1, setBegind1] = useState('');
  const [endd1, setEndd1] = useState('');

  const handleTime = () => {
    if (!begind1 || !endd1) {
      toast.error('Vui lòng điền đầy đủ !');
      return;
    }

    // Thêm giây vào định dạng chuẩn ISO
    const begind = `${begind1}:00`;
    const endd = `${endd1}:00`;

    callBackHandle(begind, endd);
  };
  return (
    <div className="flex gap-4 h-[50px] items-center justify-center">
      <div className="flex items-center gap-3">
        {/* Từ */}
        <div className="flex items-center gap-1">
          <label className="text-sm font-medium text-gray-700">Từ</label>
          <input
            type="datetime-local"
            value={begind1}
            onChange={(e) => setBegind1(e.target.value)}
            className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Đến */}
        <div className="flex items-center gap-1">
          <label className="text-sm font-medium text-gray-700">Đến</label>
          <input
            type="datetime-local"
            value={endd1}
            onChange={(e) => setEndd1(e.target.value)}
            className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={handleTime}
          className="px-3 py-2 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default memo(FilterTime);
