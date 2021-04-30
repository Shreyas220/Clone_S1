import React from 'react'
import { useDataLayerValue } from './DataLayer'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
             <SidebarOption  title="Home" />
            <SidebarOption  title="Search" />
            <SidebarOption  title ="Your Library" />
            <br/>
            <br />
        <strong className="sidebar__title">PLAYLIST</strong>
        <hr />
        
        {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

        </div>
    )
}

export default Sidebar;

