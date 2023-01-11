import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinTheoViTriAction } from "../../redux/action/QuanLyViTriAction";
import MultipleRowSlick from "./MutipleRowSlick/MultipleRowSlick";

import RoomLocation from "./RoomLocation"

export default function DanhSachPhongTheoViTri() {
  const arrRoom = useSelector((state) => state.QuanLyViTriReducer.arrRoom);
   console.log(arrRoom);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    //  let {id} = props.match.params;

    dispatch(layThongTinTheoViTriAction(id));
  }, []);

  

  return (
       <MultipleRowSlick arrRoom={arrRoom} />
  );
}
