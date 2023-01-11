import { quanLyViTriService } from "../../Services/QuanLyViTriService";
import { SET_THONG_TIN_PHONG, SET_THONG_TIN_VI_TRI, SET_VI_TRI } from "../type/QuanLyViTriType";
import { quanLyPhongService } from "../../Services/QuanLyPhongService";



export const layThongTinTheoViTriAction = (id) => {

    return async dispatch => {
        try {
           const result = await quanLyViTriService.layThongTinPhongTheoViTri(id)

           console.log("result",result);

           dispatch({
            type: SET_THONG_TIN_VI_TRI,
            arrRoom: result.data.content
           })
        } 
        catch (errors) {
            console.log('errors',errors.response?.data);
        }
    }
}

export const layThongTinPhongThueAction = (id) => {
    return async (dispatch) => {
        try {
        const result = await quanLyPhongService.layThongTinPhongThue(id);
        
         dispatch({
            type: SET_THONG_TIN_PHONG,
            roomDetail: result.data.content
         })
        } catch (error) {
         console.log("error",error.response?.data);
        }
       }
}

export const layViTriAction = () => {
    return async (dispatch) => {
        try {
        const result = await quanLyViTriService.viTri();
        
   
            dispatch({
               type: SET_VI_TRI,
               roomLocation: result.data.content
            })
        
       
        } catch (error) {
         console.log("error",error);
        }
       }
}