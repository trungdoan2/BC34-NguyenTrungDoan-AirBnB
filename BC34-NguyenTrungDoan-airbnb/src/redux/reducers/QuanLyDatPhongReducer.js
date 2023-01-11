import { DAT_PHONG, SET_CHI_TIET_PHONG } from "../type/QuanLyDatPhongType";

const stateDefault = {
    chiTietPhong: {
      thongTinPhong: {}
    },
    danhSachPhongDangDat : {},
}


export const QuanLyDatPhongReducer = (state=stateDefault,action) => {
    switch (action.type) {
       case SET_CHI_TIET_PHONG: {
          state.chiTietPhong = action.chiTietPhong;
          return {...state};
       }
       case DAT_PHONG: {
      
        let danhSachPhongCapNhat = [...state.danhSachPhongDangDat];
  
        console.log(action);
           
        return {...state,danhSachPhongDangDat: danhSachPhongCapNhat}
       }
  
      default: return {...state}
    }
  } 