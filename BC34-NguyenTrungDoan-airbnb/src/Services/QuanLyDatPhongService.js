// import { ThongTinDatVe } from "../_core/Models/ThongTinDatVe";
import {baseService }from "./BaseService";
import axios from "axios";
import { DOMAIN_BE, token } from "../utils/constant";

// import { DOMAIN_BE, groupID } from "../utils/constant";
export class QuanLyDatPhongService extends baseService {

  layChiTietPhong= () => {
  
   return this.get(`api/dat-phong`)

}

datPhong = (thongTinDatPhong) => {
    return axios({
      url: `${DOMAIN_BE }/api/dat-phong`,
      method: "POST",
      data: thongTinDatPhong,
      headers: {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"
      },
    });
  };
  

}

export const quanLyDatPhongService = new QuanLyDatPhongService();