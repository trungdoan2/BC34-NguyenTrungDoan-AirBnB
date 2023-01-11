import { SET_THONG_TIN_PHONG, SET_THONG_TIN_VI_TRI, SET_VI_TRI } from "../type/QuanLyViTriType";

const stateDefault = {
    arrRoom: [

    ],
    thongTinPhong : {},
    roomDetail: {},
    roomLocation: {},
    
}

export const QuanLyViTriReducer = (state = stateDefault,action) => {
    switch (action.type) {
       
        case SET_THONG_TIN_VI_TRI : {
            state.arrRoom = action.arrRoom;
            return {...state}
        }
        case SET_THONG_TIN_PHONG : {
            state.roomDetail = action.roomDetail;
            return {...state}
        }
        case SET_VI_TRI : {
            state.roomLocation = action.roomLocation;
            return {...state}
        }
        default: return {...state}
    }
}