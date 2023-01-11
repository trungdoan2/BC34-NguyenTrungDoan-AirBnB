import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Register.scss";
import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService";

import swal from "sweetalert2";
export default class Register extends Component {
  state = {
    values: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "USER"
    },
    errors: {
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
    },
  };
  handleChangeInput = (event) => {
    var { value, name } = event.target;
    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };

    //set trường hợp rỗng
    //tạo ra object this.state.errors mới
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    if (name === "email") {
      let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
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
    let { navigator } = this.props;
      quanLyNguoiDungService
      .dangKy(values)
      .then((res) => {
      new  swal({
          title: "Đăng ký thành công",
          icon: "success",
          button: "OK",
        });
        navigator.history.push("/login");
      })
      .catch((err) => {
       new swal({
          title: err.response.data,
          text: "Điền lại thông tin!",
          icon: "warning",
          button: "OK",
        });
      });
  };

  render() {
    return (
      <section className="backgroundBody">
        <div className="container-fluid">
          <div className="registerForm">
            <div className="img__logo">
              <NavLink className="img__link" to="/">
                <span className="text-logo">AirBnB SignUp</span>
              </NavLink>
            </div>
            <div className="formSocial">
              <form className="formRegister">
                <div className="form-group">
                  <input
                    className="input"
                    name="email"
                    placeholder="Nhập Email Của Bạn"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.email}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.password}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Họ tên"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.name}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="birthday"
                    placeholder="Ngày Sinh"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.birthday}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="phone"
                    type="text"
                    placeholder="Số điện thoại"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.phone}
                  </span>
                </div>
                <div className="form-group">
                  <button
                    className="btnLogin"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Đăng ký
                  </button>
                </div>
                <div className="form-group">
                  <NavLink className="text-light" to="/login">
                    Bạn đã có tài khoản?
                  </NavLink>
                </div>
              </form>
            </div>
            <NavLink className="close__btn" to="/"></NavLink>
          </div>
        </div>
      </section>
    );
  }
}
