
import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION, SET_THONG_TIN_USERS } from "../type/QuanLyNguoiDungType";
import {history} from "../../utils/history"



export const dangNhapAction = (thongTinDangNhap) =>{
   
    return async (dispatch) => {
      try {
          const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
  
          if (result.data.statusCode === 200) {
              dispatch({
                  type: DANG_NHAP_ACTION,
                  thongTinDangNhap: result.data.content
              });
              console.log(result.data.content);
          history.back()
          }
          console.log("result",result);
      } catch (error) {
          console.log("error",error.response.data);
      }
    }
  }


  export const layThongTinUserAction = (maNguoiDung) =>{
   
    return async (dispatch) => {
      try {
          const result = await quanLyNguoiDungService.layThongTinUser(maNguoiDung);
  
          if (result.data.statusCode === 200) {
              dispatch({
                  type: SET_THONG_TIN_USERS,
                  thongTinNguoiDung: result.data.content
              });
          }
          console.log("result",result);
      } catch (error) {
          console.log("error",error);
      }
    }

  }

  export const capNhatNguoiDungAction = (maNguoiDung) => {
    return async (dispacth) => {
       try {
          const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(maNguoiDung);
           alert("Cập nhật người dùng thành công")
           console.log("result",result.data.content);
   
           dispacth(layThongTinUserAction())
           history.push(`profiles/${maNguoiDung}`);
       } catch (error) {
           console.log("error",error);
       }
    }
   }