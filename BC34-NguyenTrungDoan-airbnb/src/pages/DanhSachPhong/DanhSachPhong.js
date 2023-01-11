import React, {useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  layDanhSachPhongTheoMaNguoiDung } from '../../redux/action/QuanLyDatPhongAction';
import { useParams } from 'react-router-dom';
import {  ThongTinDatPhong } from '../../_core/Models/ThongTinDatPhong';
import {layThongTinUserAction} from "../../redux/action/QuanLyNguoiDungAction";
import {moment} from "moment";
import { quanLyPhongService } from '../../Services/QuanLyPhongService';

export default function DanhSachPhong(props) {

    const [state,setState] = useState({
      DanhSachPhong: []
      });
    
      useEffect(async () =>{
        try {
          let result = await quanLyPhongService.layThongTinPhong(id);
    
          setState({
            ...state,
           DanhSachPhong: result.data.content
          })
        } catch (error) {
          console.log("error",error);
        }
    },[])
    
     
     console.log(state.DanhSachPhong);

    const dispatch = useDispatch();
  
    const { id } = useParams();
  


    const renderPhongDaDat = () => {
     return state.DanhSachPhong?.map((rdd,index) => {
      return (
        <div key={index}>
         <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                 <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Mã Phòng: {rdd.maPhong}</h2>
                  <p className="text-gray-500"> Ngày Đến: {rdd.ngayDen} <br/> Ngày Đi: {rdd.ngayDi}</p>
                  <p className="text-gray-500">Khách: {rdd.soLuongKhach}</p>
                 </div>
               </div>
             </div>
      )
      })
    }

  return (
    <div className='p-5'>
    <section className="text-gray-600 body-font">
     <div className="container">
       <div className="flex flex-col text-center w-full mb-20">
         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-800">Lịch Sử Đặt Phòng</h1>
         <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Hân Hạnh Được Phục Vụ Quý Khách</p>
       </div>
       <div className="flex flex-wrap -m-2">
         {renderPhongDaDat()}
   
       </div>
     </div>
   </section>
   
      </div>
  )
}



