import React, { Fragment, useEffect, useState } from "react";
import "../../../assets/scss/User.scss";
// import EditUserModal from "./EditUser/EditUserModal";
// import EditModal from "../EditUserModal/EditUserModal";
import { quanLyNguoiDungService } from "../../../Services/QuanLyNguoiDungService";
import ModalUser from "./ModalUser";
import EditUserModal from "./EditModal/EditUserModal";


import swal from "sweetalert2";

export default function User() {

  const [state,setState] = useState({
    listNguoiDung: []
  })
 console.log(state.listNguoiDung);
  useEffect(() => {
      quanLyNguoiDungService
      .layDanhSachNguoiDung()
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const renderDanhSachNguoiDung = () => {
    return state.listNguoiDung?.map((user, index) => {
      return (
        <tr key={user.email} className="user-item">
          <td>{index + 1}</td>
          <td>{user.email}</td>
          <td>{user.name}</td>
          <td>{user.birthday}</td>
          <td>{user.id}</td>
          <td>{user.role}</td>
          <td style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="edit-action">
              <i
                className="fa fa-user-edit"
                data-toggle="modal"
                data-target={`#d1${user.id}`}
              ></i>
            </div>
            <div
              className="delete-action"
              onClick={() => {
               new swal({
                  title: "Bạn chắc chứ?",
                  text: `Xoá ${user.id}`,
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    xoaNguoiDung(user.id);
                  }
                });
              }}
            >
              <i className="fa fa-trash-alt"></i>
            </div>
          </td>
          <EditUserModal user={user} />
        </tr>
      );
    });
  };

  const xoaNguoiDung = (email) => {
    quanLyNguoiDungService
      .xoaNguoiDung(email)
      .then((res) => {
      new  swal({
          title: `Xóa ${email} thành công`,
          icon: "success",
          button: "OK",
        });
       quanLyNguoiDungService
          .layDanhSachNguoiDung()
          .then((res) => {
            setState(res.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
       new swal({
          title: err.response.data,
          text: "Xóa không thành công!",
          icon: "warning",
          button: "OK",
        });
      });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  

  

  useEffect(async () =>{
    try {
      let result = await quanLyNguoiDungService.layDanhSachNguoiDung();

      setState({
        ...state,
       listNguoiDung: result.data.content
      })
    
    } catch (error) {
      console.log("error",error);
    }
},[])


  return (
    <Fragment>
      <div className="title">
        <h2>Danh sách người dùng</h2>
        <button className="btnAdd" data-toggle="modal" data-target="#UserModal">
          <i className="fa fa-plus"></i>
        </button>
        <div className="search">
          <div id="wrap">
            <form autoComplete="on">
              <input
                id="search"
                name="search"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Nhập tên tài khoản cần tìm"
              />
              <input
                id="search_submit"
                defaultValue="Rechercher"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="table-responsive-sm">
        <table className="table table-sm table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">BirthDay</th>
              <th scope="col">ID</th>
              <th scope="col">Người dùng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>{renderDanhSachNguoiDung()}</tbody>
        </table>
      </div>
      <ModalUser />
    </Fragment>
  );
}

