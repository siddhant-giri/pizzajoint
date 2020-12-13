import React,{ useState, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';

const containervariants = {
  hidden : {
    x:'100vw',
    opacity : 0
  },
  visible : {
    opacity : 1,
    x : 0,
    transition : {
      type:'spring', 
      mass: 0.4,
      damping : 8,
      when : "beforeChildren",
      staggerChildren : 0.4
    }
  },
  exit : {
    x : '-100vw',
    transition : {ease : 'easeInOut'}
  }
}

const childvariants = {
hidden : {
  opacity : 0
},
visible :{
  opacity : 1
}
}
 
const Order = ({ pizza, setShowModal }) => {

  // const [showTitle, setShowTitle] = useState(true);
  // setTimeout(() => {
  //   setShowTitle(false);
  // }, 4000)

useEffect(()=>{
  setTimeout(()=>{
    setShowModal(true)
  },5000)
}, [setShowModal])

  return (
    <motion.div className="container order"
    variants = {containervariants}
    initial="hidden"
    animate="visible"
    exit="exit">


    <h2>Thank you for your order :)</h2>

{/* <AnimatePresence>
    { showTitle && (
      <motion.h2
      exit={{ opacity : 0 }}
      >Thank you for your order :)</motion.h2>
      )
    }
    </AnimatePresence> */}


      <motion.p variants={childvariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
      variants={childvariants}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;