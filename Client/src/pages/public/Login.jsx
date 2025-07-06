import { useState, useCallback } from "react";

import { InputField, Button } from "../../components";
import { apiLogin } from "../../apis/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import path from "../../ultils/path";
import { validate } from "../../ultils/helpers";
import BgHPDQ from "../../assets/image/Br_HoaPhat.png";

const Login = () => {
  // const [manv, setManv] = useState("");
  // const [password, setPassword] = useState("");
  const [payload, setPayload] = useState({
    manv: "",
    password: "",
  });
  const [invalidFields, setInvalidFields] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = useCallback(async () => {
    const { ...data } = payload;
    const invalids = validate(data, setInvalidFields);
    if (invalids === 0) {
      const rs = await apiLogin(data);
      console.log("res", rs);
      if (rs.status) {
        const { accessToken, maNv, role, refreshToken, chucVu, userName } =
          rs.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ maNv, role, chucVu, userName })
        );
        navigate(`/${path.LAYOUT}/${path.THONGKE}`);
        toast.success(rs.message);
      } else {
        toast.error("Đăng nhập thất bại!");
      }
    }
  }, [payload]);
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <img
        className="absolute z-0 object-cover w-full h-full "
        src={BgHPDQ}
        alt="bg"
      />
      <div className=" w-[370px] p-8 md:w-[450px] bg-white rounded-md lg:w-[500px] flex flex-col items-center shadow-lg z-10 animate-slide-up">
        <h1 className="text-[28px] font-semibold text-main mb-8">ĐĂNG NHẬP</h1>
        <div className="flex flex-col w-full">
          <span>Mã nhân viên</span>
          <InputField
            value={payload.manv}
            // setValue={setPayload}
            nameKey="manv"
            setValue={setPayload}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            fullWith
          />
        </div>
        <div className="flex flex-col w-full">
          <span>Mật khẩu</span>
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey="password"
            type="password"
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            fullWith
          />
        </div>

        <Button handleOnclick={handleSubmit} fw>
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default Login;
