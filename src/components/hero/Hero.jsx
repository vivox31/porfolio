import './hero.scss'
import {motion} from 'framer-motion'

const textVarients = {
  initial : {
    x:-500,
    opacity : 0
  },
  animate : {
    x : 0,
    opacity: 1,

    transition: {
      duration : 1,
      staggerChildren: 0.1
    }
  },
  scrollButton : {
    opacity :0,
    y: 10,
    transition:{
      duration:2,
      repeat: Infinity
    }

  }

}

const SliderVarients = {
  initial : {
    x:0,
  },
  animate : {
    x : "-220%",

    transition: {
      duration : 20,
      repeat: Infinity,
      repeatType:"mirror"
    }
  },
  
}
const Hero = () => {

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVarients} initial="initial" animate="animate" >

          <motion.h2  variants={textVarients}>Vishal Kalwani</motion.h2>
          <motion.h1 variants={textVarients}>Web Developer and Ui designer</motion.h1>
          <motion.div className="buttons">
            <motion.button variants={textVarients}>see the latest work</motion.button>
            <motion.button variants={textVarients}>contact Me</motion.button>
          </motion.div>
        <motion.img src="/scroll.png" alt="" variants={textVarients} animate="scrollButton" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={SliderVarients} initial="initial" animate="animate">
        Full Stack Developer Sortware Engineer
      </motion.div>

      <div className="image-container">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero