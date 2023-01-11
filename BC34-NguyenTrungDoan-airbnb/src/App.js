import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import LayoutAdmin from './templates/admins/LayoutAdmin';
import Layout from './templates/users/Layout';
import TrangChu from './pages/TrangChu/TrangChu';
import TimKiem from './pages/TimKiem/TimKiem';
import NotFound from './pages/NotFound';
import FormPhong from "../src/pages/TrangChu/FormPhong";
// import SignIn from "../src/templates/admins/SignIn";
// import DatPhong from './pages/ViTri/DatPhong';
import DanhSachPhongTheoViTri from './pages/ChiTietSanPham/DanhSachPhongTheoViTri';
import Detail from './pages/Details/Detail';
import Login from './templates/admins/SignIn';
import SignIn from './templates/admins/SignIn';
import Register from './templates/admins/Register';
import Profiles from './templates/admins/Profiles/Profiles';
import EditInformation from '../src/templates/admins/EditInfo/Editinfomation';
import DashBoard from "../src/templates/admins/DashBoard/DashBoard";
import Rooms from "../src/templates/admins/Rooms/Rooms"
import DanhSachPhongAdmin from './templates/admins/DanhSachPhongAdmin/DanhSachPhongAdmin';


function App() {
  return (
    <div className="App">
      <HistoryRouter history={history} >
        <Routes>
          {/* user */}
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<TrangChu />} />
            
            <Route path='/timkiem' element={<TimKiem />} />

            <Route path='*' element={<NotFound />} />
          </Route>

          <Route path='/place'element={<FormPhong/>}/>
          <Route path='/place/:id'element={<DanhSachPhongTheoViTri/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile/:id' element={<Profiles/>}/>
          <Route path="updateUser/:id" element={<EditInformation/>} />
     
          {/* admin */}
          <Route path='/admin' element={<LayoutAdmin />}>
          <Route path="/admin/dashboard" element = {<DashBoard/>} />
          <Route path="/admin/location" element = {<Rooms/>} />
            <Route path="/admin/rooms"  element={<DanhSachPhongAdmin/>}/>
          </Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
