import { quanLyBinhLuanService } from "../../Services/QuanLyBinhLuanService";
import { SET_BINH_LUAN } from "../type/QuanLyBinhLuanType";



export const layBinhLuanAction = (maPhong) => {

    return async dispatch => {
        try {
           const result = await quanLyBinhLuanService.layBinhLuan(maPhong)

           console.log("result",result);

           dispatch({
            type: SET_BINH_LUAN,
            binhLuan: result.data.content
           })
        } 
        catch (errors) {
            console.log('errors',errors.response?.data)
        }
    }
}

export const binhLuanAction = (binhLuan) => {
     return async dispatch => {
        try {
            const result = await quanLyBinhLuanService.vietBinhLuan(binhLuan)
            console.log("result",result.content.data);
        } catch (error) {
            console.log("error",error);
        }
     }
  };