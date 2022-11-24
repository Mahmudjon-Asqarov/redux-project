import React from 'react';
import './ContactModal.css';

const ContactModal = () => {
  return (
    <div className="contactModal">
      <div className="contactModal__wrapper">
          <div className='contactModalImg'>
          <img src="https://eus-www.sway-cdn.com/s/GyGqFCD7jDLBE8Xp/images/rduqNvCV1z_oBy?quality=512&allowAnimation=true" alt="" />
          </div>
        <p>Sizning xabaringiz yuborildi!</p>
      </div>
      <div className="overlayModal"></div>

    </div>
  )
}

export default ContactModal