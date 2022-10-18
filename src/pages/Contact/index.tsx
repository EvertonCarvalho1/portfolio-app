
import React, { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import { Container, ContainerButton } from './styles';
import toast from "react-hot-toast";
import Aos from "aos";

const Contact: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef<HTMLFormElement>(null);

    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log('meus dados', {
            userName,
            userEmail,
            message
        },
        );

        if (!!userName && !!userEmail && !!message) {
            if (form.current !== null) {
                emailjs.sendForm('service_p1n1cu9', 'template_knoojcs', form.current, 'wOqR_S9KIAg1emNeY')
                    .then((result) => {
                        console.log(result.text);
                        toast.success('Mensagem enviada!')
                    }, (error) => {
                        console.log(error.text);
                        toast.error('Algo deu errado.')
                    });
            }
        } else {
            toast.error('Preencha todos os dados.')
        }
    };

    useEffect(() => {
        Aos.init({
            duration: 3000,
            mirror: true
        });
    }, []);

    return (
        <Container
            emailIsFilled={userEmail}
            nameIsFilled={userName}
            messageIsFilled={message}
            className='contactAnchor'
        >
            <div className="title">
                <h1>Fale comigo!</h1>
            </div>

            <div
                className="content"
                data-aos='fade-right'
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-anchor=".contactAnchor"
            >
                <form ref={form} onSubmit={sendEmail}>
                    <label>Nome:</label>
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Digite seu nome!"
                        type="text"
                        name="user_name"
                    />
                    <label>Email:</label>
                    <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Digite seu email!"
                        type="email"
                        name="user_email"
                    />
                    <label>Mensagem:</label>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Digite sua mensagem!"
                        name="message"
                    />
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