import React from 'react'
import { Tabs } from 'antd';

import DashBoard from './DashBoard/DashBoard';
import Rooms from './Rooms/Rooms';
import {useSelector} from "react-redux";
import { history } from '../../utils/history';
import { Fragment } from 'react';
import { USER_LOGIN,Token } from '../../utils/constant';
import {useParams} from "react-router-dom"
import DanhSachPhongAdmin from './DanhSachPhongAdmin/DanhSachPhongAdmin';



const TabPlane = Tabs
export default function LayoutAdmin() {

  
  function callback(key) {
    console.log(key);
  }


  function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}'
  }
  const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer)

  const operations = <Fragment>
  {! isEmptyObject(userLogin) ? <Fragment> <button onClick={() => {
   history.push(`/profile/${userLogin.content.user.id}`)
  }}> <div style={{width:50,height:50,display:"flex",justifyContent:"center",alignItems:"center"}} className='text-2xl rounded-full bg-red-200'>{userLogin.content.user.email.substr(0,1)}</div></button> <button className='text-blue-800' onClick={() => {
   localStorage.removeItem(USER_LOGIN)
   localStorage.removeItem(Token)
   history.push("/")
   window.location.reload();
  }}>Đăng Xuất</button> </Fragment>: ""}
</Fragment>



  return (
    <div className='p-5'>
    <Tabs tabBarExtraContent={operations} defaultActiveKey='1' onChange={callback}>
   <TabPlane tab="User" key="1">
   <DashBoard />
   </TabPlane>
   <TabPlane tab="Location" key="2">
   <Rooms/>
   </TabPlane>
   <TabPlane tab="Rooms" key="3">
   <DanhSachPhongAdmin/>
   </TabPlane>
</Tabs>
 </div>
  )
}
