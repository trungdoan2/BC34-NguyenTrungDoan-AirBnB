import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.scss";
import { useDispatch } from "react-redux";
import { USER_LOGIN, Token } from "../../utils/constant";
import { dangNhapAction } from "../../redux/action/QuanLyNguoiDungAction";
import swal from "sweetalert2";
import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService";
import { history } from "../../utils/history";
const LogIn = (props) => {
  let { navigator } = props;
  const dispatch = useDispatch();
  let [state, setState] = useState({
    values: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      password: "",
    },
  });
  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = { ...state.values, [name]: value };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Không được bỏ trống!" : "",
    };
    setState({ values: newValues, errors: newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      quanLyNguoiDungService
      .dangNhap(state.values)
      .then((res) => {
        localStorage.setItem(USER_LOGIN, JSON.stringify(res.data));
        localStorage.setItem(Token, res.data.token);
        dispatch(dangNhapAction(res.data.email));
       new swal({
          title: "Đăng nhập thành công",
          text: "Xin chào ",
          icon: "success",
          button: "OK",
        });
      history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      new  swal({
          title: err.response.data,
          icon: "error",
          button: "OK",
        });
      });
  };
  return (
    <section className="backgroundBodyUser">
      <div className="container-fluid">
        <div className="loginForm">
          <NavLink className="img__link" to="/">
            <div className="img__logo">
              <span className="text-logo">AirBnB SignIn</span>
            </div>
          </NavLink>
          <div className="formMessage">
            Đăng nhập để được nhiều ưu đãi
            <br />
            và Đặt Phòng
          </div>
          <div className="formSocial">
            <form className="formLogin" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={handleChangeInput}
                />
                <span className="text-danger">{state.errors.email}</span>
              </div>
              <div className="form-group">
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Mật khẩu"
                  onChange={handleChangeInput}
                />
                <span className="text-danger">{state.errors.password}</span>
              </div>
              <div className="form-group">
                <button className="btnLogin" type="submit">
                  Đăng nhập
                </button>
              </div>
              <div className="form-group">
                <NavLink className="text-light" to="/register">
                  Bạn chưa có tài khoản?
                </NavLink>
              </div>
            </form>
          </div>
          <NavLink className="close__btn" to="/"></NavLink>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
