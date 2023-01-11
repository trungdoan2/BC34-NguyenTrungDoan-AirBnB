import { SET_BINH_LUAN } from "../type/QuanLyBinhLuanType";

const stateDefault  = {
    binhLuan: [

    ],

}

export const QuanLyBinhLuanReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case SET_BINH_LUAN: {
            state.binhLuan = action.binhLuan;
            return {...state}
        }

        default:
            return {...state}
    }
}