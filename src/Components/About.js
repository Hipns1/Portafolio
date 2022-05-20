import React from 'react';
import styles from "../Styles/About.module.scss";
import profileImg from "../Styles/Images/profile4.png";
import { motion } from 'framer-motion';
import firebase from "../Styles/Images/firebase.svg";
import react from "../Styles/Images/react.svg";
import node from "../Styles/Images/node.svg";
import matlab from "../Styles/Images/matlab.svg";
import python from "../Styles/Images/python.svg";
import css3 from "../Styles/Images/css3.svg";
import html5 from "../Styles/Images/html5.svg";
import redux from "../Styles/Images/redux.svg";
import js from "../Styles/Images/js.svg";
import sass from "../Styles/Images/sass.svg";
import git from "../Styles/Images/git.svg";
import photoshop from "../Styles/Images/photoshop.svg";

const About = () => {

    const aboutWidht = {
        react: "70%",
        javascript: "70%",
        redux: "60%",
        firebase: "80%",
        html: "90%",
        css: "90%",
        sass: "60%",
        photoshop: "50%",
        python: "50%",
        git: "60%",
        node: "40%",
        matlab: "70%"
    }

    return (
        <div id="about" className={styles.about_container}>
            <div className={styles.about_title}>
                <h1>ABOUT</h1>
            </div>

            <div className={styles.about_content}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className={styles.about_me}>
                    <div
                        className={styles.about_img}>
                        <div className={styles.about_img__aro}>
                            <img src={profileImg} alt="profile" />
                        </div>
                    </div>
                    <div
                        className={styles.about_text}>
                        <h1>who I am?</h1>
                        <h2>
                            I am a mechatronics engineer and passionate about
                            Front-end development. I have excessive attention
                            to detail and clean design. I am a web developer
                            with a passion for creating beautiful and functional
                            websites. I like to work in a team, pose personal
                            challenges and always looking to acquire new knowledge.
                        </h2>
                    </div>
                </motion.div>

                <div className={styles.about_skills}>
                    {/*React*/}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={react} alt="react" />
                            React
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.react }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.react}</span>
                    </div>

                    {/* JavaScript */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={js} alt="javascript" />
                            JavaScript
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.javascript }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.javascript}</span>
                    </div>

                    {/* Redux */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={redux} alt="redux" />
                            Redux
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.redux }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.redux}</span>
                    </div>

                    {/* Firebase */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={js} alt="firebase" />
                            Firebase
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.firebase }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.firebase}</span>
                    </div>

                    {/* HTML */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={html5} alt="html" />
                            HTML
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.html }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.html}</span>
                    </div>

                    {/* SASS */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={sass} alt="sass" />
                            SASS
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.sass }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.sass}</span>
                    </div>

                    {/* CSS */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={css3} alt="css" />
                            CSS
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.css }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.css}</span>
                    </div>

                    {/* Photoshop */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={photoshop} alt="photoshop" />
                            Photoshop
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.photoshop }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.photoshop}</span>
                    </div>

                    {/* Python */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={python} alt="python" />
                            Python
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.python }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.python}</span>
                    </div>

                    {/* Git */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={git} alt="git" />
                            GIT
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.git }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.git}</span>
                    </div>

                    {/* NodeJS */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={node} alt="node" />
                            NodeJS
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.node }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.node}</span>
                    </div>

                    {/* MATLAB */}
                    <div
                        className={styles.bar_flex}>
                        <div className={styles.bar_tag} >
                            <img src={matlab} alt="matlab" />
                            CSS
                        </div>
                        <div className={styles.bar_fill} >
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: aboutWidht.matlab }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className={styles.bar_fillColor} >
                            </motion.div>
                        </div>
                        <span>{aboutWidht.matlab}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About