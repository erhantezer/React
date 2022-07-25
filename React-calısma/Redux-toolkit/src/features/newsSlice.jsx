import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  newList: [],
  loading: true
}

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron ismlerinin yurutulmesini saglamaktir.

const API_KEY ="44e23dc79f324a2380981ce37f159336";
// const API_KEY = '02d142c50d8b4247b974b25323435174';


export const getNews = createAsyncThunk(
  'news/getNews', //!actioan type ismi
  //! async callback fun
  async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    try {
      const {data} = await axios.get(url);
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  }
)

const newsSlice = createSlice({
  name:"news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: {
    [getNews.pending]: (state) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, {payload}) => {
      state.loading=false;
      state.newList = payload;
    },
    [getNews.rejected]: (state) => {
      state.loading = false;
    },
  },
});
  //! baska slice'lardaki tanimlanan action'lara cevap vermek
//! bilhassa createAsyncThunk tarafindan olusturulan action'lara
//! cevap vermek icin kullanilir.

export const { clearNewsList } = newsSlice.actions;


export default newsSlice.reducer