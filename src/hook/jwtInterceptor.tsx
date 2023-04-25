// import axios from "axios";

// const jwtInterceoptor = axios.create({});

// jwtInterceoptor.interceptors.request.use((config: { headers: any }) => {
//   let tokensData = JSON.parse(localStorage.getItem("tokens") || "");
//   console.log(tokensData);
//   config.headers["Authorization"] = `bearer ${tokensData.access_token}`;
//   return config;
// });
// export default jwtInterceoptor;

import axios from "axios";

const jwtInterceoptor = axios.create({});

jwtInterceoptor.interceptors.request.use((config: { headers: any }) => {
  let tokensData = JSON.parse(localStorage.getItem("tokens") || "");
  config.headers["Authorization"] = `bearer ${tokensData.access_token}`;
  return config;
});

jwtInterceoptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const authData = JSON.parse(localStorage.getItem("tokens") || "");
      const payload = {
        access_token: authData.access_token,
        refresh_token: authData.refresh_token,
      };

      let apiResponse = await axios.post(
        "http://" + process.env.REACT_APP_URL + "/api/login/refreshtoken",
        payload
      );
      localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
      error.config.headers[
        "Authorization"
      ] = `bearer ${apiResponse.data.access_token}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);
export default jwtInterceoptor;
