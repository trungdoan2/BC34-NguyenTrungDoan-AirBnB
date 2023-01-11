import React, { useState, useEffect } from "react";
import { Button, DatePicker, Form, InputNumber} from "antd";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { layChiTietPhongAction } from "../../redux/action/QuanLyDatPhongAction";
import { USER_LOGIN } from "../../utils/constant";
import { Navigate } from "react-router-dom";
import { moment } from "moment";
import { quanLyDatPhongService } from "../../Services/QuanLyDatPhongService";

// const { RangePicker } = DatePicker;

export default function DatPhong() {

  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
  
  const {chiTietPhong,danhSachPhongDangDat} = useSelector(state => state.QuanLyDatPhongReducer)

  const {thongTinPhong ,danhSachPhong} = chiTietPhong;


  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
     const action = layChiTietPhongAction()

    dispatch(action)
  },[])

  console.log("ChiTietPhong",chiTietPhong);



  const [placement, SetPlacement] = useState("topLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

 
  
  const formik = useFormik({
    initialValues: {
      id: 0,
      maPhong: id,
      ngayDen: "",
      ngayDi: "",
      soLuongKhach: "",
      maNguoiDung: 0
    },
    onSubmit: async (values) => {
      console.log("values",values);
      try {
        const result = await quanLyDatPhongService.datPhong(values);
        alert("Đặt phòng thành công")
      } catch (error) {
        console.log("error",error);
      }
    }
  })



  if (!localStorage.getItem(USER_LOGIN)) {
     return <Navigate to="/login" />

  }
 let moment = require('moment');

  const onChangeInputNumber = (value) => {
    formik.setFieldValue('soLuongKhach', value)
  }
  
  const onChangeNgayDen = (values) => {
    formik.setFieldValue("ngayDen",moment(values).format("YYYY-MM-DD[T]HH:mm:ss"))
    console.log('onChangeDateDen: ',moment(values).format("YYYY-MM-DD[T]HH:mm:ss"));
  };

  const onChangeNgayDi = (values) => {
    formik.setFieldValue("ngayDi",moment(values).format("YYYY-MM-DD[T]HH:mm:ss"))
    console.log('onChangeDateDi: ',moment(values).format("YYYY-MM-DD[T]HH:mm:ss"));
  };

   


 
  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 30,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onSubmitCapture={formik.handleSubmit}
    >
   
     <p>Thời gian nhận phòng:</p>
      <Form.Item label="">
        <DatePicker  placement={placement} format="YYYY-MM-DD" onChange={onChangeNgayDen}/>
      </Form.Item>
      <p>Thời gian trả phòng:</p>
      <Form.Item label="">
        <DatePicker  placement={placement} format="YYYY-MM-DD" onChange={onChangeNgayDi}/>
      </Form.Item>
      <Form.Item label="Khách">
        <InputNumber min={1}  onChange={onChangeInputNumber} />
      </Form.Item>
      <hr className="m-3"/>
      <Form.Item label="">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Đặt Phòng
        </button>
      </Form.Item>
    </Form>
  );
}
