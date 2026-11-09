import React, { useEffect } from 'react';
import styles from "../Styles/About.module.scss";
import profileImg from "../Styles/Images/profile3.jpg";
import { motion } from 'framer-motion';
import pdf from "../Styles/Images/Jesus_Perez_CV_(EN).pdf";
import dataSkills from "../utils/data.json"

const About = () => {

    const [skills, setSkills] = React.useState([]);

    useEffect(() => {
        setSkills(dataSkills.skills)
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
                            Passionate about Front-end development,
                            I have a meticulous attention to detail
                            and a penchant for clean design. As a web
                            developer, my goal is to create beautiful
                            and functional websites. I enjoy collaborative
                            work, embrace personal challenges, and am
                            always eager to acquire new knowledge.
                        </h2>
                        <div className={styles.about_download}>
                            <a
                                href={pdf}
                                download="JESUS_PEREZ_RESUME.pdf">
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