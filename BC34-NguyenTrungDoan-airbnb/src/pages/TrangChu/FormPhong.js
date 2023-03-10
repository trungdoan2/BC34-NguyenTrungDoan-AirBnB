import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select
} from 'antd';
import { useFormik } from "formik";
import { quanLyViTriService } from '../../Services/QuanLyViTriService';
import { history } from '../../utils/history';
import { NavLink } from 'react-router-dom';
import { layThongTinTheoViTriAction } from '../../redux/action/QuanLyViTriAction';
import DanhSachPhongTheoViTri from '../ChiTietSanPham/DanhSachPhongTheoViTri';


const { RangePicker } = DatePicker;
const App = (props) => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      tenViTri: "",
      tinhThanh: "",
      quocGia: ""
    },
    onSubmit: async (values) => {
      console.log("values",values);
      try {
        const result = await quanLyViTriService.viTri()
        console.log(result.data.content);
        history.push(`/place/${values.id}`)
      } catch (error) {
        console.log("error",error);
      }
    }
  })

  const [state,setState] = useState({
  viTri: []
  });

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

 
 console.log(state.viTri);

 const handleChangeViTri = async (value, option) => {

try {
 let result = await quanLyViTriService.layThongTinPhongTheoViTri(value)

  setState({
    ...state,
    viTri: result.data.content
  })
} catch (error) {
  console.log("error",error);
}

formik.setFieldValue("id",value)
};
  return (
   <div className='mt-5'>
     <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item label="?????a ??i???m" >
        <Select placeholder="B???n S???p ??i ????u"
        options={state.viTri.map((vt,index) => ({label: vt.tenViTri + "," + vt.tinhThanh,value:vt.id}))}
        onChange={handleChangeViTri}
        />
      </Form.Item>
      <Form.Item label="Th???i gian nh???n & tr??? ph??ng">
      <RangePicker placement={placement} format="DD-MM-YYYY" />
      </Form.Item>
      <Form.Item label="Kh??ch">
        <InputNumber />
      </Form.Item>
      <Form.Item label=" Thao T??c">
       <Button htmlType="submit" >
        {/* <NavLink to={`/place/id}`}>T??m Ki???m</NavLink> */}
        Button
       </Button>
      </Form.Item>
    </Form>
   </div>
  );
};
export default App;