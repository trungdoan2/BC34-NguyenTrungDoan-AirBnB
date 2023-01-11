
import { Token, token, USER_LOGIN } from "../../utils/constant";
import { DANG_NHAP_ACTION, SET_THONG_TIN_USERS } from "../type/QuanLyNguoiDungType";



let user = {};

if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}



const stateDefault  = {
    userLogin: user,
    thongTinNguoiDung :{},

}

export const QuanLyNguoiDungReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(Token,thongTinDangNhap.token);
            return {...state,userLogin:thongTinDangNhap}
        }
        case SET_THONG_TIN_USERS: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state};
        }
    
        default:
            return {...state}
    }
}