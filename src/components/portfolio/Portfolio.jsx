import React, { useRef, useState } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'


const Single = ({item}) => {
    const ref = useRef();
    
    const {scrollYProgress}= useScroll({
        target:ref,
        offset:['start start' ,"end end"]
    })

    const y = useTransform(scrollYProgress, [0,1], [-1000, 1000])
  return (
    <section>
        <div className="container" >
            <div className="wrapper" >
                <div className="imgContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
            
            <motion.div className="textContainer"style={{y}} >
                <h2>{item.project_title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>
  )
}


const Portfolio = () => {
    const items = [
        {
            id:1,
            project_title:"News Monkey",
            img : "/newsMonkey.png",
            desc : "Lorem  eius inventore voluptas voluptatibus quisquam? Aperiam sapiente quidem itaque nostrum molestiae magni autem. Eligendi temporibus illo delenitiis"
        },
        {
            id:2,
            project_title:"Netflix web app",
            img : "/netflix.png",
            desc : " Modi quae ipsam veritatis necessitatibus eius inventore voluptas voluptatibus quisquam? Aperiam sapiente quidem itaque nostrum molestiae magni autem. Eligendi temporibus illo delenitiis"
        },
        {
            id:3,
            project_title:"Codial",
            img : "https://pixels.com/assets/images/rooms/masterBedroom001.jpg",
            desc : "Modi quae ipsam veritatis necessitatibus eius inventore voluptas voluptatibus quisquam? Aperiam sapiente quidem itaque nostrum molestiae magni autem. Eligendi temporibus illo delenitiis"
        },
        {
            id:4,
            project_title:"React Project",
            img : "https://pixels.com/assets/images/rooms/masterBedroom001.jpg",
            desc : "Modi quae ipsam veritatis necessitatibus eius inventore voluptas voluptatibus quisquam? Aperiam sapiente quidem itaque nostrum molestiae magni autem. Eligendi temporibus illo delenitiis"
        }
    ]
    const ref = useRef();
    

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
  return (
          <div className='portfolio' ref={ref}> 
      <div className="progress" >
        <h1>Feature Work</h1>
    <motion.div style={{scaleX}} className="progressBar">  </motion.div>
    </div>
        {items.map(item=>(
            <Single item={item}  key={item._id}/>
        ))}
    </div>
  )
}

export default Portfolio