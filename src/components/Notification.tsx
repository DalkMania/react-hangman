import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Notification = () => {
  const { showNotification } = useContext(GlobalContext)
  
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification
