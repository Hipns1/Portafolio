import React from 'react';
import styles from "../Styles/Home.module.scss";
import { motion } from 'framer-motion';
import scrollGif from "../Styles/Images/scroll-down2.gif";

const Home = () => {

    return (
        <div className={styles.home_container} id="home">
            <div className={styles.home_text}>
                <motion.h1
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    Hi, I'm Jesus David Perez Ferrer,
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: 1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    Mechatronics engineer and Front-end developer
                </motion.h2>
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    href='#about'>
                    <img src={scrollGif} alt="scrollGif" />
                    Know my work
                </motion.a>
            </div>
        </div >
    )
}

export default Home