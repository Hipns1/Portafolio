import React from 'react';
import { Field, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import styles from "../Styles/Contact.module.scss";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
    email: Yup.string()
        .email('Enter a valid email')
        .required('This field is required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('This field is required'),
});

const MyTextArea = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
        </>
    );
};

const Contact = () => {

    //funcion para enviar el formulario
    const handleSubmit = () => {
        const element = document.getElementById("form")
        emailjs.sendForm('service_dyy17bo', 'template_95o0l4q', element, 'EP2yVkfqx9nXbfu_Z')
            .then((result) => {
                Swal.fire({
                    title: 'Thank you!',
                    text: 'Your message has been sent successfully',
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false
                });
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={styles.contact_container} id="contact">
            <div className={styles.contact_title}>
                <h1>CONTACT</h1>
            </div>

            <div className={styles.contact_form__container}>
                <p>If you are interested in my work, contact me!</p>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        message: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, { resetForm }) => {
                        handleSubmit();
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form id='form'>
                            <div className={styles.contact_form__inputs}>
                                <Field name="name" type="text" autoComplete="off" placeholder="Name" />
                                {errors.name && touched.name ? (
                                    <div className={styles.contact_error}>
                                        {errors.name}
                                    </div>
                                ) : null}
                            </div>

                            <div className={styles.contact_form__inputs}>
                                <Field name="email" type="text" autoComplete="off" placeholder="Email" />
                                {errors.email && touched.email ? (
                                    <div className={styles.contact_error}>
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>

                            <div className={styles.contact_form__inputs}>
                                <MyTextArea name="message" type="textarea" autoComplete="off" placeholder="Message" />
                                {errors.message && touched.message ? (
                                    <div className={styles.contact_error}>
                                        {errors.message}
                                    </div>
                                ) : null}
                            </div>

                            <button className={styles.contact_continue__btn} type="submit">
                                Submit
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Contact;
