import React, { useEffect } from 'react';
import styles from "../Styles/Project.module.scss";
import ProjectModal from './ProjectModal';

const Projects = () => {

    const [projects, setProjects] = React.useState([]);
    const [projectModal, setProjectModal] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);

    //obtener datos con fetch
    const getData = async () => {
        const resp = await fetch('https://portfolio-jdpf.herokuapp.com/projects');
        const data = await resp.json();
        setProjects(data);
    }

    //funcion para activar el modal con el detalle del proyecto
    const handleDetail = (project) => {
        setProjectModal(project);
        setShowModal(true);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={styles.porjects_container} id="projects">
            <div className={styles.projects_title}>
                <h1>PROJECTS</h1>
            </div>
            <div className={styles.projects_card__container}>
                {
                    projects.map(project => (
                        <div className={styles.projects_card} key={project.id}>
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
                        </div>
                    ))
                }
            </div>
            {showModal
                ? <ProjectModal
                    project={projectModal}
                    close={setShowModal}/>
                : null}
        </div>
    )
}

export default Projects