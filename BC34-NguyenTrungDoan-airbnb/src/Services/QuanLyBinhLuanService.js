import React, { Component } from 'react';
 import {baseService} from "./BaseService.js";
 import axios from 'axios';
 import { DOMAIN_BE, token } from '../utils/constant.js';

export class QuanLyBinhLuanService extends baseService {
  
layBinhLuan = (maPhong) => {
   return this.get(`api/binh-luan/lay-binh-luan-theo-phong/${maPhong}`)
}

vietBinhLuan = (binhLuan) => {
   return axios({
      url:`${DOMAIN_BE}/api/binh-luan`,
      method: 'POST',
      data: binhLuan,
      headers: {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"}
   })
}
}

export const quanLyBinhLuanService = new QuanLyBinhLuanService();