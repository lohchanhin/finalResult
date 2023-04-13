import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" exact>
            首页
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/attendance" activeClassName="active">
            员工打卡
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/leave-management" activeClassName="active">
            请假管理
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/report" activeClassName="active">
            报表与分析
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" activeClassName="active">
            系统设置
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/employee-management" activeClassName="active">
            人事管理
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/schedule-management" activeClassName="active">
            排班管理
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
