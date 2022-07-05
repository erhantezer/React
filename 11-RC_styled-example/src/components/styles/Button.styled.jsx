import styled from 'styled-components';

const Button = styled.button`
background-color: ${({bg}) => bg || '#fff'};
color: ${({bg}) => bg || '#fff'};
border: none;
border: 1px solid black;
padding: 1rem 1.2rem;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-size: 1.1rem;
margin-right:0.3rem;
cursor: pointer;
&:hover{
    opacity: 0.9;
    transform: scale(0.95);
}

`
export default Button