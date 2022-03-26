import { NoEncryption } from '@material-ui/icons'
import React from 'react'
import './styles.css'
const EmailMessage = () => {
  return (
    <div className='mainbody'>
    <div className='content'>
      <br></br>
        <h1 align = 'center'>Account Confirmation</h1><br></br>
        <p align = 'center'>You are successfully verify your Email</p><br></br>
        <p align = 'center'>Click here to Login!</p><br></br>
        <button style={{ width:'15%', height:'50px',
    marginTop : '20px',
    marginLeft: '43%',
    borderRadius:  '2px',
    backgroundColor : '#ffa000',
    outline : 'none',
    borderRadius : '1rem',
    border: 'none',
    color : '#fff',
    cursor : 'pointer',
    fontSize : '1.25rem',
    fontWeight : 'bold'}}>
        <a href='/login'  style={{textDecoration : 'none', color: '#fff'
    }} >Proceed</a>
        </button>
    </div>
        </div>

  )

}

export default EmailMessage
