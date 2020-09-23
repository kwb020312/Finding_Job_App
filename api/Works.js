import axios from "axios";

const apiKey = "46744767786b776236324f7a4c4265";

export const getWorks = async () => {
  const res = await axios.get(
    `http://openapi.seoul.go.kr:8088/${apiKey}/json/GetJobInfo/1/20/`
  );
  return res.data;
};

export const findAddress = async (address) => {
  // 발급받은 카카오 api key
  const headers = {
    Authorization: "KakaoAK 1e0341c733fd0d2f7565ded3310021fd",
  };
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
    { headers }
  );
  return res.data;
};
