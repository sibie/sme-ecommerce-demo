import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='contact'>
        <h1>Subscribe To Our Newsletter</h1>
        <p>Join to get the latest news, updates and special offers directly delivered to your mailbox.</p>
        <div>
            <input type='email' placeholder='Your Email ID'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
