import React, { Component } from 'react';
 import {baseService} from "./BaseService.js";
 import axios from 'axios';
 import { DOMAIN_BE, token } from '../utils/constant.js';

export class QuanLyNguoiDungService extends baseService {
 
  dangNhap = (thongTinDangNhap) => {
    return this.post(`api/auth/signin`,thongTinDangNhap)
  };

  dangKy = (thongTin) => {
    return this.post(`api/auth/signup`,thongTin)
  };

  layThongTinUser = (maNguoiDung) => {
    return this.get(`api/users/${maNguoiDung}`)
  };

  capNhatThongTinNguoiDung = (maNguoiDung) => {
    return this.put(`api/users/${maNguoiDung}`)
  };

  themNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${DOMAIN_BE}/api/users`,
      method: "POST",
      data: thongTinNguoiDung,
      headers:  {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"},
    });
  };

  xoaNguoiDung = (taiKhoan) => {
    return axios({
      url: `${DOMAIN_BE}/api/?id=${taiKhoan}`,
      method: "DELETE",
      headers:  {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"},
    });
  };

  layDanhSachNguoiDung = () => {
    return this.get(`api/users`)
   
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();