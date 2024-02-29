import React from 'react'
import{motion} from 'framer-motion'
import './Navbar.scss'
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:.5}} 
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >Vishal</motion.span>
            <div className="socials">
                <a href=''><img src="/facebook.png" alt="" /> </a>
                <a href=''><img src="/instagram.png" alt="" /> </a>
                <a href=''><img src="/youtube.png" alt="" /> </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar