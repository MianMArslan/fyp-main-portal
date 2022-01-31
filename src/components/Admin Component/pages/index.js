import React from 'react';
import NavbarAdmin from '../Navbar';
import Sidebar from '../sidebar';
import Home from "../pages/home page/index";
import './page.css'
import WidgetLg from '../widgetLg/WidgetLg';
import Chart from '../chart/Chart';
import { userData } from '../dummyData';
import WidgetSm from '../widgetSm/WidgetSm'

const Admin = () => {
  return(
      
    <div>
        <NavbarAdmin/>
        <div className='container'>
        <Sidebar />
        <Home />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
        </div>
        </div>
    </div>
  )
};

export default Admin;
