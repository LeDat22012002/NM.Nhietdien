import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import path from './ultils/path';
import { Login } from './pages/public';
import {
  TB_BM3,
  Layout,
  Register,
  ThongKe,
  AllUser,
  TB_BM2,
  TB_BM1,
  CDQ_BM1,
  CDQ_BM2,
  BM_LBKLH,
  BM_QHNHND,
  BM_NHND,
  BM1_NHKT,
  BM2_NHKT,
} from './pages/Layout';
import { useSelector } from 'react-redux';
import Modal from './components/Common/Modal';

function App() {
  const { isShowModal, modalChildren } = useSelector((state) => state.loading);
  return (
    <div className="relative h-screen ">
      {isShowModal && <Modal>{modalChildren}</Modal>}
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route path={path.THONGKE} element={<ThongKe />} />

          <Route path={path.TB_BM1} element={<TB_BM1 />} />
          <Route path={path.TB_BM2} element={<TB_BM2 />} />
          <Route path={path.TB_BM3} element={<TB_BM3 />} />

          <Route path={path.BM1_NHKT} element={<BM1_NHKT />} />
          <Route path={path.BM2_NHKT} element={<BM2_NHKT />} />

          <Route path={path.NHND_BM} element={<BM_NHND />} />
          <Route path={path.LBKLH_BM} element={<BM_LBKLH />} />
          <Route path={path.QHNHND_BM} element={<BM_QHNHND />} />

          <Route path={path.CDQ_BM1} element={<CDQ_BM1 />} />
          <Route path={path.CDQ_BM2} element={<CDQ_BM2 />} />

          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.ALL_USERS} element={<AllUser />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
    </div>
  );
}

export default App;
