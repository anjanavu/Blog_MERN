import { Route, Routes } from 'react-router-dom';
import Login from './ui_components/Login';
import Signup from './ui_components/Signup';
import Main from './ui_components/Main';
import Addpost from './Elements/Addpost';
import Myprofile from './Elements/Myprofile';
import Viewall from './Elements/Viewall';
import { RequireAuth } from './Elements/Auth';
import { Logout } from './Elements/Logout';

function App() {
  return (
    <div >
      
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/addpost' element={<RequireAuth><Main child={<Addpost/>}/></RequireAuth>}></Route>
      <Route path='/myprofile' element={<RequireAuth><Main child={<Myprofile/>}/></RequireAuth>}></Route>
      <Route path='/view' element={<RequireAuth><Main child={<Viewall/>}/></RequireAuth>}></Route>
      <Route path='/logout' element={<Main child={<Login/>}/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
