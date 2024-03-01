import { useRef } from 'react'
import './services.scss'
import {motion, useInView} from 'framer-motion'

const varients = {
    initial : {
        x:-500,
        opacity:0,
        
    },
    animate : {
        x:0,
        opacity : 1,
        y:0,
        transition : {
            duration : 2,
            type:"spring",
            staggerChildren : 0.1
            
        }
    }
}

const Services = () => {
    const ref  = useRef();
    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className='services' variants={varients} ref = {ref} initial="initial" animate ={isInView &&"animate"}>
        <motion.div className="textContainer" variants={varients}>
            <p>We focus on helping your brand<br/> and move forward</p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer" variants={varients}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> business
                    </h1>
                    <button>Want To Know?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={varients}>
            <motion.div className="box" whileHover={{background:"lightgrey" , color:"black"}}>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas, hic possimus in perferendis blanditiis tenetur cum voluptates impedit alias illo odio debitis quasi sapiente animi, sunt repellat accusantium aperiam.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey" , color:"black"}}>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas, hic possimus in perferendis blanditiis tenetur cum voluptates impedit alias illo odio debitis quasi sapiente animi, sunt repellat accusantium aperiam.</p>
                <button>Go</button>
            </motion.div> 
             <motion.div className="box" whileHover={{background:"lightgrey" , color:"black"}}>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas, hic possimus in perferendis blanditiis tenetur cum voluptates impedit alias illo odio debitis quasi sapiente animi, sunt repellat accusantium aperiam.</p>
                <button>Go</button>
            </motion.div> 
             <motion.div className="box"whileHover={{background:"lightgrey" , color:"black"}}>
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas, hic possimus in perferendis blanditiis tenetur cum voluptates impedit alias illo odio debitis quasi sapiente animi, sunt repellat accusantium aperiam.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services