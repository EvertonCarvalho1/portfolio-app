
import React, { FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';

import { Container, ContainerButton } from './styles';
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
            <div className="title">
                <h1>Fale comigo!</h1>
            </div>

            <div className="content">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Nome:</label>
                    <input placeholder="Digite seu nome!" type="text" name="user_name" />
                    <label>Email:</label>
                    <input placeholder="Digite seu email!" type="email" name="user_email" />
                    <label>Mensagem:</label>
                    <textarea placeholder="Digite sua mensagem!" name="message" />
                    <ContainerButton >
                        <div className="containerButton">
                            <div className="animated-border"></div>
                            <div className="corner">
                                <input type="submit" value="Enviar" />
                            </div>
                        </div>
                    </ContainerButton>
                </form>
            </div>
        </Container>
    )
};

export default Contact;