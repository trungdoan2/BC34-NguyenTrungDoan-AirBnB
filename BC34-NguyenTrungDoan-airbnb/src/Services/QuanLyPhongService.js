import React, { Component } from 'react';
 import {baseService} from "./BaseService.js"

export class QuanLyPhongService extends baseService {
  layThongTinPhongThue = (id) => {
   return this.get(`api/phong-thue/${id}`)
  }

  layThongTinPhong = (maNguoiDung) => {
    return this.get(`api/dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`)
  }

  layDanhSachPhongThue = () => {
    return this.get(`api/phong-thue`)
  }
}


export const quanLyPhongService = new QuanLyPhongService();