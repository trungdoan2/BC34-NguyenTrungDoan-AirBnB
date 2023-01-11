import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinUserAction } from "../../../redux/action/QuanLyNguoiDungAction";
import { useFormik } from "formik";
import { Button, Form, Input, Switch } from "antd";
import { capNhatNguoiDungAction } from "../../../redux/action/QuanLyNguoiDungAction";

export default function Editinfomation() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const dispatch = useDispatch();

  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  console.log(thongTinNguoiDung);

  const { id } = useParams();

  useEffect(() => {
    dispatch(layThongTinUserAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: thongTinNguoiDung.id,
      name: thongTinNguoiDung.name,
      email: thongTinNguoiDung.email,
      phone: thongTinNguoiDung.phone,
      birthday: thongTinNguoiDung.birthday,
      gender: thongTinNguoiDung.gender,
      role: thongTinNguoiDung.role,
    },
    onSubmit: (values) => {
      console.log("values", values);

      dispatch(capNhatNguoiDungAction(id));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <Form
      className="m-3"
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
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item label="Email">
        <Input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Item>
      <Form.Item label="Name">
        <Input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Form.Item>
      <Form.Item label="BirthDay">
        <Input
         name="birthday"
          onChange={formik.handleChange}
          value={formik.values.birthday}
        />
      </Form.Item>
      <Form.Item label="Phone">
        <Input
         name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </Form.Item>
      <Form.Item label="Gender">
        <Switch
          onChange={handleChangeSwitch("gender")}
          checked={formik.values.gender}
        />
      </Form.Item>
      <Form.Item label="">
        <Button>
          <button type="submit">Cập Nhật</button>
        </Button>
      </Form.Item>
    </Form>
  );
}
