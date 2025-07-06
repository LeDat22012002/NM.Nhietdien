import { Button, InputField } from "../../../components";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { validate } from "../../../ultils/helpers";
import { apiRegister } from "../../../apis/user";

const Register = () => {
  const chucVus = [
    { _id: "KTV CNTT", title: "KTV CNTT" },
    { _id: "KTV TĐH", title: "KTV Tự động hóa" },
    { _id: "Giám đốc", title: "Giám đốc" },
  ];
  const [payload, setPayload] = useState({
    manv: "",
    password: "",
    username: "",
  });
  const [selectedChucVu, setSelectedChucVu] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  //   const navigate = useNavigate();
  const handleSubmit = useCallback(async () => {
    setSubmitted(true);
    const invalids = validate(payload, setInvalidFields);

    if (!selectedChucVu) {
      setInvalidFields((prev) => [
        ...prev,
        { name: "chucVu", message: "Vui lòng chọn chức vụ!" },
      ]);
      return;
    }

    if (invalids === 0) {
      const finalPayload = {
        ...payload,
        chucVu: selectedChucVu,
      };
      console.log(finalPayload);
      const rs = await apiRegister(finalPayload);
      console.log("dattst", rs);
      if (rs?.status) {
        toast.success(rs?.message);
      } else {
        toast.error(rs?.message);
      }
    }
  }, [payload, selectedChucVu]);

  return (
    <div className="flex items-center justify-center mt-4 ">
      <div className=" w-[370px] p-8 md:w-[450px] bg-white rounded-md lg:w-[500px] flex flex-col items-center shadow-lg z-10 animate-slide-up">
        <h1 className="text-[28px] font-semibold text-main mb-8">
          TẠO TÀI KHOẢN
        </h1>
        <div className="flex flex-col w-full">
          <span>Họ tên</span>
          <InputField
            value={payload.username}
            // setValue={setPayload}
            nameKey="username"
            setValue={setPayload}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            fullWith
          />
        </div>
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
          <label htmlFor="chucVu" className="font-semibold">
            Chức vụ
          </label>
          <select
            id="chucVu"
            value={selectedChucVu}
            onChange={(e) => setSelectedChucVu(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Chọn chức vụ --</option>
            {chucVus.map((el) => (
              <option key={el._id} value={el._id}>
                {el.title}
              </option>
            ))}
          </select>

          {!selectedChucVu && submitted && (
            <span className="text-sm text-error">Vui lòng chọn chức vụ!</span>
          )}
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
          Tạo tài khoản
        </Button>
      </div>
    </div>
  );
};

export default Register;
