//redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './reducers/demoReducer';
import {QuanLyViTriReducer} from "./reducers/QuanLyViTriReducer";
import {QuanLyNguoiDungReducer} from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyBinhLuanReducer } from './reducers/QuanLyBinhLuanReducer';
import { QuanLyDatPhongReducer } from './reducers/QuanLyDatPhongReducer';

export const store = configureStore({
  reducer: {
    demoReducer,
    QuanLyViTriReducer,
    QuanLyNguoiDungReducer,
    QuanLyBinhLuanReducer,
    QuanLyDatPhongReducer
    
  },
})



//redux
// import { combineReducers, createStore } from 'redux';
// import { DemoReducer } from './reducers/DemoReducer';

// const rootReducer = combineReducers({
//   DemoReducer
// })

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());