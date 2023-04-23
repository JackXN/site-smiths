import {motion} from 'framer-motion';


export default function FramerAnimation() {
    return(
        <motion.h1
        initial={{x: -1000}}
        animate={{x:[0,900,0]}}
        transition={{
            duration: '3',
            delay: '1'
        }}
        whileHover={{scale: '0.9'}}
        >
            Crafting Beautiful Things
        </motion.h1>
    )
}