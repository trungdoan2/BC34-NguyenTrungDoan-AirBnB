import React, { Component, Fragment } from "react";
import "./EditUserModal.scss";
import { quanLyNguoiDungService } from "../../../../Services/QuanLyNguoiDungService";
import swal from "sweetalert2";

export default class EditUserModal extends Component {
  state = {
    values: {
        i: 0,
        name: "",
        email: "",
        phone: "",
        birthday: "",
        gender: true,
        role: ""
    },
    errors: {
        name: "",
        email: "",
        phone: "",
        birthday: "",
        role: ""
    },
  };

  componentDidMount() {
    let { user } = this.props;
    this.setState({
      values: {
        email: user.email,
        name: user.name,
        phone: user.phone,
        birthday: user.birthday,
        gender: user.gender,
        role: user.role,
      },
      errors: {
        email: "",
        name: "",
        phone: "",
        birthday:"",
        gender: "",
        role: "",
      },
    });
  }
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
      .capNhatThongTinNguoiDung(values)
      .then((res) => {
       new swal({
          title: "Sửa thành công",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
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
  renderModal = () => {
    let { user } = this.props;
    return (
      <div
        className="editUserModal modal fade"
        id={`d1${user.email}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="EditModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EditModalTitle">
                Sửa thông tin người dùng
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
                    type="text"
                    name="email"
                    className="text-secondary"
                    onChange={this.handleChangeInput}
                    value={this.state.values.email}
                    disabled
                    style={{ cursor: "no-drop" }}
                    required
                  />
                  <div
                    className="placeholder"
                    style={{ left: "10px", top: "-15px" }}
                  >
                    Email
                  </div>
                  <span className="text-danger">
                    {this.state.errors.email}
                  </span>
                </div>
                <div className="textb">
                  <input
                    type="name"
                    name="name"
                    onChange={this.handleChangeInput}
                    value={this.state.values.name}
                    required
                  />
                  <div className="placeholder">Họ Tên</div>
                  <span className="text-danger">
                    {this.state.errors.name}
                  </span>
                </div>
                <div className="textb">
                  <input
                    type="text"
                    name="phone"
                    onChange={this.handleChangeInput}
                    value={this.state.values.phone}
                    required
                  />
                  <div className="placeholder">Số ĐTn</div>
                  <span className="text-danger">{this.state.errors.phone}</span>
                </div>
                <div className="textb">
                  <input
                    type="text"
                    name="birthday"
                    onChange={this.handleChangeInput}
                    value={this.state.values.birthday}
                    required
                  />
                  <div className="placeholder">Ngày Sinh</div>
                  <span className="text-danger">{this.state.errors.birthday}</span>
                </div>
                <div className="textb">
                  <select
                    name="role"
                    onChange={this.handleChangeInput}
                    id="loaiNguoiDung"
                    value={this.state.values.role}
                  >
                    <option value="#">--Chọn loại người dùng--</option>
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                  </select>
                  <span className="text-danger">
                    {this.state.errors.role}
                  </span>
                </div>
                <button className="btn fa fa-check" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <Fragment>{this.renderModal()}</Fragment>;
  }
}
