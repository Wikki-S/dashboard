import React from 'react'
import {Link } from 'react-router-dom'
import './SidebarList.scss'
function SidebarList() {
    const sideBarItems = [
        {
            index: 1,
            name: 'Dashboard',
            url: '/chart',
            iconName: 'FaNewspaper'
        },
        {
            index: 2,
            name: 'User Management',
            url: '/user-management',
            iconName: 'FaComments'
        },
        {
            index: 3,
            name: 'Assign Jobs',
            url: '/assign-job',
            iconName: 'FaUsers'
        },
        {
            index: 4,
            name: 'Pending Approval',
            url: '/pending-approval',
            iconName: 'FaUserPlus'
        },
        {
            index: 5,
            name: 'Complete Jobs',
            url: '/complete-jobs',
            iconName: 'FaHeart'
        },
        {
            index: 6,
            name: 'Announcement',
            url: '/announcement',
            iconName: 'FaImages'
        },
        {
            index: 7,
            name: 'Checklist',
            url: '/checklist',
            iconName: 'FaVideo'
        }
    ];
    
    {
        let menu = sideBarItems.map((e,i) => {
            return ( <li key={i}><Link to={e.url}>{e.name}</Link></li> )
        }
    )
    return menu
}
}

export default SidebarList