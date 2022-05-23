import React, { useRef } from 'react';
import { nextSlide } from '../Hooks/nextSlide';
import { prevSlide } from '../Hooks/prevSlide';
import styles from "../Styles/Slider.module.scss";

const Slider = ({ project }) => {
    const slideshow = useRef(null);

    //funcion para mover el slider a la siguiente imagen
    const handleNext = () => {
        nextSlide(slideshow);
    }

    //funcion para mover el slider a la imagen anterior
    const handlePrev = () => {
        prevSlide(slideshow)
    }

    return (
        <div className={styles.slide_container}>
            <div className={styles.slider_images} ref={slideshow} >
                {project.image1 ? <div className={styles.slider_slide}>
                    <img src={project.image1} alt="slide1"/>
                </div> : null}
                {project.image2 ? <div className={styles.slider_slide}>
                    <img src={project.image2} alt="slide2"/>
                </div> : null}
                {project.image3 ? <div className={styles.slider_slide}>
                    <img src={project.image3} alt="slide3"/>
                </div> : null}
                {project.image4 ? <div className={styles.slider_slide}>
                    <img src={project.image4} alt="slide4"/>
                </div> : null}
                {project.image5 ? <div className={styles.slider_slide}>
                    <img src={project.image5} alt="slide5"/>
                </div> : null}
                {project.image6 ? <div className={styles.slider_slide}>
                    <img src={project.image6} alt="slide6"/>
                </div> : null}
                {project.image7 ? <div className={styles.slider_slide}>
                    <img src={project.image7} alt="slide7"/>
                </div> : null}
                {project.image8 ? <div className={styles.slider_slide}>
                    <img src={project.image8} alt="slide8"/>
                </div> : null}
                {project.image9 ? <div className={styles.slider_slide}>
                    <img src={project.image9} alt="slide9"/>
                </div> : null}
                {project.image10 ? <div className={styles.slider_slide}>
                    <img src={project.image10} alt="slide10"/>
                </div> : null}
            </div>
            <div className={styles.slider_controls}>
                <button onClick={() => handlePrev()}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button onClick={() => handleNext()}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Slider