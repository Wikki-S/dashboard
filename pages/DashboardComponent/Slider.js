import React, { useState } from 'react'
import './Slider.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SidebarList from './SidebarList';
import  logo  from '../../logo.svg'

function Slider(props) {
  const { openSidebar } = props
  

  const closeHandler = () => {
    
    props.onSideBar(!openSidebar)
  }
  return (
    <>
   
      <div className={`slider ${openSidebar == false ? 'open' : 'close'}`}>
      <div className="header-sider">
        <div className='logo'>
          <img src={logo} />
        </div>
        <ArrowCircleLeftIcon className="closeToggle" onClick={closeHandler} />
        </div>
        <ul className="sidebar-list">
          <SidebarList />
        </ul>
      </div>
    </>
  )
}

export default Slider