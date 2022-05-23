import React, { useEffect } from 'react';
import styles from "../Styles/About.module.scss";
import profileImg from "../Styles/Images/profile4.png";
import { motion } from 'framer-motion';
import pdf from "../Styles/Images/ENGLISH-CV-FRONTEND.pdf";

const About = () => {

    const [skills, setSkills] = React.useState([]);

    //obtener datos con fetch
    const getData = async () => {
        const resp = await fetch('https://portfolio-jdpf.herokuapp.com/skills/');
        const data = await resp.json();
        setSkills(data);
    }

    useEffect(() => {
        getData();
    }, [])

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
                        <div className={styles.about_download}>
                            <a
                                href={pdf}
                                download="JESUS PEREZ_RESUME.pdf">
                                <i className="fa-solid fa-download"></i>
                                Download my resume
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className={styles.about_skills}>
                    {
                        skills.map(skill => (
                            <div
                                key={skill.id}
                                className={styles.bar_flex}>
                                <div className={styles.bar_tag} >
                                    <img src={skill.image} alt={skill.title} />
                                    {skill.title}
                                </div>
                                <div className={styles.bar_fill} >
                                    <motion.div
                                        initial={{ opacity: 0, width: 0 }}
                                        whileInView={{ opacity: 1, width: skill.width }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2 }}
                                        className={styles.bar_fillColor} >
                                    </motion.div>
                                </div>
                                <span>{skill.width}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About