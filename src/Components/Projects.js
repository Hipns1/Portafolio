import React, { useEffect } from 'react';
import styles from "../Styles/Project.module.scss";
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';
import wave from "../Styles/Images/wave.svg";
import dataProjects from "../utils/data.json";

const Projects = () => {
    const [projects, setProjects] = React.useState([])
    const [projectModal, setProjectModal] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);


    //funcion para activar el modal con el detalle del proyecto
    const handleDetail = (project) => {
        setProjectModal(project);
        setShowModal(true);
    }

    const filterProjects = (why) => {
        if (why === 'all') {
            setProjects(dataProjects?.projects)
        }
        if (why === 'js') {
            const filter = dataProjects?.projects?.filter(project => project?.technologies?.includes('JavaScript'));
            setProjects(filter)
        }
        if (why === 'react') {
            const filter = dataProjects?.projects?.filter(project => project?.technologies?.includes('ReactJS'));
            setProjects(filter);
        }
    }

    useEffect(() => {
        filterProjects()
        setProjects(dataProjects?.projects)
    }, [])

    return (
        <div className={styles.porjects_container} id="projects">
            <div className={styles.projects_title}>
                <h1>PROJECTS</h1>
            </div>
            <div className={styles.projects_filter}>
                <button id="all" onClick={() => filterProjects('all')}>
                    <i className="fa-solid fa-earth-americas"></i>
                    ALL
                </button>
                <button id='js' onClick={() => filterProjects('js')}>
                    <i className="fa-brands fa-js"></i>
                    JAVASCRIPT
                </button>
                <button id="react" onClick={() => filterProjects('react')}>
                    <i className="fa-brands fa-react"></i>
                    REACTJS
                </button>
            </div>
            <div className={styles.projects_card__container}>
                {
                    projects.map(project => (
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className={styles.projects_card}
                            key={project.id}>
                            <div className={styles.projects_card__img}
                                style={{ backgroundImage: `url(${project.thumb})` }}>
                            </div>
                            <div className={styles.projects_card__info}>
                                <div className={styles.projects_card__text}>
                                    <h1>
                                        {project.title}
                                        <span>{project.technologies}</span>
                                    </h1>
                                </div>
                                <div className={styles.projects_card__button}>
                                    <button
                                        onClick={() => handleDetail(project)}
                                    >LEARN MORE</button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            {showModal
                ? <ProjectModal
                    project={projectModal}
                    close={setShowModal} />
                : null}
            <div className={styles.projects_wave}>
                <img src={wave} alt="wave" />
            </div>
        </div>
    )
}

export default Projects