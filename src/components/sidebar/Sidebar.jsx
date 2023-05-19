import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import InventoryIcon from '@mui/icons-material/Inventory';
import BedIcon from '@mui/icons-material/Bed';
// import ListAltIcon from '@mui/icons-material/ListAlt';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">YunAdmin</span>
         </Link>
            </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                    </li>
                    </Link>
                <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                <li>
                    <PersonOutlinedIcon className='icon'/>
                    <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/hotels" style={{textDecoration: "none"}}>
                <li>
                    <BedIcon className='icon'/>
                    <span>Hotels</span>
                    </li>
                    </Link>
                <li>
                    <HotelIcon className='icon'/>
                    <span>Rooms</span>
                    </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                    </li>
                <p className="title">USEFUL</p>
                <li>
                    <PollOutlinedIcon className='icon'/>
                    <span>Stats</span>
                    </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Notification</span>
                    </li>
                <p className="title">SERVICE</p>
                <li>
                    <SystemSecurityUpdateGoodOutlinedIcon className='icon'/>
                    <span>System Health</span>
                    </li>
                <li>
                    <PsychologyOutlinedIcon className='icon'/>
                    <span>Logs</span>
                    </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Setting</span>
                    </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                    </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                    </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar