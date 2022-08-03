import React, { useEffect, useState } from 'react';
import SidebarChat from "./SidebarChat";

import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Sidebar.css';
import { IconButton }from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import db from "./firebase";


function Sidebar() {

  const[rooms, setRooms]=useState([]);

  useEffect(()=>{
     db.collection('rooms').onSnapshot(snapshot=>(setRooms(snapshot.docs.map(doc=>
      ({
        id: doc.id,
        data: doc.data()
      }))
      )
      ));
  },[])


  return (
    <div className='sidebar'>

        <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          
        </div>
        </div>



        <div className="sidebar_search">
          <div className="search_searchContainer">

            <SearchOutlinedIcon />
            <input placeholder='Search or Start new ChitChat' type='text' />
            
          </div>
         
        </div>



        <div className="sidebar_chats">
          <SidebarChat addNewChat />
          {
            rooms.map(room=>(
              <SidebarChat key={room.id}
              id={room.id} name={room.data.name} />
          ))
          }

        </div>
    </div>
  );
}

export default Sidebar;