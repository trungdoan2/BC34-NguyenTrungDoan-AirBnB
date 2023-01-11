import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinPhongThueAction } from "../../redux/action/QuanLyViTriAction";

import DatPhong from "../ViTri/DatPhong";
import BinhLuan from "./BinhLuan/BinhLuan";

export default function Detail() {
  const roomDetail = useSelector(
    (state) => state.QuanLyViTriReducer.roomDetail
  );
  console.log(roomDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  

  useEffect(() => {
    //  let {id} = props.match.params;

    dispatch(layThongTinPhongThueAction(id));
  }, []);

  
   


  return (
    <div className="container">
      <div className="m-5">
        <h3 className="text-2xl m-5">{roomDetail.tenPhong}</h3>
        <img src={roomDetail.hinhAnh} alt={roomDetail.tenPhong} />
      </div>

      <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col justify-start">
          <div className="m-5 text-left">
            <h5 className="text-xl">{roomDetail.tenPhong}</h5>
            <div className="flex flex-row">
              <p>{roomDetail.khach} Khách</p>
              <p className="mx-2">{roomDetail.phongNgu} Phòng Ngủ</p>
              <p className="mx-2">{roomDetail.phongTam} Phòng Tắm</p>
              <p className="mx-2">{roomDetail.giuong} Giường</p>
            </div>
            <div>
              <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{roomDetail.moTa}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-left">
                  <h3>${roomDetail.giaTien}/đêm</h3>
              </div>
                <div>
                    <DatPhong/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-2"/>
      <div className="text-left m-5">
        <h3>
            Tiện Nghi
        </h3>

      

      </div>
      <hr className="m-2"/>
       <div className="text-left m-5">
        <h3>Bình Luận</h3>
        <BinhLuan />
       </div>
      </div>
    </div>
  );
}
