import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:"",
}

//? createSlice, Redux state lojiğini kisa yoldan tanimlamak icin kullanilan bir metotdur.
//? slice : ismi, state'lerin baslangic degerleri ve reducer'lari key-value yapisi seklinde tanimlar.
//? reducer, state'i degistiren fonksiyonlarin yaninda otomatik olarak action type'larin tanimlanmasini da saglar.

const authSlice = createSlice({
  name:"auth",
  initialState: initialState,
  reducers: {
   setUser: (state, action) => {
    state.user = action.payload;
   },
   clearUser: (state) => {
    state.user = "";
   },
  },

});

//? actions toolkit özelliğidir createSlice ile gelir
export const  { setUser, clearUser } = authSlice.actions;

//? Export olayı önemli reducer yazmayı unutma
export default authSlice.reducer