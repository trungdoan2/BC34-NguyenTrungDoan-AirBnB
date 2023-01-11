import React , {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { quanLyPhongService } from '../../../Services/QuanLyPhongService';

export default function DanhSachPhongAdmin() {

    const [state,setState] = useState({
        DanhSachPhongAdmin: []
        });
      
        useEffect(async () =>{
          try {
            let result = await quanLyPhongService.layDanhSachPhongThue();
      
            setState({
              ...state,
             DanhSachPhongAdmin: result.data.content
            })
          } catch (error) {
            console.log("error",error);
          }
      },[])
      
       
       console.log(state.DanhSachPhongAdmin);
       const renderPhongThue = () => {
        return state.DanhSachPhongAdmin?.map((room, index) => {
          return (
            <tr key={room.id}>
                <td>{room.id}</td>
                <td>{room.tenPhong}</td>
                <td>{room.giaTien}</td>
                <td>{room.moTa}</td>
                <td>
                  <img src={room.hinhAnh} style={{width:60,height:60}}/>
                </td>
              </tr>
          )
        });
      };
    
    
      return (
        <table>
          <tr>
            <th>ID</th>
            <th>Tên Phòng</th>
            <th>Giá tiền</th>
            <th>Mô Tả</th>
            <th>Hình Ảnh</th>
          </tr>
           {renderPhongThue()}
        </table>
      );
}
