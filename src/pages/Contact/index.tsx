
import React, { useCallback, useRef } from "react";
import { FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import InputForm from "../../components/InputForm";

import { Container, Content } from './styles';
import toast from "react-hot-toast";

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const Contact: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: SignUpFormData) => {

        try {

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required(() => toast.error('Nome obrigatório')),
                email: Yup.string().required(() => toast.error('Email obrigatório')).email(() => toast.error('Digite um email válido')),
            });

            console.log(data)
            await schema.validate(data, {
                abortEarly: false,
            });

            toast.success("Mensagem enviada com sucesso!")

        } catch (err) {
        }
    }, [])

    return (
        <Container>

            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>

                    <InputForm
                        icon={FiUser}
                        name='name'
                        placeholder="Nome"
                    />

                    <InputForm
                        icon={FiMail}
                        name='email'
                        placeholder="E-mail"
                    />
                    <button type="submit">Enviar</button>
                </Form>
            </Content>
        </Container>
    )
};

export default Contact;