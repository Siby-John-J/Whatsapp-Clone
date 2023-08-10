import { useState } from 'react'
import SmallBar from './components/SmallBar'
import {UserBar, UserList } from './components/UserBar'
import MainWin from './components/MainWin'
import './App.css'

function App() {

  return (
    <div className="main">
      <SmallBar />
      <UserBar />
      {/* <UserList /> */}
      <MainWin />
    </div>
  )
}

export default App
