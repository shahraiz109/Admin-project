import logo from './logo.svg';
import './App.css';
import Sidbar from './component/Sidbar';
import DashboardView from './component/DashboardView';
import {Outlet} from "react-router-dom"
import Main from './component/Main';


function App() {
  return (
    <div className="flex">
  <div className='basis-[12%] h-[100vh] border'>
    <Sidbar/>
  </div>
      <div className='basis-[88%] border h-[100vh] overflow-scroll'>
        <DashboardView/>
     
        <div>
<Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
