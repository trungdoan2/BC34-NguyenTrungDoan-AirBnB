import React, { Component } from "react";
import "./ModalUser.scss";
import { groupID } from "../../../utils/constant";
import { quanLyNguoiDungService } from "../../../Services/QuanLyNguoiDungService";
import swal from "sweetalert2";
export default class ModalUser extends Component {

  state = {
    values: {
        id: 0,
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        gender: true,
        role: ""
    },
    errors: {
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        role: ""
    },
  };
  handleChangeInput = (event) => {
    var { value, name } = event.target;
    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    if (name === "email") {
      let regexEmail = "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    //setState lại values và errors
    this.setState({ values: newValues, errors: newErrors });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = this.state;
    for (let key in values) {
      if (values[key] === "") {
        // kiểm tra lỗi
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("thông tin không hợp lệ");
      return;
    }
    // gọi api hoạc dispatch redux
      quanLyNguoiDungService
      .themNguoiDung(values)
      .then((res) => {
      new  swal({
          title: "Thêm thành công",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
      new  swal({
          title: err.response.data,
          text: "Điền lại thông tin!",
          icon: "warning",
          button: "OK",
        });
      });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="UserModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="UserModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="UserModalTitle">
                Thêm người dùng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit} className="user-form">
                <div className="textb">
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChangeInput}
                    required
                  />
                  <div className="placeholder">Email</div>
                  <span className="text-danger">
                    {this.state.errors.email}
                  </span>
                </div>
                <div className="textb">
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChangeInput}
                    required
                  />
                  <div className="placeholder">Mật khẩu</div>
                  <span className="text-danger">
                    {this.state.errors.password}
                  </span>
                </div>
                <div className="textb">
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChangeInput}
                    required
                  />
                  <div className="placeholder">Họ tên</div>
                  <span className="text-danger">{this.state.errors.name}</span>
                </div>
                <div className="textb">
                  <input
                    name="birthday"
                    onChange={this.handleChangeInput}
                    required
                  />
                  <div className="placeholder">Birthday</div>
                  <span className="text-danger">{this.state.errors.birthday}</span>
                </div>
                <div className="textb">
                  <input
                    type="text"
                    name="phone"
                    onChange={this.handleChangeInput}
                    required
                  />
                  <div className="placeholder">Số điện thoại</div>
                  <span className="text-danger">{this.state.errors.phone}</span>
                </div>
                <div className="textb">
                  <select
                    name="role"
                    onChange={this.handleChangeInput}
                    id="loaiNguoiDung"
                  >
                    <option value="#">--Chọn loại người dùng--</option>
                    <option value="USER">Khách Hàng</option>
                    <option value="ADMIN">Quản Trị</option>
                  </select>
                  <span className="text-danger">
                    {this.state.errors.role}
                  </span>
                </div>
                <button className="btn fas fa-arrow-right" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
