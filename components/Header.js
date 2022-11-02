import React from 'react'

export default function Header() {
    return(
        <header>
          <img src="../images/Header/dev.jpg" className='dev-image'/>
          <h1>Igor Beserra</h1>
          <h2>Frontend Developer</h2>
          <p>igorbeserra.website</p>
          
          <section className='links'>
          <button className='mail'>
            <img className='mail-image' src='../images/Header/Mail.png' />
            <p>Email</p>
          </button>
          
          <button className='linkedin'>
            <img className='linkedin-image' src='../images/Header/linkedin.png'/>
            <a href="https://www.linkedin.com/in/igor-beserra-668419184/" target='_blank'>
              <p>LinkedIn</p>
            </a>
          </button>
          </section>
          
        </header>
    )
}