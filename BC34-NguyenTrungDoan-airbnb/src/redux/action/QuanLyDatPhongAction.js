
import { quanLyDatPhongService } from "../../Services/QuanLyDatPhongService";
import { quanLyPhongService } from "../../Services/QuanLyPhongService";
import { DAT_PHONG, SET_CHI_TIET_PHONG } from "../type/QuanLyDatPhongType";


export const layChiTietPhongAction = () => {
  

    return async(dispatch) =>{
        try {
            const result = await quanLyDatPhongService.layChiTietPhong();
            console.log("result",result);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG,
                    chiTietPhong: result.data.content
                })
            }
        } catch (error) {
            console.log("error",error.response?.data);
        }
    }
}

export const datPhongAction = (thongTinDatPhong)=> {

    return async dispatch => {
        try {
            const result = await quanLyDatPhongService.datPhong(thongTinDatPhong);
            
            console.log(result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: DAT_PHONG,
                    thongTinDatPhong: result.data.content
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const layDanhSachPhongTheoMaNguoiDung = (maNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyPhongService.layThongTinPhong(maNguoiDung)
            console.log("result",result);
        } catch (error) {
            console.log("error",error);
        }
    }
}