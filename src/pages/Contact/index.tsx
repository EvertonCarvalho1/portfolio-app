
import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

// import { useToast } from "../../hooks/toast";


// import getValidationErrors from '../../utils/getValidationErrors'

import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";

import { Container, Content } from './styles';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const Contact: React.FC = () => {

    const formRef = useRef<FormHandles>(null);
    // const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // await api.post('/users', data);

            history.push('/')

            // addToast({
            //     type: 'success',
            //     title: 'Cadastro realizado',
            //     description: 'Você ja pode fazer seu logon no GoBarber'
            // })


        } catch (err) {
            // if (err instanceof Yup.ValidationError) {
            //     console.log(err)
            //     const errors = getValidationErrors(err);

            //     formRef.current?.setErrors(errors);
            //     return;
            // }

            // addToast({
            //     type: 'error',
            //     title: 'Erro no cadastro',
            //     description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
            // });
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
                    <InputForm
                        icon={FiLock}
                        name='password'
                        type="password"
                        placeholder="Senha"
                    />

                    <ButtonForm type="submit">Cadastrar</ButtonForm>

                </Form>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para login
                </Link>

            </Content>
        </Container>
    )
};

export default Contact;