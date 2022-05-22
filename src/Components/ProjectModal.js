import React from 'react';
import styles from '../Styles/Modal.module.scss';
import Slider from './Slider';

const ProjectModal = ({ project, close }) => {

    const handleClose = () => {
        close(false);
    }

    return (
        <div className={styles.modal_container}>
            <div className={styles.modal_background}>
                <div className={styles.modal_content}>

                    <div className={styles.modal_header}>
                        <Slider project={project} />
                    </div>

                    <div className={styles.modal_body}>
                        <div className={styles.modal_title}>
                            <h1>{project.title}</h1>
                            <p>{project.technologies}</p>
                        </div>
                        <div className={styles.modal_description}>
                            <p>{project.description}</p>
                        </div>
                    </div>

                    <div className={styles.modal_footer}>
                        <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            View site
                        </a>
                        <button onClick={handleClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal