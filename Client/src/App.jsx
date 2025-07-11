import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import path from './ultils/path';
import { Login } from './pages/public';
import {
  BM_10_QT_05_08,
  BM_11_QT_05_08,
  Layout,
  Register,
  ThongKe,
  AllUser,
} from './pages/Layout';
function App() {
  return (
    <div className="vh-100 ">
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route path={path.THONGKE} element={<ThongKe />} />
          <Route path={path.BM_11_QT_05_08} element={<BM_11_QT_05_08 />} />
          <Route path={path.BM_10_QT_05_08} element={<BM_10_QT_05_08 />} />
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
