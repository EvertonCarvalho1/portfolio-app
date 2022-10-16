
import React, { FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';

import { Container } from './styles';
import toast from "react-hot-toast";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current !== null) {
            emailjs.sendForm('service_p1n1cu9', 'template_knoojcs', form.current, 'D5ikbopFybe6cbbE_')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <Container>
            <form ref={form} onSubmit={sendEmail}>
                <label>Nome</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Mensagem</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </Container>
    )
};

export default Contact;