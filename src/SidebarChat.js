import React, { useEffect, useState } from 'react';

import './SidebarChat.css';

//import Avatar from "@mui/material/Avatar";




function SidebarChat({ id,name, addNewChat }) {

  const [Savatar,setAvatar]=useState('');

  useEffect(()=>{
     setAvatar(Math.floor(Math.random()*5000));
  },[])

   const createChat=()=>{
    const roomName= prompt("Please enter name for chat");
    if(roomName){
        //do some clever dbms stuff
    }
   };

  return !addNewChat ? (
    <div className='sidebarChat'>
       
        <div className="sidebarChat_info">
            <h2>{name}</h2>
            <p>Last meassage...</p>
        </div>
    </div>
  ): (
    <div onClick={createChat}
    className="sidebarChat">
        <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;