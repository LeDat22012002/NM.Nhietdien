import axios from "../../../axois";

export const apigetAllTuabin1 = () =>
  axios({
    url: "/BM_1/getAllBM_1",
    method: "get",
  });
