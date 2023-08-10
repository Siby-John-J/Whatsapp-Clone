import React, { useState } from 'react'
import '../css/UserBar.css'
import Img from '../assets/filter.jpg'
import Note from '../assets/note.jpg'


// const [getInput, changeInput] = useState(false)

let users = [1,2,3,4,5,6,7,8]

const styles = {
    chatTitle: {
      display: 'flex',
      flexDirection: 'row'
    },
    barComponent: {
        backgroundColor: '#292929',
        width: '25em'
    },
    titleStyle: {
      color: 'white',
      fontFamily: 'sans-serif',
      fontSize: '1.6em',
      // backgroundColor: 'red',
      marginLeft: '30px',
      paddingRight: '5em'
      // width: '80px'
    },
    filterStyle: {
      height: '28px',
      marginLeft: '2em',
      marginTop: '13px',
      mixBlendMode: 'color-dodge'
    },
    inputStyle: {
      width: '24em',
      marginLeft: '1.5em',
      marginTop: '12px',
      backgroundColor: '#4b4b4b',
      borderRadius: '5px',
      outline: 'none',
      color: 'white'
    }
}


let styleTime = {
  fontFamily: 'system-ui',
  color: 'white',
  fontWidth: '0.3px'
}

const onClickStyle = () => {
  // styles.inputStyle.borderBottom = '3px solid green' 
  // console.log(styles.inputStyle)
}

const filterChange = () => {
  // alert('sus')
}

function UserBar() {
  return (
    <div style={styles.barComponent}>
      <div style={styles.chatTitle} className="chat-title">
        <h1 style={styles.titleStyle}>Chats</h1>
        {/* <Svg /> */}
        <img style={styles.filterStyle} src={Note} alt="" />
        <img onClick={filterChange} style={styles.filterStyle} src= {Img} alt="mems" />
      </div>
      <input onClick={ onClickStyle } type="text" style={styles.inputStyle} placeholder='Search or Start a new chat' />
      <div className="main-list">
        <div className="single-el">
          {/* <img src="" alt="" /> */}
          <div className="image">

          </div>
          <div className="wrap-details">
            <label class='nameTitle' htmlFor="">Name</label>
            <label class='nameContent' htmlFor="">content</label>
          </div>
          <label style={styleTime} htmlFor="">9:00</label>
        </div>
      </div>
    </div>
  )
}

export { UserBar }
