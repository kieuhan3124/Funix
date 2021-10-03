import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffList';
import { STAFFS } from './minidb/staffs';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Phần mềm quản lý nhân viên v1.0</NavbarBrand>
        </div>
      </Navbar>
      <div className="container-fluid"><StaffList staffs={STAFFS} /></div>
    </div>
  );
}

export default App;
