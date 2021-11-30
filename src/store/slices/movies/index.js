import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setUserList } = movieSlice.actions;

export default movieSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get(`https://mfwkweb-api.clarovideo.net/services/content/list?quantity=100&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34255&region=mexico&api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52`)
    .then((response) => {
      dispatch(setUserList(response.data.response.groups));
    })
    .catch((error) => console.log(error));
};
