import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { layBinhLuanAction } from "../../../redux/action/QuanLyBinhLuanAction";
import VietBinhLuan from "./VietBinhLuan";

export default function BinhLuan() {
  const binhLuan= useSelector((state) => state.QuanLyBinhLuanReducer.binhLuan);
  const dispatch = useDispatch();

  const {id} = useParams();
 

  useEffect(() => {
    const action = layBinhLuanAction(id)
    dispatch(action)
  }, []);

  const renderComment = () => {
   return binhLuan.map((item,index) => {
    return  <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
  <footer className="flex justify-between items-center mb-2">
    <div className="flex items-center">
      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img className="mr-2 w-6 h-6 rounded-full" src={item.avatar} alt={item.tenNguoiBinhLuan} />{item.tenNguoiBinhLuan}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{item.ngayBinhLuan}</p>
    </div>
  </footer>
  <p className="text-gray-500 dark:text-gray-400">{item.noiDung}</p>
  <div className="flex items-center mt-4 space-x-4">
    <button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
      <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      Reply
    </button>
  </div>
</article>

   })
}

return (
  <div className="container m-5">
    <VietBinhLuan/>

    {renderComment()}
  </div>
);

}
