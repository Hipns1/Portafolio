import styles from "../Styles/NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        const bar = document.getElementById("bar");
        const close = document.getElementById("close");
        setIsOpen(!isOpen);
        if (isOpen) {
            bar.style.display = "none";
            close.style.display = "block";
        } else if (isOpen === false) {
            bar.style.display = "block";
            close.style.display = "none";
        }
    }

    const handleClose = () => {
        handleMenu();
        document.getElementById("check").click();
    }

    useEffect(() => {
        handleMenu();
        document.getElementById("close").style.display = "none";
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.nav}>
            <nav className={styles.nav_container}>
                <div className={styles.nav_logo}>
                    <h1>JDPF.</h1>
                </div>
                <input type="checkbox" id="check" className={styles.nav_menu} />
                <label
                    htmlFor="check"
                    className={styles.nav_label}
                    onClick={() => handleMenu()}>
                    <i className="fa-solid fa-bars" id="bar"></i>
                    <i className="fa-solid fa-xmark" id="close"></i>
                </label>
                <div className={styles.nav_options} id="nav_options">
                    <a onClick={() => handleClose()} href="#home">Home</a>
                    <a onClick={() => handleClose()} href="#about">About</a>
                    <a onClick={() => handleClose()} href="#projects">Projects</a>
                    <a onClick={() => handleClose()} href="#contact">Contact</a>
                    <a onClick={() => handleClose()} href="https://github.com/Hipns1" target="blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a onClick={() => handleClose()} href="https://www.linkedin.com/in/jes%C3%BAs-david-p%C3%A9rez-ferrer-a72117164/" target="blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </nav>
        </motion.div>
    )
}

export default NavBar