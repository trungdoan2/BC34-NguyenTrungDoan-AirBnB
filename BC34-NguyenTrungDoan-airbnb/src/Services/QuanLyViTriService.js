import React, { Component } from 'react';
 import {baseService} from "./BaseService.js"

export class QuanLyViTriService extends baseService {
  viTri = () => {
    return this.get(`api/vi-tri`)
  }

  layThongTinPhongTheoViTri = (id) => {
    return this.get(`api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
  }
}


export const quanLyViTriService = new QuanLyViTriService();