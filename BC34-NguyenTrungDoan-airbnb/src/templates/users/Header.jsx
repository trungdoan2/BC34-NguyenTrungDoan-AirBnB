import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/imgs/png-clipart-airbnb-computer-icons-accommodation-airbnb-logo-text-trademark-thumbnail.png";
import { history } from '../../utils/history';
import { useSelector } from 'react-redux';
import { USER_LOGIN, Token } from '../../utils/constant';
import { Fragment } from 'react';

export default function Header() {

  const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);
   console.log("userLogin",userLogin);

  function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}'
  }
  
  
    const renderLogin = () => {
      if (isEmptyObject(userLogin)) {
        return <Fragment>
       <button onClick={() =>{
         history.push("/login")
       }} className="self-center px-8 py-3 rounded">Sign In</button>
       <NavLink className="nav=link" to="register"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></NavLink> 
        </Fragment>
      }
  
      return <Fragment>  <button onClick={() =>{
        history.push(`/profile/${userLogin.content.user.id}`)
      }} className="self-center px-8 py-3 rounded text-red-500"> {userLogin.content.user.email}</button>
  
     <button className='text-blue-800' onClick={() => {
        localStorage.removeItem(USER_LOGIN)
        localStorage.removeItem(Token)
        history.push("/")
        window.location.reload();
       }}>Đăng Xuất</button>
      </Fragment>
      
    }
  return (

    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
    <div className="container flex justify-between h-16 mx-auto">
      <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
       <img src= {logo} alt="" width={70}/>
      </a>
      <ul className="items-stretch hidden space-x-3 lg:flex">
        <li className="flex">
        <NavLink className="nav-link" to="/place">Nơi ở</NavLink>
        </li>
        <li className="flex">
        <NavLink className="nav-link" to="/timkiem">Trải Nghiệm</NavLink>
        </li>
        <li className="flex">
         <NavLink className="nav-link" to="/admin">Trải Nghiệm Trực Tuyến</NavLink>
        </li>
      </ul>
      <div className="items-center flex-shrink-0 hidden lg:flex">
       {renderLogin()}
      </div>
      <button className="p-4 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>

  )
}
