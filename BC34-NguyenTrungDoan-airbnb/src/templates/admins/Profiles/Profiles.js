import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinUserAction } from "../../../redux/action/QuanLyNguoiDungAction";
import {NavLink, useParams} from "react-router-dom"
import DanhSachPhong from "../../../pages/DanhSachPhong/DanhSachPhong";


export default function Profiles() {
  const { thongTinNguoiDung, userLogin} = useSelector((state) => state.QuanLyNguoiDungReducer);
 
  console.log(thongTinNguoiDung);

const dispatch = useDispatch()

const {id} = useParams()



useEffect(() => {
  //  let {id} = props.match.params;

  dispatch(layThongTinUserAction(id));
}, []);


  return (
    <div className="flex flex-row">
      <div className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <div className="flex justify-center bg-gray-200">
          <img
            className="rounded-full m-3"
            src={thongTinNguoiDung.avatar}
            style={{width:100, height:100}}
            alt="Chưa có avatar"
          />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {thongTinNguoiDung.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ngày Sinh: {thongTinNguoiDung.birthday}
            <br/>
            Email: {thongTinNguoiDung.email}
            <br/>
            Số Điện Thoại: {thongTinNguoiDung.phone}
          </p>

          <button className="m-3 bg-blue-300 hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
            <NavLink to={`/updateUser/${thongTinNguoiDung.id}`}>Chỉnh Sửa Hồ Sơ</NavLink>
          </button>
        </div>
      </div>

      <div className="m-5">
        <DanhSachPhong />
      </div>
    </div>
  );
}
