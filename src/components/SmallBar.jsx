import React, { useState } from 'react'

const style = {
  barComponent : {
    // backgroundColor: 'white',
    width: '60px',
  },
  firstComponent: {
    // backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    height: '153px',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  secondComponent: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex'
  }
}

const innerComponent = {
  borderRight: 'none',
  borderBottom: 'none',
  borderTop: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  borderLeft: '4px solid green',
  color: 'white',
  backgroundColor: 'black',
}

const createBorder = {

}

let chatComponent = 
  <h1>hwllo chat</h1>


function SmallBar() {
  const [setState, getState] = useState('')

  const runBorder = (event) => {
    if(event.target.value === 'chat') {
      getState('chat')
    } else if(event.target.value === 'calls') {
      getState('calls')
    } else {
      getState('status')
    }
  }
  return (
    <div style={style.barComponent}>
      <div className="first" style={style.firstComponent}>
        <button type='button' value = "chat" onClick={runBorder} style = { innerComponent } >C</button>
        <button type='button' value = "calls" onClick={runBorder} style = { innerComponent } >C</button>
        <button type='button' value = "status" onClick={runBorder} style = { innerComponent } >S</button>
      </div>
      <div className="second">
        
      </div>
    </div>
  )
}

export default SmallBar