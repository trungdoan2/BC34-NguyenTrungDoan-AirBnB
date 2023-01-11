import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";

export default function RoomLocation(props) {
  const { item } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={item.hinhAnh}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">T{item.tenPhong}</div>
        {/* <NavLink to={`/detail/${item.id}`}>Đặt Phòng</NavLink> */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <NavLink to={`/detail/${item.id}`} className="text-white">Đặt Phòng</NavLink>
        </button>
      </div>
    </div>
  );
}
