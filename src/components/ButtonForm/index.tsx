import React, { ButtonHTMLAttributes } from "react";
import { } from 'yup';
import { Container } from "./styles";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
};

const ButtonForm: React.FC<buttonProps> = ({ children, loading, ...rest }) => {
    return (
        <Container {...rest}>
            {loading ? 'Carregando...' : children}
        </Container>
    )
};

export default ButtonForm;




