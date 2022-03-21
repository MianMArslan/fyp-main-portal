import React from 'react';
import {Link} from "react-router-dom"
import  "../Sidebar/Sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReportIcon from '@mui/icons-material/Report';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const SidebarAgency = () => {
  return (
  <>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/order" className="link">
            <li className="sidebarListItem ">
              <LineStyleIcon className="sidebarIcon" />
              Orders
            </li>
            </Link>
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebarIcon" />
              Manage Orders
            </li>
            <Link to="/deals" className='link'>
            <li className="sidebarListItem ">
              <LineStyleIcon className="sidebarIcon" />
              Deals
            </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Manage Deals
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Add new Deals
            </li>
          </ul>
        </div>
        </div>
        </div>
  </>
    )
};

export default SidebarAgency;