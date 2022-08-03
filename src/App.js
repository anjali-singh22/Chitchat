import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      
      <div className="app_body">
        {/*sidebar*/}
        <Sidebar />
        {/*Chat area*/}
        <Chat />
      </div>
    </div>
  );
}

export default App;
