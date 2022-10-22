import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    .socialMedia{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            div{
                margin-bottom: 20px;
            }
            a{
                text-decoration: none;
                color: #FFB400;
                width: 50px;
                height: 50px;     
                svg{
                    transition: 0.3s ease;
                    width: 50px;
                    height: 50px;

                    &:hover{
                        color: #FFF;
                        transform: scale(1.1);
                        -webkit-transform: scale(1.1);
                        -ms-transform: scale(1.1);
                    }
                }
            }

        }  
`;