import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { binhLuanAction } from '../../../redux/action/QuanLyBinhLuanAction';

export default function VietBinhLuan
() {

  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);
  
  const dispatch = useDispatch()

  const {id} = useParams()
  // console.log(id);

  console.log(userLogin);
  var today = new Date();

  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

  console.log(date);

  const formik = useFormik({
    initialValues: {
      id: 0,
     maPhong: id,
     maNguoiBinhLuan: 0,
     ngayBinhLuan: new Date(),
    noiDung: "",
    saoBinhLuan: 0
    },
    onSubmit: (values) => {
      console.log("values",values);

      dispatch(binhLuanAction(values))
    }
  })
  
  return (
    <form className="mb-6" onSubmit={formik.handleSubmit}>
    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <label htmlFor="comment" className="sr-only">Your comment</label>
      <textarea name='noiDung' onChange={formik.handleChange} id="comment" rows={6} className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800" placeholder="Write a comment..." required defaultValue={""} />
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
      Add comment
    </button>
  </form>
  )
}
