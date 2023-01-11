import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  layThongTinTheoViTriAction,
  layViTriAction,
} from "../../../redux/action/QuanLyViTriAction";
import { useParams } from "react-router-dom";
import { layChiTietPhongAction } from "../../../redux/action/QuanLyDatPhongAction";
import "./Room.css";
import { quanLyViTriService } from "../../../Services/QuanLyViTriService";

export default function Rooms() {
  // const { roomLocation } = useSelector((state) => state.QuanLyViTriReducer);

  // console.log(roomLocation);

  const [state,setState] = useState({
    viTri: []
    });

    console.log(state.viTri);


  const dispatch = useDispatch();

  useEffect(() => {
    quanLyViTriService
    .viTri()
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
}, []);


  
    useEffect(async () =>{
      try {
        let result = await quanLyViTriService.viTri();
  
        setState({
          ...state,
         viTri: result.data.content
        })
      } catch (error) {
        console.log("error",error);
      }
  },[])
  
   


  // useEffect(() => {
  //   dispatch(layViTriAction());
  // }, []);

  const renderViTri = () => {
    return state.viTri?.map((room, index) => {
      return (
        <tr key={room.id}>
            <td>{room.id}</td>
            <td>{room.tenViTri}</td>
            <td>{room.tinhThanh}</td>
            <td>{room.quocGia}</td>
            <td>
              <img src={room.hinhAnh} style={{width:60,height:60}}/>
            </td>
          </tr>
      )
    });
  };


  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Tên Vị Trí</th>
        <th>Tỉnh Thành</th>
        <th>Quốc Gia</th>
        <th>Hình Ảnh</th>
      </tr>
       {renderViTri()}
    </table>
  );
}
